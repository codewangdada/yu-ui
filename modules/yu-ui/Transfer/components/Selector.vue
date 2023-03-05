<template>
  <select @change="selectChange($event.target.value)">
    <option v-for="(title, index) of data" :key="index" :value="index">
      {{ title }}
    </option>
  </select>
</template>
<script setup>
const props = defineProps({
  data: {
    type: Array,
    default: () => [],
  },
});

const emit = defineEmits(["selectChange"]);

const selectChange = (value) => {
  emit("selectChange", value);
};
</script>
