<template>
  <div class="field">
    <p-label :id="id" :label="label" />

    <div class="control">
      <div
        class="select is-fullwidth"
        :class="{ 'is-danger': error }"
      >
        <select :value="value" @input="update($event.target.value)">
          <option disabled value="">Please select one</option>
          <option v-for="option in options" :key="option.id" :value="option.id">
            {{ option.label }}
          </option>
        </select>
      </div>

      <p-error-display v-bind="$props" />
    </div>
  </div>
</template>

<script>
import { useControlBase } from "./ControlBase";

export default {
  props: {
    label: String,
    options: Array,
    value: String,
    error: Boolean,
    errors: Array,
  },

  emits: ["update:value"],

  setup(_, { emit }) {
    return useControlBase(emit);
  },
};
</script>