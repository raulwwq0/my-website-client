<template>
  <Sidebar />
  <Background />
  <div class="content">
    <router-view />
  </div>
</template>

<script>
import './assets/styles/css/styles.css';
import Sidebar from './components/Utils/Sidebar';
import Background from './components/Utils/Background';

export default {
  name: 'App',
  components: {
    Sidebar,
    Background,
  }
}
</script>