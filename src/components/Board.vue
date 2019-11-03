<template>
  <div class="board">
    <div class="grid">
      <!-- Rows -->
      <div 
        v-for="(row, index) in grid" 
        :key="index" class="rows">
        <!-- slots -->
        <div
          v-for="slot in row"
          :key="slot.column"
          :class="['slot', getTileStatus(slot)]"
          @click="playSlot(slot)"
        >
          <div v-if="slot.isShip && slot.isPlayed">
            🔥
          </div>
          <div v-if="!slot.isShip && slot.isPlayed">
            x
          </div>
        </div>
      </div>
      <div
        v-if="isBomb"
        :style="cssBombCoords(bombRow, bombCol)" 
        class="bomb">
        💣
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      grid: [],
      isBomb: false,
      bombRow: 0,
      bombCol: 0
    };
  },
  props: {
    attempts: {
      type: Number,
      required: true
    },
    ships: {
      type: Array,
      required: true
    },
    gridSize: {
      type: Number,
      default: 8,
    }
  },
  created() {
    this.grid = this.generateGrid()
  },
  methods: {
    generateGrid() {
      let grid = [];
      for (let r = 0; r < this.gridSize; r++) {
        grid[r] = [];

        for (let c = 0; c < this.gridSize; c++) {
          grid[r][c] = {
            row: r,
            column: c,
            isPlayed: false,
            isShip: false
          };
        }
      }
      return grid;
    },
    playSlot(slot) {
      if (!slot.isPlayed && !this.isBomb) {
        
        const isShipStatus = this.isShip(slot.row,slot.column)
        
        this.updateAttempts()
        if(isShipStatus) {
          this.sendShipStatus(slot.row,slot.column)
        }
        this.isBomb = true
        this.bombRow = slot.row
        this.bombCol = slot.column
        isShipStatus ? this.getBombHitSFX().play() : this.getBombMissSFX().play()

        setTimeout(() => {
          this.isBomb = false
          this.bombRow = 0;
          this.bombCol = 0;
          this.grid[slot.row][slot.column].isShip = isShipStatus
          this.grid[slot.row][slot.column].isPlayed = true;

        }, 600)
      }
    },
    isShip(r, c) {
      return this.ships.some(ship => {
        return ship.coordinates.some(coord => {
          return coord.r === r && coord.c === c;
        });
      });
    },
    getTileStatus(slot) {
      if (slot.isPlayed) {
        return slot.isShip ? "isShip" : "isWrong";
      }
    },
    updateAttempts() {
      this.$emit("updateAttempts");
    },
    sendShipStatus(r,c) {
      this.$emit("sendShipStatus", {r,c} );
    },
    cssBombCoords(r,c) {
      const SLOT = 40;
      return {
        '--row': (c * SLOT) - (c*3) + (9) + 'px',
        '--col': ((this.gridSize - r) * -SLOT) - (r*3) + (28)  + 'px'
      }
    },

    // Sound Effects
    getBombMissSFX () {
      let bombSFX = new Audio(require('@/assets/bombMiss.wav')); 
      bombSFX.loop = false;
      bombSFX.volume = 0.5
      return bombSFX;
    },
    getBombHitSFX () {
      let bombSFX = new Audio(require('@/assets/bombHit.wav')); 
      bombSFX.loop = false;
      bombSFX.volume = 0.5
      return bombSFX;
    },
  
  }
};
</script>

<style scoped>
.board {
  display: flex;
}
.grid {
  position: relative;
  margin-top: 50px;
  width: 100%;
}
.rows {
  display: flex;
  flex-direction: row;

}

.slot {
  width: 35px;
  height: 35px;
  border: 1px solid #256fb4;
  line-height: 35px;
}

.isShip {
  background: rgba(10, 126, 204, 0.5);
  color: #fff;
}
.isWrong {
  background: rgba(12, 13, 104, 0.5);
  color: #01060a;
}

.bomb {
  position: absolute;
  transform: translate(140px,20px);
  animation: fireBomb 600ms ease-out;
  z-index: 1000;
}

@keyframes fireBomb {
  0% {
    transform: translate(140px,20px) scale(1.0);
  }
  30% {
    transform:translate(var(--row), var(--col))  scale(2.0);
  }

  60% {
    transform: translate( var(--row), var(--col) ) scale(0.7);
    opacity: 1;
  }
  100% {
    transform: translate( var(--row), var(--col) ) scale(0.5);
    opacity: 0;
  }
}
</style>