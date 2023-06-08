<template>
  <h2>Edit {{ currentPage.pageTitle }}</h2>
  <form action="" class="container mt-5 mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input
            type="text"
            class="form-control"
            v-model="currentPage.pageTitle"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">
            Content
          </label>
          <textarea
            type="text"
            class="form-control"
            rows=""
            v-model="currentPage.content"
          ></textarea>
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="" class="form-label">Link Text</label>
          <input
            type="text"
            class="form-control"
            v-model="currentPage.link.text"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Link URL</label>
          <input
            type="text"
            class="form-control"
            v-model="currentPage.link.url"
          />
        </div>
        <div class="mb-3">
          <label for="published" class="form-check-label">Published</label>
          <input
            name="published"
            type="checkbox"
            class="form-check"
            v-model="currentPage.published"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          @click.prevent="saveChanges">
          Save Changes
        </button>
      </div>
    </div>
  </form>
</template>

<script setup>
import { useRoute } from 'vue-router';
import { defineProps, inject } from 'vue';
import { $pagesInjectionKey, $eventBusInjectionKey } from '@/injectionKeys';
import { EventNames } from '@/types/events';

const route = useRoute();
const $pages = inject($pagesInjectionKey);
const $eventBus = inject($eventBusInjectionKey);

const props = defineProps(['index']);

const currentPage = $pages.getSinglePage(props.index);

function saveChanges() {
  console.log('saving');

  $pages.editPage(props.index, currentPage);
  $eventBus.$emit(EventNames.pageUpdated, { index: +props.index, page: currentPage });
}
</script>
