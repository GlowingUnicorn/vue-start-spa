<script setup lang="ts">

import {
  computed, inject, onMounted, ref,
} from 'vue';
import NavbarLink from '@/components/NavbarLink.vue';
import { Pages } from '@/types/data';
import { $eventBusInjectionKey, $pagesInjectionKey } from '@/injectionKeys';
import { EventNames } from '@/types/events';

const $eventBus = inject($eventBusInjectionKey);
const $pages = inject($pagesInjectionKey)!;

const theme = ref('dark');
const pages = ref([] as Pages);

const publishedPages = computed(() => pages.value.filter(({ published }) => published), {
  onTrack(e) {
    console.log({ track: e });
  },
  onTrigger(e) {
    console.log({ trigger: e });
  },
});

console.log(pages);

const storeThemeData = () => {
  localStorage.setItem('theme', theme.value);
};

const getThemeData = () => {
  const localTheme = localStorage.getItem('theme');

  if (localTheme) {
    theme.value = localTheme;
    return;
  }

  theme.value = 'dark';
};

const updatePages = () => {
  pages.value = $pages.getAllPages();
};

onMounted(() => {
  getThemeData();
  pages.value = $pages.getAllPages();

  $eventBus!.$on(EventNames.pageUpdated, () => {
    updatePages();
  });
});

const changeTheme = () => {
  let updatedTheme = 'dark';

  if (theme.value === 'dark') {
    updatedTheme = 'light';
  }

  theme.value = updatedTheme;
  storeThemeData();
};

</script>

<template>
  <nav :class="[`navbar-${theme}`, `bg-${theme}`, 'navbar', 'navbar-expand-lg']">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">My Vue</a>
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <navbar-link
          v-for="(page, index) in publishedPages"
          class="nav-item"
          :key="`${index}${publishedPages}`"
          :page="page"
          :index="index"
        />

        <li>
          <router-link
            to="/pages"
            class="nav-link"
            active-class="active"
            aria-current="page"
            title="This link goes to Pages"
          >
            Pages
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
