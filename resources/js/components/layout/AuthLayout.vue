<template>
	<v-app>
    <v-toolbar dark color="primary">
      <v-btn icon to="/">
        <v-icon>home</v-icon>
      </v-btn>
      <v-spacer></v-spacer>
      <v-btn icon to="/auth/register">
        <v-icon>assignment_ind</v-icon>
      </v-btn>
      <v-btn icon to="/auth/login">
        <v-icon>account_circle</v-icon>
      </v-btn>
    </v-toolbar>
    <router-view></router-view>
  </v-app>
</template>

<script>
    export default {
      data: () => ({
        login: true,
      })
    }
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
