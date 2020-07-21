<template>
  <div class="Register">
    <v-container id="container" wrap>
      <v-row justify="center" >
        <v-col cols="8" ms=10 md=8  >
           <v-card >
            <v-card-text class=" dark display-1 text-center font-weight-light " >
              {{ $t('translate.nav.register') }}
            </v-card-text>
            <v-row>
            <v-col>
                  <v-col class="pl-10">
                    <v-row v-for="(elem,i) in sideInfo " :key="i">
                      <v-row>
                        <v-col cols="1" class="mt-3">                                    
                          <v-icon v-bind:color="elem.color" large >{{elem.icon}}</v-icon>
                        </v-col>
                        <v-col>
                          <v-card-title class="font-weight-light">{{$t('translate.register.'+elem.name)}}</v-card-title>
                          <v-card-subtitle>{{$t('translate'+'.register.'+elem.description)}}</v-card-subtitle>
                        </v-col>
                      </v-row>
                    </v-row>
                    <v-spacer></v-spacer>
                </v-col> 
            </v-col>
             
            <v-col class="text-center" >
                <v-btn class="mr-5" color="transparent" depressed v-for="(elem,i) in icons" :key='i' >
                  <v-icon   v-bind:color="elem.color" large>{{elem.icon}}</v-icon>
                </v-btn>
                <v-card-subtitle class="">{{$t('translate.classical')}}</v-card-subtitle>
                <Formregister></Formregister>
            </v-col>
          </v-row>        
          </v-card>
        </v-col>
    </v-row>
  </v-container>

  </div>
</template>

<script>
// @ is an alias to /src

import Formregister from '../components/Formregister.vue'

export default {
  name: 'Register',
  components: {
    Formregister
  },

  data: ()=> ({
    title:'Register',
    icons:[
          {icon:'mdi-facebook ',color:'#3B5998'},
          {icon:' mdi-twitter ',color:'#1DA1F2'},
          {icon:'mdi-google',color:'#EA4C89'}
  ],
    sideInfo:[
      {name:'marketing',
      description:'marketingDes',
      icon:'timeline',
      color:'#E91E63'},
      {name:'coded',
      description:'codedDes',
      icon:'code',
      color:'#9C27B3'},

      {name:'builtaudiance',
      description:'builtDes',
      icon:'people',
      color:'#1DA1F2'},
    ],
    agree:'I agree',
    terms:"terms and conditions",
    subSologan:'Or Be Classical'

  })
  
}
</script>


<style scoped>

.Register
{
  display: grid;
  grid-template-columns: 1fr;
  min-height:115vh;
  max-height:120vh;
  background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("https://demos.creative-tim.com/vuetify-material-dashboard-pro/img/register.85b37874.jpg"); 
  background-position: center center;
  background-size: cover;
}

#container
{
      padding-top: 13vh;
      max-height:75vh;   
}


</style>