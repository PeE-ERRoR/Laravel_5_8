<template>
  <div id="">
    <h2>{{ title }}</h2></v-input>
    <v-layout>
      <v-flex xs6>
        <v-form ref="form">
          <v-text-field
            v-model="userData.email"
            :counter="30"
            label="Email"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.password.lazy"
            :counter="15"
            label="Password"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.firstname"
            label="First name"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.lastname"
            label="Last name"
            required
          ></v-text-field>
          <v-text-field
            v-model="userData.age"
            type="number"
            label="Age"
            required
          ></v-text-field>
          <v-textarea
            v-model="message"
            name="input-7-1"
            label="Default style"
            value=".."
            hint="Hint text"
            ></v-textarea>
          <v-select
            v-model="selectedPriority"
            :items="priorites"
            label="Priority"
          ></v-select>
          <app-switch v-model="dataSwitch"></app-switch>
          <v-layout row wrap>
            <v-flex xs4>
              <v-checkbox
                v-model="sendMail"
                label="Send Mail"
                value="sendMail"></v-checkbox>
            </v-flex>
            <v-flex xs4>
              <v-checkbox
                v-model="sendMail"
                label="Send infomail"
                value="SendInfoMail"></v-checkbox>
            </v-flex>
          </v-layout>
          <v-radio-group v-model="userData.gender" row>
            <v-radio label="Male" value="Male"></v-radio>
            <v-radio label="Female" value="Female"></v-radio>
          </v-radio-group>
          <div class="pt-4">
            <v-btn @click.prevent="submited">submit</v-btn>
            <v-btn @click="reset">clear</v-btn>
          </div>

        </v-form>
      </v-flex>

      <v-flex xs6 class="pa-4 pt-0" v-if="isSubmited">
       <v-card>
         <v-card-text primary-text>
           <div>
             <h3 class="headline">User Data</h3>
             <div>
               <p>Email: {{ userData.email }}</p>
               <p>Password: {{ userData.password }}</p>
               <p>FirstName: {{ userData.firstname }}</p>
               <p>LastName: {{ userData.lastname }}</p>
               <p style="white-space: pre">Message: {{ message }}</p>
               <p>Age: {{ userData.age }}</p>
               <p>gender: {{ userData.gender }}</p>
               <div class="">
                 <strong>SendMail?</strong>
                 <ul>
                   <li v-for="item in sendMail">{{ item }}</li>
                 </ul>
               </div>
               <p>DataSwitch {{ dataSwitch }}</p>
             </div>
           </div>
         </v-card-text>
       </v-card>
     </v-flex>

    </v-layout>
  </div>
</template>
<script>
import AppSwitch from './Switch.vue';
export default {
  props: [],
  name: "",
  data: () => ({
    title: 'Input With Forms',
    userData: {
      email: '',
      password: '',
      firstname: '',
      lastname: '',
      age: 25,
      gender: 'Male'
    },
    message: '',
    sendMail: [],
    selectedPriority: 'Medium',
    priorites: ['High', 'Medium', 'Low'],
    dataSwitch: true,
    isSubmited: false
  }),
  methods: {
    reset() {
      this.$refs.form.reset();
      this.isSubmited = false;
    },
    submited() {
      this.isSubmited = true;
    }
  },
  components: {
    AppSwitch
  }
}
</script>
<style lang="scss" scoped>
</style>
