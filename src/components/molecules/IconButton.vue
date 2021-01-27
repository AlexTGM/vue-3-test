<template>
  <p-button>
    <p-icon :icon="icon" />

    <span v-if="hasText">
      <slot />
    </span>
  </p-button>
</template>

<script>
export default {
  props: {
    icon: {
      type: Array,
      required: true,
    },
  },

  setup(_, context) {
    const slots = context.slots;

    return { hasText: slots.default };
  },
};
</script>