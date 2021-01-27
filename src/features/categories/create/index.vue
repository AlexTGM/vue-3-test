<template>
  <div class="columns">
    <div class="column is-7">
      <p-text-input
        label="Id"
        placeholder="Please, enter the category id"
        v-model:value="id"
        :error="validation.id.$error"
        :errors="validation.id.$errors"
      />

      <p-text-input
        label="Name"
        placeholder="Please, enter the category name"
        v-model:value="name"
        :error="validation.name.$error"
        :errors="validation.name.$errors"
      />

      <p-text-input
        multiline
        label="Description"
        placeholder="Please, enter the category description"
        v-model:value="description"
        :error="validation.description.$error"
        :errors="validation.description.$errors"
      />

      <p-text-input
        label="Name"
        placeholder="Please, enter the category slug"
        v-model:value="slug"
        :error="validation.slug.$error"
        :errors="validation.slug.$errors"
      />

      <p-button @click="onCreateClicked">Create category</p-button>
    </div>
  </div>
</template>

<script>
import { createNavigation } from '../composables/navigation';
import { createCategoriesService } from '../composables/service';

import { createModel, createValidation } from "./composables/model";

export default {
  setup() {
    const model = createModel();
    const { validate, validation } = createValidation(model);
    const { create } = createCategoriesService();
    const { navigateToList } = createNavigation();

    const onCreateClicked = async () => {
      if (!validate()) return;

      await create(model);

      navigateToList();
    };

    return {
      ...model,
      validation,
      onCreateClicked
    };
  },
};
</script>