<template>
        
        <v-footer id="footer" flat  class=" v-footer v-sheet v-sheet--tile theme--dark  transparent" >
          <v-row   justify="center">
           
              <v-btn id="btnFooter" depressed    v-for=" (b,i) in btn " :key="i" >
                    <span v-if="i!==4">{{$t('translate.footer.'+b)}}</span> 
                    <v-icon v-if="i==4" size=24 right>{{b}}</v-icon> 
                </v-btn>
             
            </v-row>
        </v-footer>
  </template>
  
  <script>
  export default {
    name: 'Footer',
    
    data: () => ({
        
        btn:[
          'about',
          'license',
          'blog',
          '2019',
          'copyright',
          'madeBy']
        //btn:['About Us','Blog','License','2019' ,'copyright ','made by ab_dev']
    }),
  };
  </script>

<style scoped>

#footer
 {
   min-width: 100%;
   position: absolute;
   bottom:0;   
 }
#btnFooter
  {
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    font-weight: 500;
    color:snow;
    background: rgba(0,0,0,0);    
    font-weight:  500;
    font-size: 0.9rem;
  }
.v-btn:hover::before
{
    background: none;
}

  </style>