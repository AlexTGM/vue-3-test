<template>
  <td>
    <p-text>{{ item.id }}</p-text>
  </td>
  <td>
    <p-text>{{ item.name }}</p-text>
  </td>
  <td>
    <categories :categories="item.categories" />
  </td>
  <td class="is-narrow">
    <p-text>{{ item.priority }}</p-text>
  </td>
  <td class="is-narrow">
    <p-tag>{{ item.type.label }}</p-tag>
  </td>
</template>

<script>
import Categories from "../Categories";

export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },

  components: { Categories },
};
</script>