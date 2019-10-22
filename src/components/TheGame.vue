<template>
  <div class="container">

    <div class="attempts">
      {{attempts}} <span>💣</span>
    </div>

    <Board 
      class="board"
      :attempts="attempts"
      :ships="ships" 
      @updateAttempts="updateAttempts"
    />

  </div>
</template>

<script>
import Board from "@/components/Board.vue";
export default {
  name: "TheGame",
  components: {
    Board
  },
  data() {
    return {
      attempts: 30,
      GRID_SIZE: 8,
      shipsToUse: [4,3,2],
      takenCoordinates: [],
      ships: [],
    };
  },
  created() {
    this.generateShips()
  },
  methods: {
    generateShips() {
      for(let i = 0; i < this.shipsToUse.length; i++) {
        
        const size = this.shipsToUse[i]
        const dir = this.getShipDirection()
        let coordinates = false

        while(!coordinates) {
          coordinates = this.generateShipCoordinates(size, dir) // return the 
        }

        let ship = {
          id: i,
          isDestroyed: false,
          coordinates: coordinates
        }
        
        this.ships.push(ship)
      }
    },
    generateShipCoordinates(size, dir) {
      const startSlot = this.getStartSlot()
      
      if (this.isNotIntercepting(startSlot, size, dir)) {

        let coordinates = [startSlot]
        
        for(let i = 1; i < size; i++) {
        
          if (dir === 'horiz') {
            coordinates.push ( {r: startSlot.r, c: startSlot.c + i} )
          } else {
            coordinates.push ( {r: startSlot.r + i, c: startSlot.c} )
          }
        }

        //console.log(coordinates)

        if (this.canTakeCoordinates(coordinates)) {
          coordinates.forEach(coord => {
            this.takenCoordinates.push(coord)
          });
          return coordinates

        } else {
          console.log('is taken')
          return false
        }
      } else {
        return false
      }

      
    },
    getStartSlot() {
      return {
        r: Math.floor(Math.random() * this.GRID_SIZE),
        c: Math.floor(Math.random() * this.GRID_SIZE)
      }
    },
    isNotIntercepting(startSlot, size, dir) {
      let lastSlot
      
      if(dir === 'horiz') {
        lastSlot = startSlot.c + (size-1)
        return (lastSlot <= this.GRID_SIZE -1)
      } else {
        lastSlot = startSlot.r + (size-1)
        return (lastSlot <= this.GRID_SIZE -1)
      }
    },
    canTakeCoordinates(coords) {
      
      if (this.takenCoordinates.length > 0) {
        
        return this.takenCoordinates.every(takenCoord => {
          return coords.every(coord => {
            return (coord.r !== takenCoord.r && coord.c !== takenCoord.c)
          })
        });

      } else {
        return true
      }
    },
    getShipDirection() {
      return (Math.round(Math.random()) <= 0.5) ? 'horiz' : 'vertic' 
    },
    updateAttempts() {
      this.attempts--;
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: row;
    align-items: top;
  }

  .attempts {
    flex-basis: 20%;
    font-size: 36px;
    color: #ddd;
  }
  .attempts span {
    font-size: 20px;
    vertical-align: 8px;
  }


</style>