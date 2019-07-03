<template>
  <div class="event">
    <h3 class="headline">{{ title }}</h3>
    <v-layout row>
      <v-flex xs6>
        <h4>Coordinates</h4>
        <p v-on:mousemove="updateCoordinates">
          Coordinates: {{ x }} / {{ y }}
          - <span v-on:mousemove.stop="">STOP</span>
        </p>
      </v-flex>
      <v-flex xs6>
        <h4>click</h4>
        <p>Counter: {{ counter }} | {{ secondCounter }}</p>
        <p>Result: {{ result() }} | {{ output }}</p>
        <v-layout>
          <v-flex xs12>
            <v-btn color="success" v-on:click="counter++">+</v-btn>
            <v-btn color="error" v-on:click="counter--">-</v-btn>
            <v-btn color="info" v-on:click="secondCounter++">secondCounter</v-btn>
          </v-flex>
        </v-layout>
      </v-flex>
    </v-layout>
    <v-layout row>
      <v-flex xs6>
        <h4>key enter</h4>
        <v-text-field
            v-model="firstname"
            :rules="nameRules"
            :counter="10"
            label="First name"
            required
            v-on:keyup.enter="alertMe"
          ></v-text-field>
      </v-flex>
      <v-flex xs6>
        <h4></h4>
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
    export default {
      data() {
        return {
          title: "Event",
          counter: 0,
          secondCounter: 0,
          x: 0,
          y: 0,
          firstname: "",
          nameRules: [
            v => !!v || 'Name is required',
            v => v.length <= 10 || 'Name must be less than 10 characters'
          ]
        }
      },
      computed: {
        output: function () {
          return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
      },
      watch: {
        counter: function (value) {
          var vm = this;
          value > 5 ? vm.counter = 0 : "";
          // setTimeout(function () {
          //   vm.counter = 0;
          // }, 2000);
        },
        secondCounter: function (value) {
          value > this.counter ? this.counter = value : "";
        }
      },
      methods: {
        incerase: function() {
          this.counter++;
        },
        updateCoordinates: function(event) {
          this.x = event.clientX;
          this.y = event.clientY;
        },
        alertMe: function() {
          alert('Alert!');
        },
        result: function () {
          return this.counter > 5 ? 'Greater 5' : 'Smaller than 5';
        }
      },
      mounted() {

      }
    }
</script>
