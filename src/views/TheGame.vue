<template>
  <div class="container">

    <Board 
      class="board"
      :attempts="attempts"
      :gridSize="GRID_SIZE"
      :ships="ships"
      @updateAttempts="updateAttempts"
      @sendShipStatus="updateShipStatus"
    />

    <div class="dashboard">

      <div class="attempts">
        {{attempts}} <span>💣</span>
      </div>

      <div class="ships">
        <div 
          v-for="ship in ships" 
          :key="ship.index"
        >
          {{(ship.isDestroyed) ? '🔥': ''}} <span class="ship-icon">⛴</span> {{ship.coordinates.length}} 
        </div>
      </div>
    </div>

    <base-modal 
      v-show="isEndGameModal"
      @closeModal="closeEndGameModal()"
    >
      <end-game-modal 
        v-if="endGameData" 
        :result="endGameData"/>
    </base-modal>
  </div>
</template>

<script>
import EndGameModal from '@/components/EndGameModal.vue'
//import BaseButton from '@/components/base/BaseButton.vue'
import BaseModal from '@/components/base/BaseModal.vue'
import Board from "@/components/Board.vue";
export default {
  name: "TheGame",
  components: {
    Board,
    //BaseButton,
    BaseModal,
    EndGameModal
  },
  data() {
    return {
      attempts: 50,
      GRID_SIZE: 7,
      shipsToUse: [4,3],
      takenCoordinates: [],
      ships: [],
      isEndGameModal: false,
      endGameData: null
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
          coordinates = this.generateShipCoordinates(size, dir) 
        }

        let ship = {
          id: i,
          isDestroyed: false,
          coordinates: coordinates,
          partsDestroyed: 0
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

        if (!this.isCoordinatesTaken(coordinates)) {
          coordinates.forEach(coord => {
            this.takenCoordinates.push((coord.r + '' + coord.c ).toString())
          });
          return coordinates

        } else {
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
    isCoordinatesTaken(coords) {
   
      if (this.takenCoordinates.length > 0) {
        //let counter = 0

        return this.takenCoordinates.some( takenCoord => {
          return coords.some(coord => {
            let string = (coord.r + '' + coord.c ).toString()
            
            return(takenCoord === string )
          })
        })


      } else {
        return false
      }
    },
    getShipDirection() {
      return (Math.round(Math.random()) <= 0.5) ? 'horiz' : 'vertic' 
    },
    checkDestroyedShipPart(partCoord) {
      return this.ships.find(ship => {
        return ship.coordinates.find(coord => {
         return (coord.r === partCoord.r && coord.c === partCoord.c)
        })
      })
    },
    isAllShipsDestroyed () {
      return this.ships.every( ship => {
        return ship.isDestroyed
      })  
    },
    updateAttempts() {
      this.attempts--;
      if(this.attempts < 1) {
        this.endGame(false)
      }
    },
    updateShipStatus(coord) {
      const ship = this.checkDestroyedShipPart(coord)
      this.ships[ship.id].partsDestroyed ++
      if(this.ships[ship.id].partsDestroyed === this.ships[ship.id].coordinates.length) {
        this.ships[ship.id].isDestroyed = true
      }
      if(this.isAllShipsDestroyed()) {
        this.endGame(true)
      }
    },
    endGame(status) {
      this.endGameData = {
        win: status,
        bombs: this.attempts
      }

      this.isEndGameModal = true
    },
    closeEndGameModal () {
      this.isEndGameModal = false
    }
  }
}
</script>

<style scoped>
  .container {
    display: flex;
    flex-direction: column;
    background: #5bb4dd;
    overflow-x: hidden;
  }

  .board {
    display: flex;
    align-self: center;
    height: 70vh;
  }

  .dashboard {
    background: #1e2e38;
    height: 30vh;
    display: flex;
    overflow: hidden;
  }

    .attempts {
      padding: 30px 0;
      flex-basis: 50%;
      font-size: 36px;
      color: #ddd;
    }
    .attempts span {
      font-size: 20px;
      vertical-align: 8px;
    }

    .ships {
      padding: 20px 0;
      font-size: 24px;
    }

    .ship-icon {
      font-size: 30px;
    }


</style>