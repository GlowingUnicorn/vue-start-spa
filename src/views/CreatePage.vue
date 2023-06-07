<template>
  <form action="" class="container mt-5 mb-3">
    <div class="row">
      <div class="col-md-8">
        <div class="mb-3">
          <label for="" class="form-label">Page Title</label>
          <input
            type="text"
            class="form-control"
            v-model="pageTitle"
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
            v-model="content"
          ></textarea>
        </div>
      </div>
      <div class="col-md-4">
        <div class="mb-3">
          <label for="" class="form-label">Link Text</label>
          <input
            type="text"
            class="form-control"
            v-model="text"
          />
        </div>
        <div class="mb-3">
          <label for="" class="form-label">Link URL</label>
          <input
            type="text"
            class="form-control"
            v-model="url"
          />
        </div>
        <div class="mb-3">
          <label for="published" class="form-check-label">Published</label>
          <input
            name="published"
            type="checkbox"
            class="form-check"
            v-model="published"
          />
        </div>
      </div>
      <div>
        <button
          type="submit"
          class="btn btn-primary"
          :disabled="isFormInvalid"
          @click.prevent="submitForm">
          Page Created
        </button>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  emits: {
    pageCreated: ({
      pageTitle, content, text, url,
    }) => !pageTitle || !content || !text || !url,
  },
  data() {
    return {
      pageTitle: '',
      content: '',
      text: '',
      url: '',
      published: true,
    };
  },
  computed: {
    isFormInvalid() {
      return !this.pageTitle || !this.content || !this.text || !this.url;
    },
  },
  methods: {
    submitForm() {
      const {
        pageTitle, content, text, url, published,
      } = this;

      if (this.isFormInvalid) {
        // eslint-disable-next-line no-alert
        alert('Please fill the form');
        return;
      }

      const payload = {
        pageTitle,
        content,
        link: {
          text,
          url,
        },
        published,
      };

      this.$emit('pageCreated', payload);
    },
  },
  watch: {
    pageTitle(newTitle, oldTitle) {
      if (this.text === oldTitle) {
        this.text = newTitle;
      }
    },
  },
};
</script>
