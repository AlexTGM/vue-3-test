<template>
  <div class="level">
    <div class="level-left">
      <div class="level-item">
        <p-icon-button :icon="['fas', 'plus-square']" @click="navigateToCreate">
          Create category
        </p-icon-button>
      </div>
    </div>
  </div>

  <categories-table :categories="categories" @remove="remove" />
</template>

<script>
import { onMounted } from "vue";

import Table from "./organisms/table";

import { createNavigation } from "../composables/navigation";
import { createCategoriesService } from "../composables/service";

export default {
  components: {
    "categories-table": Table,
  },

  setup() {
    const { navigateToCreate } = createNavigation();
    const { categories, listAll, remove } = createCategoriesService();

    onMounted(listAll);

    return { navigateToCreate, categories, remove };
  },
};
</script>