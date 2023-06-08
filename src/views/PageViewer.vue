<template>
<div v-if="!isEmpty(data.page)" class="container">
  <h1>{{ data.page.pageTitle }}</h1>
  <p>{{ data.page.content }}</p>
</div>
</template>

<script setup lang="ts">

import {
  defineProps, inject, onMounted, reactive, watch,
} from 'vue';
import { isEmpty } from 'ramda';
import { Page } from '@/types/data';
import { $pagesInjectionKey } from '@/injectionKeys';

const props = defineProps(['index']);

const data = reactive({
  page: {} as Page,
});
const $pages = inject($pagesInjectionKey)!;

onMounted(() => {
  data.page = $pages.getSinglePage(props.index);
});

watch(props, (newData) => {
  console.log(data);
  data.page = $pages.getSinglePage(newData.index);
});

</script>
