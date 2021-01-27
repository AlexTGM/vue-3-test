<template>
  <table
    v-if="!loading"
    class="table is-hoverable is-fullwidth is-bordered is-striped"
  >
    <thead>
      <slot name="head" />
    </thead>

    <tbody>
      <slot name="body" />
    </tbody>

    <tfoot>
      <slot name="foot" />
    </tfoot>
  </table>
  <div v-else>Loading...</div>
</template>

<script>
export default {
  props: {
    loading: Boolean,
  },
};
</script>