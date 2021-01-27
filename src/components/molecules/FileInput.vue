<template>
  <div class="field">
    <p-label :id="id" :label="label" />

    <div
      class="file has-name is-fullwidth"
      :class="{ 'is-danger': error }"
    >
      <label class="file-label">
        <input
          :id="id"

          type="file"
          class="file-input"

          @change="update($event.target.files[0])"
        />

        <span class="file-cta">
          <span class="file-icon">
            <font-awesome-icon :icon="['fas', 'upload']" />
          </span>
          <span class="file-label"> Choose a file… </span>
        </span>
        <span class="file-name">{{ value && value.name }}</span>
      </label>
    </div>

    <p-error-display v-bind="$props" />
  </div>
</template>

<script>
import { useControlBase } from "./ControlBase";

export default {
  props: {
    label: String,
    value: Object,
    error: Boolean,
    errors: Array,
  },

  emits: [ "update:value" ],

  setup(_, { emit }) {
    return useControlBase(emit);
  },
};
</script>