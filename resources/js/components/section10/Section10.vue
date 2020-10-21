<template>
  <div id="">
    <app-progress :quoteMax="quoteMax" :quoteCount="quotes.length"></app-progress>
    <new-quote @queteAdded="NewQuote($event)"></new-quote>
    <quote-grid :quotes="quotes" @quoteDeleted="deleteQuote"></quote-grid>
  </div>
</template>
<script>
import Progress from './../../components/section10/Progress.vue';
import NewQuote from './../../components/section10/NewQuote.vue';
import QuoteGrid from './../../components/section10/QuoteGrid.vue';
export default {
  name: "",
  data: () => ({
    quotes:['text-1'],
    quoteMax: 10
  }),
  components: {
    'appProgress': Progress,
    NewQuote,
    QuoteGrid
  },
  methods: {
    NewQuote(quote) {
      console.log(quote);
      this.quotes.push(quote);
    },
    deleteQuote(i) {
      this.quotes.splice(i, 1);
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
