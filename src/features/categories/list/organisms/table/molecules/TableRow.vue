<template>
  <tr>
    <td class="is-narrow">
      {{ category.id }}
    </td>
    <td>
      {{ category.name }}
    </td>
    <td>
      {{ category.slug }}
    </td>
    <td>
      {{ category.description }}
    </td>
    <td class="is-narrow">
      <p-icon-button :icon="['fas', 'trash-alt']" @click="remove" />
    </td>
  </tr>
</template>

<script>
import { toRefs } from "vue";

export default {
  props: {
    category: {
      type: Object,
      required: false,
    },
  },

  emits: ["remove"],

  setup(props, { emit }) {
    const { category } = toRefs(props);

    const remove = () => {
      emit("remove", category.value.id);
    };

    return { remove };
  },
};
</script>