<template>
  <div id="">
    <h2>{{ title }}</h2>
    <p>btn: {{ selectedComponent }}</p>
    <v-btn class="info"
      v-for="i in btns"
      :key="i"
      @click="selectedComponent = i">
      {{ i }}
    </v-btn>
    <keep-alive>
      <component :is="selectedComponent" :title="selectedComponent">
        <p slot='subAuthor'>Default Author</p>
      </component>
    </keep-alive>
    <!-- <profile title="Profile">
      <p>Profile</p>
    </profile> -->
  </div>
</template>
<script>
import Author from './../../components/advancedComponents/Author.vue';
import New from './../../components/advancedComponents/New.vue';
import Profile from './../../components/advancedComponents/Profile.vue';
export default {
  data: () => ({
    title: 'The Quote',
    btns:['author', 'new', 'profile'],
    selectedComponent: 'author'
  }),
  components: {
    Author,
    New,
    Profile
  },
  methods: {

  }
}
</script>
<style scoped>
div {
  border: 1px solid #000;
  box-shadow: 1px 1px 2px black;
  padding: 30px;
  margin: 30px auto;
  text-align: center;
}
h2 {
  color: red;
}
</style>
