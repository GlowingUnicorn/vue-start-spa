<template>

  <p>Count {{ data.counter }}</p>
  <button @click.prevent="click">Increment</button>

</template>

<script setup>
import { reactive } from 'vue';

const data = reactive({ counter: 0 });

function click() {
  console.log('click');
  data.counter++;
}

</script>
