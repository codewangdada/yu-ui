<template>
  <div>
    <div>
      <selector :data="options" @select-change="setTargetIndex"> </selector>
    </div>
    <div class="transfer">
      <div
        class="box left-list"
        @dragover.prevent
        @drop="handleRightRemove([dragItem])"
      >
        <h1 class="list-title">
          <input
            type="checkbox"
            id="leftcheck"
            :checked="checkedAll.left"
            :indeterminate="indeterminate.left"
            @click="checkboxClick($event.target.checked, 'left', leftListData)"
          />
          <label for="leftcheck">{{ leftTitle }}</label>
        </h1>
        <div>
          <list-item
            :data="leftListData"
            :checkData="checkedData.left"
            left-or-right="left"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          >
          </list-item>
        </div>
      </div>
      <button-group
        :left-button-disabled="transferButtonDisabled.left"
        :right-button-disabled="transferButtonDisabled.right"
        @left-button-click="handleRightRemove(checkedData.right)"
        @rightButtonClick="handleRightAdd(checkedData.left)"
      >
      </button-group>
      <div
        class="box right-list"
        @dragover.prevent
        @drop="handleRightAdd([dragItem])"
      >
        <h1 class="list-title">
          <input
            type="checkbox"
            id="rightcheck"
            :checked="checkedAll.right"
            :indeterminate="indeterminate.right"
            @click="
              checkboxClick($event.target.checked, 'right', rightListData)
            "
          />
          <label for="rightcheck">{{ rightTitle }}</label>
        </h1>
        <div>
          <list-item
            :data="rightListData"
            :checkData="checkedData.right"
            left-or-right="right"
            @checkbox-click="setCheckedData"
            @drag-item="setDragedItem"
          >
          </list-item>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import Selector from "./components/Selector";
import ButtonGroup from "./components/ButtonGroup.vue";
import ListItem from "./components/ListItem.vue";
import propsDefination from "./extends/props";

import {
  useTargetIndex,
  useComputedData,
  useRightListData,
  useCheckedData,
  useDragedItem,
} from "./extends/hooks";

const props = defineProps(propsDefination);
const emit = defineEmits(["update:modelValue"]);
const options = props.data.map(({ title }) => title);
const [targetIndex, setTargetIndex] = useTargetIndex(0);

const [
  checkedData,
  addCheckedData,
  removeCheckedData,
  addAllCheckData,
  removeAllCheckedData,
] = useCheckedData();
const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);

const [dragItem, setDragedItem] = useDragedItem();

const {
  leftTitle,
  leftListData,
  transferButtonDisabled,
  checkedAll,
  indeterminate,
} = useComputedData(props.data, targetIndex, rightListData, checkedData);

const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
};

const checkboxClick = (checked, leftOrRight, data) => {
  checked
    ? addAllCheckData(leftOrRight, data)
    : removeAllCheckedData(leftOrRight);
};

const handleRightRemove = (data) => {
  removeRightListData(data);
  emit("update:modelValue", rightListData.value);
};

const handleRightAdd = (data) => {
  addRightListData(data);
  emit("update:modelValue", rightListData.value);
};
</script>

<style lang="scss" scoped>
.transfer {
  display: flex;
  width: 360px;
  height: 300px;
  border: 1px solid #ddd;

  .box {
    width: 120px;
    height: 100%;
    .list-title {
      display: flex;
      align-items: center;
      height: 38px;
      font-weight: normal;
      margin: 0;
      color: #666;
      border-bottom: 1px solid #ddd;
      background-color: #efefef;
      font-size: 14px;
    }
  }
}
</style>
