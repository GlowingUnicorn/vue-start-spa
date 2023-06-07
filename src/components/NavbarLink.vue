<template>
  <li>
    <router-link
      :to="`/${index}`"
      class="nav-link"
      activeClass="active emphasize"
      aria-current="page"
      :title="`This link goes to ${page.pageTitle}`"
    >
      {{ page.link.text }}
    </router-link>
  </li>
</template>

<script>

export default {
  props: ['page', 'isActive', 'index'],
};

</script>
