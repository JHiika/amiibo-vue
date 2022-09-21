<template>
  <div id="app">
    <section id="header">
      <NavBar />
    <router-view></router-view>
    </section>
    <FooterComp/>
    
  </div>
</template>

<script>
  import './assets/css/main.css';
  // import './assets/css/fontawesome-all.min.css';
  import NavBar from '@/components/NavBar.vue';
  import FooterComp from '@/components/FooterComp.vue';

  export default {
    name: 'App',
    props:{
    },
    components:{
      NavBar,
      FooterComp,
    }
  }
  </script>
