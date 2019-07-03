<template>
  <div id="" class="user-edit">
    <v-card
      class="mx-auto"
    >
      <v-card-title primary-title>
        <span class="headline ">{{ title }}</span>
      </v-card-title>

      <v-card-text class="">
        <p>Age: {{ userAge }}</p>
      </v-card-text>

      <v-card-actions>
        <v-btn color="primary" @click="editAge">Edit Age</v-btn>
      </v-card-actions>
    </v-card>
  </div>
</template>
<script>
import { eventBus } from '../../app';
export default {
  props: ['userAge'],
  data: () => ({
    title: 'User Edit Component'
  }),
  methods: {
    editAge() {
      this.userAge = 25;
      // this.$emit('ageWasEditd', this.uesrAge);
      eventBus.changAge(this.userAge);
    }
  }
}
</script>
<style lang="scss" scoped>

</style>
