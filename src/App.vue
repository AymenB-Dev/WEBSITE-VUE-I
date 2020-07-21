<template>
  <v-app id="mainApp"  >
    <Navbar/>
    <main>
      <router-view></router-view>
    </main>
    <Footer></Footer>    
  </v-app>
</template>

<script>
import Navbar from './components/Navbar';
import Footer from './components/Footer';
export default {
  name: 'App',

  components: {

    Navbar,
    Footer,
  },

  data: () => ({
    //
  }),

  computed:
  {
    
  }
};
</script>

