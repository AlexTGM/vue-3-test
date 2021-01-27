<template>
  <p-file-input
    label="Thumbnail"
    v-model:value="thumbnail"
    :error="error"
    :errors="errors"
  />

  <p-image :src="thumbnailSrc" />
</template>

<script>
import { ref, watch } from "vue";

import { useControlBase } from "@/components/molecules/ControlBase";

export default {
  props: {
    value: Object,
    error: Boolean,
    errors: Array,
  },

  emits: ["update:value"],

  setup(props, { emit }) {
    const { update } = useControlBase(emit);

    const thumbnail = ref();
    const thumbnailSrc = ref();

    const toBase64 = (file) =>
      new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = () => resolve(reader.result);
        reader.onerror = (error) => reject(error);
      });

    watch(thumbnail, async (val) => {
      thumbnailSrc.value = await toBase64(val);

      update(val);
    });

    return {
      thumbnail,
      thumbnailSrc,
    };
  },
};
</script>