<template>
    <form  class="ma-10 mb-0 "  >
              
        <v-text-field 
          
          v-model="name"
          :prepend-icon="'face'"
          :counter="10"
          v-bind:label="$t('translate.form.name')"
          data-vv-name="name"
          required> 
        </v-text-field>

        <v-text-field
          v-model="email"
          :prepend-icon="'email'"
          v-bind:label="$t('translate.form.email')"
          data-vv-name="email"
          required>
      </v-text-field>

      <v-text-field 
          v-model="password"
          :prepend-icon="'lock'"
          :type="'password'"
          :counter="8"
          v-bind:label="$t('translate.form.password')"
          data-vv-name="password"
          required> 
        </v-text-field>
        <v-row>
            <v-col cols="5">
              <v-checkbox  class="ma-0 pa-0 pl-0" v-bind:label="$t('translate.form.agree')"></v-checkbox> 
            </v-col>
            <v-col cols="">
              <a href="#" style="color:#9c27b0;font-size:15px; font-weight:300; text-decoration: underline; ">{{$t('translate.register.termsandconditions')}}</a>
            </v-col>
          </v-row>
          <v-btn @click="submit" class="font-weight-light uppercase mb-5" rounded color="green white--text" large>{{$t('translate.getstarted')}}</v-btn>
    </form>


</template>

<script>
  

export default {
name: 'Formregister',

methods: {
    submit () {
      
    },
},
    data: () => ({
        
    }),
  };

</script>
<style >



</style>
