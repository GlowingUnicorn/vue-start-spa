<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :key="index"
          :page="page"
          :index="index"
        />

        <li>
          <router-link
            to="/pages/create"
            class="nav-link"
            active-class="active"
            aria-current="page"
            title="This link goes to Create Page"
          >
            Create Page
          </router-link>
        </li>

      </ul>
      <form class="d-flex">
        <button
          class="btn btn-primary"
          @click.prevent="changeTheme()"
        >
          Toggle
        </button>
      </form>
    </div>
  </nav>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import NavbarLink from '@/components/NavbarLink.vue';
import { Pages } from '@/types/data';

export default defineComponent({
  components: { NavbarLink },
  data() {
    return {
      theme: 'dark',
      pages: [] as Pages,
    };
  },
  created() {
    this.getThemeData();
    this.pages = this.$pages.getAllPages();
  },
  computed: {
    publishedPages() {
      return this.pages.filter(({ published }) => published);
    },
  },
  methods: {
    changeTheme() {
      let theme = 'dark';

      if (this.theme === 'dark') {
        theme = 'light';
      }

      this.theme = theme;
      this.storeThemeData(theme);
    },
    storeThemeData() {
      localStorage.setItem('theme', this.theme);
    },
    getThemeData() {
      const theme = localStorage.getItem('theme');

      if (theme) {
        this.theme = theme;
      }

      this.theme = theme;
    },
  },
});

</script>
