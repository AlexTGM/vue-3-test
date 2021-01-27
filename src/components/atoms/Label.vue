<template>
  <label v-if="label" :htmlFor="`#${id}`" class="label">
    {{ label }}
  </label>
</template>

<script>
export default {
  props: {
    label: String,
    id: {
      type: String,
      required: true
    }
  }
}
</script>