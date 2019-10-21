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
        >
          {{slot.row +',' + slot.column}}
          <br />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "board",
  data() {
    return {
      gridSizeRow: 8,
      gridSizeColumn: 8,
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
    }
  },
  created() {
    this.grid = this.generateGrid();
  },
  methods: {
    generateGrid() {
      let grid = [];
      for (let r = 0; r < this.gridSizeRow; r++) {
        grid[r] = [];

        for (let c = 0; c < this.gridSizeColumn; c++) {
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
        this.grid[slot.row][slot.column].isShip = this.isShip(slot.row,slot.column) 
        this.updateAttempts()
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
    }
  }
};
</script>

<style scoped>
.grid {
  margin: 0 auto;
  width: 400px;
  height: 400px;
  background: #222;
}
.rows {
  display: flex;
  flex-direction: row;
}

.columns {
  width: 50px;
  height: 50px;
  color: #aaa;
  border: 1px solid #333;
  font-size: 12px;
}

.isShip {
  background: #33772b;
}
.isWrong {
  background: #1b7777;
}
</style>