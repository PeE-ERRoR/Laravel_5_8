<template>
  <div id="" class="user-detail">
    <v-card
      class="mx-auto"
      color="#ccc"
    >
      <v-card-title>
        <span class="title font-weight-light">{{ title }}</span>
      </v-card-title>

      <v-card-text class="headline">
        <p>switchName: {{ switchName() }}</p>
        <p>Age: {{ userAge }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="error" @click="resetName">Reset Name</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { eventBus } from '../../app';
export default {
  props: {
    myName: String,
    userAge: Number
  },
  data: () => ({
    title: 'User Detail Component'
  }),
  methods: {
    switchName() {
      return this.myName.split("").reverse().join("");
    },
    resetName() {
      this.myName = 'PeE';
      this.$emit('nameWasReset', this.myName);
    }
  },
  created() {
    eventBus.$on('ageWasEditd', (age) =>{
      this.userAge = age;
    });
  }
}
</script>
<style lang="scss" scoped>

</style>
