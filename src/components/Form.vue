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
        <v-btn @click="submit" class="uppercase mb-5" rounded icon color="green" large>{{$t ('translate.letsgo')}}</v-btn>
    </form>


</template>

<script>

export default {
name: 'Form',

methods: {
    submit () {
      
    }
},

    data: () => ({

    }),
  };

</script>
<style >



</style>
