<template>
  <td>
    <p-image :src="item.thumbnailUrl" />
  </td>
  <td>
    <ul>
      <li class="subtitle">
        <div class="level">
          <div class="level-left">
            <div class="level-item">
              <p-text class="help">{{ item.id }}</p-text>
            </div>
            <div class="level-item">
              <p-text>{{ item.name }}</p-text>
            </div>
            <div class="level-item">
              <p-text class="help">{{ item.priority }}</p-text>
            </div>
          </div>
          <div class="level-right">
            <div class="level-item">
              <categories :categories="item.categories" />
            </div>
            <div class="level-item">
              <p-tag>{{ item.type.label }}</p-tag>
            </div>
          </div>
        </div>
      </li>
      <li>
        <p-text>{{ item.description }}</p-text>
      </li>
    </ul>
  </td>
</template>

<script>
import Categories from "../Categories";

export default {
  props: {
    item: {
      required: true,
      type: Object,
    },
  },

  components: { Categories },
};
</script>