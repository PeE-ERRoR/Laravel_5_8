<template>
  <v-flex xs4 class="pa-1">
    <v-card color="blue-grey darken-2" class="white--text">
      <v-card-title primary-title>
        <div>
          <div class="headline">
            <slot name="title"></slot>
          </div>
          <slot></slot>
        </div>
      </v-card-title>
    </v-card>
  </v-flex>
</template>
<script>
export default {
  props: ['quotes'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
  .v-card {
    cursor: pointer;
  }
  .v-card:hover {
    background-color: #ccc;
  }
</style>
