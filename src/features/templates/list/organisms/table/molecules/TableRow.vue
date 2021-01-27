<template>
  <tr>
    <slot />

    <td class="is-narrow">
      <p-icon-button
        :icon="['fas', 'file-download']"
        @click="$emit('download')"
      />
    </td>
    <td class="is-narrow">
      <p-icon-button :icon="['fas', 'trash-alt']" @click="$emit('remove')" />
    </td>
  </tr>
</template>

<script>
export default {
  emits: ["download", "remove"],
};
</script>