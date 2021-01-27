<template>
  <p-table>
    <template v-slot:head>
      <table-header />
    </template>

    <template v-slot:body>
      <table-row
        v-for="category in categories"
        :key="category.id"
        :category="category"
        @remove="$emit('remove', $event)"
      />
    </template>
  </p-table>
</template>

<script>
import TableHeader from "./molecules/TableHeader";
import TableRow from "./molecules/TableRow";

export default {
  props: {
    categories: {
      type: Array,
      default: () => [],
    },
  },

  emits: ["remove"],

  components: {
    TableHeader,
    TableRow,
  },
};
</script>