<template>
  <span class="icon">
    <font-awesome-icon :icon="icon" />
  </span>
</template>

<script>
export default {
  props: {
    icon: {
      type: Array,
      required: true
    }
  }
}
</script>