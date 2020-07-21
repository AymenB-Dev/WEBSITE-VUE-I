<template>
  
    <nav >
            
            <v-app-bar id="vAppBar" class="ma-0 pa-0" flat >
                <v-toolbar-title class="text-uppercase  pa-5 font-weight-light" >
                    <span id="logo" >{{page}}</span>
                </v-toolbar-title>

                <v-spacer></v-spacer>
                
                <v-btn   class="d-sm-none d-md-flex "  id="btn"  depressed  v-for=" (b,i) in btn" :key="i" router :to="b.route">

                    <v-icon left size="24" class="mr-5" >{{b.icon}}</v-icon>
                    <span>{{$t("translate.nav."+b.name)}}</span>
                </v-btn>

                <v-menu offset-y  
                >
                    <template v-slot:activator="{ on }">
                      <v-btn 
                        class="ml-3 white white--text"
                        color="transparent"
                        depressed
                        v-on="on"
                      >
                        <v-icon left size=24>language</v-icon>
                        <span style="text-transform: uppercase;">{{ $t('translate.language') }}</span>
                      </v-btn>
                    </template>
                    <v-list
                    color="transparent"
                        
                    >
                      <v-list-item
                        v-for="(item, index) in languages"
                        :key="index"
                        @click="changeLocale(item.code), forceUpdate"
                        
                      >
                        
                        <v-list-item-title class="white--text"><flag class="mr-2" v-bind:iso='item.flag '/>{{ item.language }}</v-list-item-title>
                      </v-list-item>
                    </v-list
                    >
                  </v-menu>
            </v-app-bar>
        </nav>

  </template>
  
<script>
import {i18n} from '../i18n'


export default {

    name: 'Navbar',
   
    methods:
    {
      changeLocale(locale)
      {  
        i18n.locale=locale
      }
    },
    
    data: () => ({
      locale:'tr',
      languages: [
                { language: 'EN',code:'en',flag:'gb' },
                {language: 'TR', code:'tr',flag:'tr' },
                 ],

        btn: [
                {name:"register",icon:'group_add',route:'/'},
                {name:"login",icon:'fingerprint',route:'/login'},
                {name:"lock",icon:'lock_open',route:'/lock'},
            ],

    }),

    computed:
    {
      page()
      {
        if(this.$route.page=="login")
          return i18n.t("translate.nav.login")
        else if(this.$route.page=="lock")
          return i18n.t("translate.nav.lock")
        else
            return i18n.t("translate.nav.register")

      }
    }
  }
  </script>


<style >



#vAppBar
{
   position: absolute;
   top:0;
   color:snow;
   font-size: 1.5rem;
   font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
   background: rgba(0, 0, 0, 0);
   
}



#btn
{
    background-color: rgba(255,255,255,0);
    color:snow;
    font-weight:  500;
    font-size: 0.9rem;
}

#btn:hover
{
    background-color: rgba(255,255,255,0.08);
}

@media (max-width: 600px)
{
    #btn
    {
        display: none;
    }
}
</style>
  