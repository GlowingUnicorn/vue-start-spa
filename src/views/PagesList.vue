<template>

  <h4>Pages</h4>
  <div class="text-end">
    <router-link
      to="/pages/create"
      class="btn btn-primary btn-sm"
    >
      New Page
    </router-link>
  </div>
  <table class="table table-hover">
    <thead>
    <tr>
      <th>Title</th>
      <th>Link Text</th>
      <th>Is Published</th>
    </tr>
    </thead>
    <tbody>
    <tr
      v-for="(page, index) in $pages.getAllPages()"
      :key="index"
      @click="goToPage(index)"
    >
      <td>{{ page.pageTitle }}</td>
      <td>{{ page.link.text }}</td>
      <td>{{ page.published }}</td>
    </tr>
    </tbody>
  </table>

</template>

<script setup>
import { inject } from 'vue';
import { useRouter } from 'vue-router';
import { $pagesInjectionKey } from '@/injectionKeys';

const $pages = inject($pagesInjectionKey);
const router = useRouter();

function goToPage(index) {
  router.push({ path: `pages/${index}/edit` });
}

</script>

<style scoped lang="scss">

tbody  {
  tr {
    cursor: pointer
  }
}

</style>
