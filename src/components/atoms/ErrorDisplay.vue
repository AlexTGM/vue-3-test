<template>
  <p class="help is-danger" v-if="errors.length">
    {{ errors.map((e) => e.$message).join("\n") }}
  </p>
</template>

<script>
export default {
  props: {
    errors: {
      type: Array,
      default: () => [],
    },
  },
};
</script>