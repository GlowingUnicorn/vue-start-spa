<template>
<div v-if="!isEmpty(page)" class="container">
  <h1>{{ page.pageTitle }}</h1>
  <p>{{ page.content }}</p>
</div>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
import { isEmpty } from 'ramda';
import { Page } from '@/types/data';

export default defineComponent({
  props: {
    index: Number,
  },
  methods: { isEmpty },
  created() {
    this.page = this.$pages.getSinglePage(this.index!);
  },
  data() {
    return {
      page: { } as Page,
    };
  },
  watch: {
    index(newIndex) {
      this.page = this.$pages.getSinglePage(newIndex);
    },
  },
});

</script>
