<template>
  <div id="">
    <v-progress-linear
      color="success"
      height="25"
      :value="quoteCount / quoteMax * 100"
    >{{ quoteCount }}</v-progress-linear>
  </div>
</template>
<script>
export default {
  props: ['quoteCount', 'quoteMax'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
</style>
