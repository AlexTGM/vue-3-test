<template>
  <div class="field">
    <p-label :id="id" :label="label" />

    <input
      v-if="!multiline"
      type="text"
      class="input"
      :class="{ 'is-danger': error }"
      :id="id"
      :value="value"
      :placeholder="placeholder"
      @input="update($event.target.value)"
    />

    <textarea
      v-else
      class="textarea"
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
    value: {
      type: String,
      default: "",
    },
    placeholder: {
      type: String,
      default: "",
    },
    multiline: {
      type: Boolean,
      default: false,
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