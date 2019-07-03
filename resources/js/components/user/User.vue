<template>
  <div id="user">
    <h1>{{ title }}</h1>
    <hr>
    <v-btn color="primary" @click="changeName">Change My Name</v-btn>
    <p>{{ name }}</p>
    <p>{{ age }}</p>
    <user-detail
      :myName="name"
      @nameWasReset="name = $event"
      :userAge="age"></user-detail>
    <user-edit
    :userAge="age"
    @ageWasEditd="age = $event"></user-edit>
  </div>
</template>
<script>
import UserDetail from './UserDetail.vue';
import UserEdit from './UserEdit.vue';
export default {
  name: "",
  data: () => ({
    title: 'User',
    name: 'PeE',
    age: 15
  }),
  components: {
    UserDetail,
    UserEdit
  },
  methods: {
    changeName() {
      this.name = "Err0r";
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
