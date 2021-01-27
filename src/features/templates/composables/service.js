import { ref } from 'vue';

import axios from 'axios';

export function createTemplatesService() {
  const endpoint = 'documents/processes/templates';

  const items = ref([]);
  const processing = ref(true);

  const listAll = async () => {
    processing.value = true;

    const response = await axios.get(endpoint);

    items.value = response.data;

    processing.value = false;
  };

  const download = async (id) => {
    processing.value = true;

    // await axios.get(`${endpoint}/${id}/archive`);

    console.log(`Item with id: ${id} downloaded`);

    processing.value = false;
  };

  const remove = async (id) => {
    processing.value = true;

    // await axios.delete(`${endpoint}/${id}`);

    console.log(`Item with id: ${id} removed`);

    processing.value = false;
  };

  const create = async (model) => {
    processing.value = true;

    const formData = new FormData();

    formData.append("Id", model.id.value);

    formData.append("Document", model.document.value);
    formData.append("Thumbnail", model.thumbnail.value);
    formData.append("PublicForm", model.formJson.value);

    formData.append("TemplateSettings.Name", model.name.value);
    formData.append("TemplateSettings.Description", model.description.value);
    formData.append("TemplateSettings.Description", model.description.value);
    formData.append("TemplateSettings.CategoriesIds", model.category.value);
    formData.append("TemplateSettings.CategoriesIds", "All");
    formData.append("TemplateSettings.TypeId", "docx"); // TODO remove this
    formData.append("TemplateSettings.Priority", model.priority.value);

    const response = await axios.post(endpoint, formData);

    processing.value = false;

    return response;
  }

  return {
    templates: items,
    listAll,
    download,
    remove,
    create,
    processing,
  };
}