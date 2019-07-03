<template>
  <div class="calendar">
    <h3 class="headline">{{ title }}</h3>
    <v-layout row>
      <v-flex
        pa-1
      >
        <v-card
          dark
          color="back darken-3"
        >
          <v-card-text>
            <span class="headline">You</span>
            <v-progress-linear
             color="error"
             height="30"
             :value="playerHealth"
           ></v-progress-linear>
           <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="playerDamage"
              color="teal"
            >
              {{ playerDamage }}
            </v-progress-circular>

          </v-card-text>
        </v-card>
      </v-flex>
      <v-flex
        pa-1
      >
        <v-card
          dark
          color="back darken-1"
        >
          <v-card-text>
            <span class="headline">Monster</span>
            <v-progress-linear
             color="error"
             height="30"
             :value="monsterHealth"
           ></v-progress-linear>
           <v-progress-circular
              :rotate="360"
              :size="100"
              :width="15"
              :value="monsterDamage"
              color="teal"
            >
              {{ monsterDamage }}
            </v-progress-circular>

          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row v-show="">
      <v-flex
        grow
        pa-1
      >
      <v-alert
        :value="true"
        type="success"
      >
        {{ alert }}
      </v-alert>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="back darken-1"
        >
          <v-card-text>
            <div class="text-xs-center">
              <v-btn
                round
                color="primary"
                dark
                v-on:click="startGames"
                v-show="!gameIsRunning"
              >START</v-btn>
              <v-progress-circular
                v-show="startLoading"
                :size="50"
                color="primary"
                indeterminate
               ></v-progress-circular>

             <!-- btn -->
             <div v-show="gameIsRunning">
               <v-btn color="error" fab large dark
                  @click="attack"
               >
                 <v-icon>shutter_speed</v-icon>
               </v-btn>
               <v-btn color="error" fab large dark
                  @click="specialAttack">
                 <v-icon>stars</v-icon>
               </v-btn>
               <v-btn color="warning" fab large dark>
                 <v-icon>security</v-icon>
               </v-btn>
               <v-btn color="info" fab large dark>
                 <v-icon>verified_user</v-icon>
               </v-btn>
               <v-btn color="success" fab large dark
                  @click="heal">
                 <v-icon>favorite</v-icon>
               </v-btn>
             </div>
           </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex
        grow
        pa-1
      >
        <v-card
          dark
          color="back darken-1"
        >
          <v-card-text>
            <v-btn block color="info" dark v-on:click="giveUp">Give Up</v-btn>
            <ul v-if="turns.length > 0">
              <li v-for="score in turns" :class="{'player-turn': score.isPlayer, 'monster-turn': !score.isPlayer}">{{ score.text }}</li>
            </ul>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          title : "Game",
          name : "",
          dialog: false,
          interval: {},
          monsterDamage: 0,
          playerDamage: 0,
          playerHealth: 100,
          monsterHealth: 100,
          gameIsRunning:false,
          startLoading: false,
          turns: []
        }
      },
      beforeDestroy () {
        clearInterval(this.interval)
      },
      computed: {
        alert: function () {
          return "";
        }
      },
      methods: {
        startGames: function () {
          this.gameIsRunning = true;
          this.playerHealth = 100;
          this.monsterHealth = 100;
          this.value = 0;
          this.turns = [];
          this.playerDamage = 0;
          this.monsterDamage = 0;
          setTimeout(function () {
            this.startLoading = false;
          }, 3000)

        },
        attack: function () {
          var damage = this.calulateDamage(3, 10);
          this.monsterHealth -= damage;
          this.playerDamage += damage;
          this.turns.unshift({
            isPlayer: true,
            text: 'Player hits Monster for'+ damage
          });
          if (this.checkWin()) {
            return;
          }
          this.monsterAttacks();
        },
        specialAttack: function () {
          var damage = this.calulateDamage(10, 20);
          this.monsterHealth -= damage;
          this.playerDamage += damage;
          this.turns.unshift({
            isPlayer: true,
            text: 'Player hits Monster hard for'+ damage
          });
          if (this.checkWin()) {
            return;
          }
          this.monsterAttacks();
        },
        heal: function () {
          if (this.playerHealth < 90) {
            this.playerHealth += 10;
            this.turns.unshift({
              isPlayer: true,
              text: 'Player heals for 10'
            });
          }else {
            this.playerHealth = 100;
          }
        },
        giveUp: function () {
          this.gameIsRunning = false;
        },
        calulateDamage: function (min, max) {
          return Math.max(Math.floor(Math.random() * max) + 1, min);
        },
        monsterAttacks: function () {
          var damage = this.calulateDamage(5, 12);
          this.playerHealth -= damage;
          this.monsterDamage += damage;
          this.turns.unshift({
            isPlayer: false,
            text: 'Monster hits Player for'+ damage
          });
          this.checkWin();
        },
        checkWin: function () {
          if (this.playerHealth <= 0) {
            setTimeout(()=>{
              this.giveUp();
            }, 4000);
            return true;
          }else if (this.monsterHealth <= 0) {
            setTimeout(()=>{
              this.giveUp();
            }, 4000);
            return true;
          }
          return false;
        }

      },
      mounted() {
        console.log('Component mounted.')
        // this.interval = setInterval(() => {
        //   if (this.value === 100) {
        //     return (this.value = 0)
        //   }
        //   this.hp === 0 ? this.hp = 100: "";
        //   this.value += 10
        //   this.hp -= 10
        // }, 1000)
      },
      watch: {

      }
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  ul>li.player-turn {
    color: green;
    background-color: #fff;
  }
  ul>li.monster-turn {
    color: red;
    background-color: #fff;
  }
</style>
