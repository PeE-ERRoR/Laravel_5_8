<template>
  <div id="">
    <v-layout row wrap>
      <quote :quotes="quotes"
        v-for="(elem, i) in quotes"
        :key="elem"
        @click.native="deleteQuote(i)">
        {{ elem }}
      </quote>
    </v-layout>
  </div>
</template>
<script>
import Quote from './../../components/section10/Quote.vue';
export default {
  props: ['quotes'],
  data: () => ({

  }),
  components: {
    Quote
  },
  methods: {
    deleteQuote(i) {
      this.$emit('quoteDeleted', i);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
