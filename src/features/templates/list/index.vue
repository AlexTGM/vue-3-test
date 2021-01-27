<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <p-icon-button :icon="['fas', 'plus-square']" @click="navigateToCreate">
          Create template
        </p-icon-button>
      </div>
    </div>
    <div class="level-right">
      <div class="level-item">
        <p-dropdown v-model:value="tableSize" :options="sizeOptions" />
      </div>
    </div>
  </div>

  <templates-table
    :loading="processing"
    :size="tableSize"
    :templates="templates"
    @remove="remove"
    @download="download"
  />
</template>

<script>
import { onMounted } from "vue";

import { createTableUtils } from "./composables/tableUtils";

import { createNavigation } from "../composables/navigation";
import { createTemplatesService } from "../composables/service";

import Table from "./organisms/table/Table";

export default {
  components: {
    "templates-table": Table,
  },

  setup() {
    const {
      templates,
      listAll,
      remove,
      download,
      processing,
    } = createTemplatesService();

    const { navigateToCreate } = createNavigation();
    const { tableSize, sizeOptions } = createTableUtils();

    onMounted(listAll);

    return {
      tableSize,
      sizeOptions,
      navigateToCreate,
      templates,
      remove,
      download,
      processing,
    };
  },
};
</script>