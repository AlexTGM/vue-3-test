<template>
  <div class="columns">
    <div class="column is-7">
      <p-text-input
        label="Id"
        placeholder="Please, enter the template id"
        v-model:value="id"
        :error="validation.id.$error"
        :errors="validation.id.$errors"
      />

      <p-text-input
        label="Name"
        placeholder="Please, enter the template name"
        v-model:value="name"
        :error="validation.name.$error"
        :errors="validation.name.$errors"
      />

      <p-text-input
        multiline
        label="Description"
        placeholder="Please, enter the template description"
        v-model:value="description"
        :error="validation.description.$error"
        :errors="validation.description.$errors"
      />

      <p-text-input
        label="Priority"
        placeholder="Please, enter the template priority"
        v-model:value="priority"
        :error="validation.priority.$error"
        :errors="validation.priority.$errors"
      />

      <p-select
        label="Category"
        :options="categories"
        v-model:value="category"
        :error="validation.category.$error"
        :errors="validation.category.$errors"
      />

      <p-file-input
        label="Document"
        v-model:value="document"
        :error="validation.document.$error"
        :errors="validation.document.$errors"
      />

      <p-file-input
        label="Form json"
        v-model:value="formJson"
        :error="validation.formJson.$error"
        :errors="validation.formJson.$errors"
      />

      <p-button @click="onCreateClicked">Create template</p-button>
    </div>

    <div class="column is-5">
      <thumbnail
        v-model:value="thumbnail"
        :error="validation.thumbnail.$error"
        :errors="validation.thumbnail.$errors"
      />
    </div>
  </div>
</template>

<script>
import { createModel, createValidation } from "./composables/model";

import { createNavigation } from "../composables/navigation";
import { createTemplatesService } from "../composables/service";

// TODO create separate categories endpoint to lose coupling
import { createCategoriesService } from "../../categories/composables/service";

import Thumbnail from "./organisms/Thumbnail";

export default {
  components: { Thumbnail },

  setup() {
    const model = createModel();
    const { validation, validate } = createValidation(model);

    const { create } = createTemplatesService();
    const { navigateToList } = createNavigation();
    const { categories } = createCategoriesService();

    const onCreateClicked = async () => {
      if (!validate()) return;

      await create(model);

      navigateToList()
    };

    return {
      ...model,
      categories,
      validation,
      onCreateClicked,
    };
  },
};
</script>