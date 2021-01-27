<template>
  <div class="field">
    <p-label :id="id" :label="label" />

    <div class="dropdown" :class="{ 'is-active': active }">
      <div class="dropdown-trigger">
        <p-button :id="id" @blur="toggleActive" @click="toggleActive">
          <span>
            {{ (selected && selected.label) || "Select option" }}
          </span>
          <span class="icon is-small has-text-primary">
            <font-awesome-icon :icon="['fas', 'angle-down']" />
          </span>
        </p-button>
      </div>

      <div class="dropdown-menu">
        <div class="dropdown-content">
          <a
            v-for="option in options"
            :key="option.label"
            class="dropdown-item"
            @mousedown="update(option.id)"
          >
            {{ option.label }}
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

import { useControlBase } from "./ControlBase";

export default {
  props: {
    label: String,
    options: Array,
    value: String,
  },

  emits: ["update:value"],

  setup(props, { emit }) {
    const active = ref();

    const selected = computed(
      () => props.options.find((o) => o.id === props.value)
    );

    const toggleActive = () => active.value = !active.value;

    return {
      ...useControlBase(emit),
      active,
      toggleActive,
      selected,
    };
  },
};
</script>