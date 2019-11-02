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
          :class="['columns', getTileStatus(slot)]"
          @click="playSlot(slot)"
        
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      grid: []
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
    this.grid = this.generateGrid();

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
      if (!slot.isPlayed) {
        this.grid[slot.row][slot.column].isPlayed = true;
        const isShipStatus = this.isShip(slot.row,slot.column)
        this.grid[slot.row][slot.column].isShip = isShipStatus
        this.updateAttempts()
        if(isShipStatus) {
          this.sendShipStatus(slot.row,slot.column)
        }
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
    }
  }
};
</script>

<style scoped>
.board {
  perspective: 200px;
  perspective-origin: bottom; 

}
.grid {
  display: block;
  transform: rotateX(15deg);
  margin: 0 auto;
  width: 100%;
}
.rows {
  display: flex;
  flex-direction: row;
  background-image: url('../assets/water-tile.png');
  background-size: 40px;
}

.columns {
  width: 35px;
  height: 35px;
  border: 1px solid #184c7c;
}


.isShip {
  background: rgba(168, 204, 10, 0.5)
}
.isWrong {
  background: hsla(240,80%,10%,.5)
}
</style>