import { ref } from "vue";

export function createTableUtils() {
  const tableSize = ref("small");

  const sizeOptions = [
    { id: 'small', label: 'Small' },
    { id: 'large', label: 'Large' },
  ];

  return { tableSize, sizeOptions };
}