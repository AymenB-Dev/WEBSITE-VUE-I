<template>
    <div class="Lock">
          <v-layout id="container">
                <v-row justify="center">
                  <v-col cols="6"  md=3 sm=5 >
                    
                    <v-card  class="text-center">
                         <img id="avatar" src="https://demos.creative-tim.com/material-dashboard-pro/assets/img/faces/avatar.jpg" alt="">
                       
                         <v-card-text id="userName">
                                {{userName}}
                        </v-card-text>
                        <v-form class="ma-5">
                            <v-text-field
                            v-model="password"
                            :type="'password'"
                            :counter="8"
                            v-bind:label="$t('translate.form.password')"
                            required
                            ></v-text-field>
                        </v-form>
                        <v-btn @click="submit" class="uppercase mb-5" rounded color="green white--text" large>{{$t('translate.unlock')}}</v-btn>
                        
                    </v-card>
                    
                  </v-col>
                </v-row>
          </v-layout  >

    </div>
  </template>
  

  
  <script>
  // @ is an alias to /src 
  export default {
    name: 'Lock',
    
    methods:
    {
      submit () {
      
      }
    
    },
   
    data: () => ({
        userName:" Tania Andrew ",     
    }),
  }
  </script>
  



<style scoped>
  .Lock
  {
    min-height:100vh;
    max-height:100vh;
    background-image: linear-gradient(to top, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url("../assets/bgLock.jpg"); 
    background-position: center center;
    background-size: cover;
  }

  
  #container
  {
      
      padding-top: 30vh;
  }


  #avatar
  {
      display: flex;
      position: relative;
      top:-20px;
      width:100px;
      height: 100px;
      border-radius: 50%;
      margin: auto;
      box-shadow: 0 16px 38px -12px rgba(0,0,0,.56),0 4px 25px 0 rgba(0,0,0,.12),0 8px 10px -5px rgba(0,0,0,.2);
      
  }

  #userName
  {
      font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
      font-weight: 300;
      font-size: 1.5rem;
      line-height: 1.4em;
  }

  @media(max-width:600px )
  {
    #container
    {
      padding-top: 20vh;
    }
  }

  </style>