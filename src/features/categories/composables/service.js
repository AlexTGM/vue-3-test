import { ref } from 'vue';

import axios from 'axios';

export function createCategoriesService() {
  const endpoint = 'documents/processes/templates/categories';

  const items = ref([]);

  const listAll = async () => {
    const response = await axios.get(endpoint);

    items.value = response.data;
  };

  const remove = async (id) => {
    // await axios.delete(`${endpoint}/${id}`);

    console.log(`Item with id: ${id} removed`);
  };

  const create = async (model) => {
    // await axios.post(endpoint, model);

    console.log(`Item created`, model);
  }

  return {
    categories: items,
    listAll,
    remove,
    create,
  };
}