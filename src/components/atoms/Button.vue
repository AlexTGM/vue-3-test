<template>
  <button
    type="button"
    class="button"
    @click="$emit('click')"
    @blur="$emit('blur')"
  >
    <slot/>
  </button>
</template>

<script>
export default {
  emits: [ 'click', 'blur' ]
}
</script>