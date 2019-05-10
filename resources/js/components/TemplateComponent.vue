<template>
    <div class="container">
        <div class="row justify-content-center">
            <div class="col-12">
                <div class="card">
                    <div class="card-header">Example Component</div>

                    <div class="card-body">
                        {{ name }}
                    </div>
                    <button class="btn btn-success" @click="getUser">get user</button>
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
          axios.get('/api/get_user')
          .then(response => {
            console.log(response.data)
            this.name = response.data[0].name
          });
        }
      },
      mounted() {
        console.log('Component mounted.')
      }
    }
</script>
