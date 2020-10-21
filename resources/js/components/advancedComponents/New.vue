<template>
  <div id="">
    <h2>{{ title }}</h2>
    <p>{{ counter }}</p>
    <v-btn @click="counter++">increasw!</v-btn>
    <v-btn @click="counter = 0">Reset!</v-btn>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data: () => ({
    counter: 0
  }),
  methods: {

  },
  destroyed() {
    console.log('Destroyed!');
  },
  deactivated() {
    console.log('Deactivated!');
  },
  activated() {
    console.log('Activated');
  }
}
</script>
<style lang="scss" scoped>
</style>
