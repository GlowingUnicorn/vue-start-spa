<template>
  <navbar />
  <router-view />
</template>

<script>

import Navbar from '@/components/Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
  components: { Navbar },
  methods: {
    pageCreated(pageObj) {
      this.pages.push(pageObj);
    },
  },
});

</script>

<!--<style>-->
<!--#app {-->
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
<!--  text-align: center;-->
<!--  color: #2c3e50;-->
<!--  margin-top: 60px;-->
<!--}-->
<!--</style>-->
