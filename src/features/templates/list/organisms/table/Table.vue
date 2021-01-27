<template>
  <p-table v-bind="$props">
    <template v-slot:head>
      <table-header>
        <component :is="`${size}Header`" />
      </table-header>
    </template>

    <template v-slot:body>
      <table-row
        v-for="template in templates"
        :key="template.id"
        @download="$emit('download', template.id)"
        @remove="$emit('remove', template.id)"
      >
        <component :is="`${size}Row`" :item="template" />
      </table-row>
    </template>
  </p-table>
</template>

<script>
import LargeHeader from "./large/Header";
import LargeRow from "./large/Row";

import SmallHeader from "./small/Header";
import SmallRow from "./small/Row";

import TableRow from "./molecules/TableRow";
import TableHeader from "./molecules/TableHeader";

export default {
  props: {
    templates: {
      type: Array,
      default: () => [],
    },

    size: {
      type: String,
      validator: (val) => ["small", "large"].includes(val),
    },
  },

  emits: ["download", "remove"],

  components: {
    SmallRow,
    SmallHeader,
    LargeHeader,
    LargeRow,
    TableRow,
    TableHeader,
  },
};
</script>