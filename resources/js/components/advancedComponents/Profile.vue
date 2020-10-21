<template>
  <div id="">
    <h2>{{ title }}</h2>
    <slot></slot>
    <span><slot name="subtitle">The Subtitle</slot></span>
  </div>
</template>
<script>
export default {
  props: ['title'],
  data: () => ({

  })
}
</script>
<style lang="scss" scoped>
div {
  color: #ccc;
}
</style>
