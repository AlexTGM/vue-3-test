import { uid } from "uid";
import { computed } from "vue";

export function useControlBase(emit) {
  const id = computed(uid);

  const update = value =>
    emit('update:value', value);

  return { id, update };
}