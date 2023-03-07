<template>
  <div
    v-for="item of data"
    :key="item.id"
    :class="['list-item', item.disabled ? 'disabled' : '']"
    :draggable="!item.disanled"
    @dragstart="dragItem(item)"
  >
    <input
      type="checkbox"
      :disabled="item.disabled"
      :id="'__check__' + item.id"
      :checked="checkData.map(item => item.id).includes(item.id)"
      @click="checkboxClick($event.target.checked, leftOrRight, item)"
    />
    <label :for="'__check__' + item.id">{{ item.phone_name }}</label>
  </div>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
  checkData: {
    type: Array,
    default: () => [],
  },
  leftOrRight: {
    type: String,
    validator(value) {
      return ["left", "right"].includes(value);
    },
  },
});

const emit = defineEmits(["checkboxClick", "dragItem"]);

const checkboxClick = (checked, leftOrRight, item) => {
  emit("checkboxClick", checked, leftOrRight, item);
};

const dragItem = (item) => {
  emit("dragItem", item);
};
</script>
<style lang="scss" scoped>
.list-item {
  display: flex;
  align-items: center;
  height: 30px;
  font-size: 12px;
  color: #666;

  &.disabled {
    opacity: 0.6;
  }
}
</style>
