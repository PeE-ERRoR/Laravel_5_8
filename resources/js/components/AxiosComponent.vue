<template>
    <div class="axios">
        <div class="row justify-content-center">
            <div class="col-8">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{ name }}
                    </div>
                    <div class="text-xs-center">
                      <v-btn round color="primary" dark  @click="getUser">get user</v-btn>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
      data() {
        return {
          name : "",
        }
      },
      methods: {
        getUser: function() {
          this.axios.get('/api/get_user')
          .then(response => {
            console.log(response)
            this.name = response.data[0].name
          });
        }
      },
      mounted() {
        console.log('Component mounted.')
      }
    }
</script>
