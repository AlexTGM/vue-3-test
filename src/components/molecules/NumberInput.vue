<template>
  <div class="field">
    <p-label :id="id" :label="label" />

    <input
      type="number"
      class="input"
      :class="{ 'is-danger': error }"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      @input="update($event.target.value)"
    />

    <p-error-display v-bind="$props" />
  </div>
</template>

<script>
import { useControlBase } from "./ControlBase";

export default {
  props: {
    label: String,
    value: Number,
    placeholder: {
      type: String,
      default: "",
    },
    error: Boolean,
    errors: Array,
  },

  emits: ["update:value"],

  setup(_, { emit }) {
    return useControlBase(emit);
  },
};
</script>