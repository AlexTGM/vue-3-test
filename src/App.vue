<template>
  <section>
    <div class="container mb-6">
      <p-hero>
        {{ currentPage }}
        <template v-slot:subtitle>
          <navigation />
        </template>
      </p-hero>
      <router-view />
    </div>
  </section>
</template>

<script>
import { computed } from "vue";
import { useRoute } from "vue-router";

import Navigation from "./Navigation";

export default {
  components: { Navigation },

  setup() {
    const route = useRoute();

    const currentPage = computed(() => route.name);

    return {
      currentPage,
      route,
    };
  },
};
</script>