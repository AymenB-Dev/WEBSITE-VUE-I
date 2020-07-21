<template>
  <div class="Login">
    <v-layout id="container">
              
      <v-col  cols="10" sm =6 md=4>
        
          <v-card class="text-center">
            <v-card id="topCard"  class="text-center pa-10 ma-5" color="green white--text">
              <h1 >{{$t('translate.nav.login')}}</h1>
                <v-btn class="pa-3 mr-4" depressed   color="transparent" v-for="i in icons" :key="i" >
                  <v-icon color="white"> {{i}}</v-icon>
               </v-btn>
            </v-card>
           <Form></Form>
          </v-card>
        
      </v-col>
    </v-layout  >
  </div>
</template>




<script>
  // @ is an alias to /src
  
  import Form from '../components/Form.vue'

  export default {
    name: 'Login',
    
    components: {
      Form
    },

    data: () => ({
        icons:['mdi-facebook-box ',' mdi-twitter ', 'mdi-github-box' ],
    }),
  }
  </script>
  




<style scoped>

.Login
{
  min-height: 110vh;
  max-height: 115vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),  url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/login.d6d3bb09.jpg"); 
  background-position: center center;
  background-size: cover;
}
#container
  {
      display: flex;
      justify-content: center;
      align-items: center;
      padding-top: 15vh;
    
  }

 h1{
   font-size: 1.5rem;
   text-transform: uppercase;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   font-weight: 500;
   line-height: 1.4em;
 }

 #topCard
 {
   position: relative;
   top:-30px;
   box-shadow: 0 5px 36px -10px rgba(0,0,0,.56),0 4px 25px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2);
 }
</style>
