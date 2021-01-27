<template>
  <div class="tags">
    <p-tag
      v-for="category in categories"
      :key="category.id"
    >{{ category.label }}</p-tag>
  </div>
</template>

<script>
export default {
  props: {
    categories: {
      type: Array,
      default: () => []
    }
  }
}
</script>