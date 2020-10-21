<template>
  <div id="">
    <form>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          <v-textarea
          v-model="quote"
            name="input-7-1"
            rows="3"
            label="Quote"
            value=""
            hint="Hint text"
          ></v-textarea>
        </v-flex>
      </v-layout>
      <v-layout row wrap justify-center>
        <v-flex xs6>
          <v-btn class="success" @click.prevent="createNew">New Quote</v-btn>
        </v-flex>
      </v-layout>
    </form>
  </div>
</template>
<script>
export default {
  name: "",
  data: () => ({
    quote: ''
  }),
  methods: {
    createNew() {
      this.$emit('queteAdded', this.quote);
      this.quote = '';
    }
  }
}
</script>
<style lang="scss" scoped>
</style>
