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
    <div>

    </div>
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
      numOfShips: 3,
      ships: [
        {
          id: 1,
          coordinates: [{ r: 3, c: 2 }, { r: 4, c: 2 }, { r: 5, c: 2 }],
          isDestroyed: false
        }
      ],
      shipsToUse: [4,3,2],
      takenSlot: []
    };
  },
  methods: {
    generateShips() {
      //for(let i = 0; i < this.numOfShips; i++) {
        
       // const size = 4 // replace with: this.shipsToUse[i]
        //const dir = 'horiz' // replace with rand (0,1), as a function: getShipDirection ()

        /* let slot = {
          r: Math.floor(Math.random() * 8),
          c: Math.floor(Math.random() * 8)
        } */


        //this.canTakeSlot(slot)

        /* let payload = {
          id: i,
          isDestroyed: false,
          coordinates: []
        }
        
        this.ships.push(ship) */
      //}
    },
    /* canTakeSlot(slot) {
      this.takenSlot.some(slot => {
        
      });
    }, */
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