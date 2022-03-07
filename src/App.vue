<template>
  <Sidebar />
  <Background />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/css/styles.css';
import {ref, watchEffect} from 'vue';
import Sidebar from './components/Sidebar';
import Background from './components/Background';

export default {
  name: 'App',
  components: {
    Sidebar,
    Background,
  },
  /*
  Take the lang from localStore and asign it to a var
  */
  setup() {
    var lang = ref(localStorage.getItem('lang'));

    watchEffect(() => {
      lang.value = localStorage.getItem('lang');
    });

    return {lang}
  }
}
</script>