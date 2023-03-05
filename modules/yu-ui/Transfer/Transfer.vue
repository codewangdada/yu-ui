<template>
  <div>
    <div>
      <selector :data="options" @select-change="setTargetIndex"> </selector>
    </div>
    <div class="transfer">
      <div
        class="box left-list"
        @dragover.prevent
        @drop="removeRightListData([dragItem])"
      >
        <h1 class="list-title">{{ leftTitle }}</h1>
        <div>
          <list-item
            :data="leftListData"
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
        @left-button-click="removeRightListData(checkedData.right)"
        @rightButtonClick="addRightListData(checkedData.left)"
      >
      </button-group>
      <div
        class="box right-list"
        @dragover.prevent
        @drop="addRightListData([dragItem])"
      >
        <h1 class="list-title">{{ rightTitle }}</h1>
        <div>
          <list-item
            :data="rightListData"
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
const options = props.data.map(({ title }) => title);
const [targetIndex, setTargetIndex] = useTargetIndex(0);

const [checkedData, addCheckedData, removeCheckedData] = useCheckedData();
const [rightListData, addRightListData, removeRightListData] = useRightListData(
  [],
  checkedData
);

const [dragItem, setDragedItem] = useDragedItem();

const { leftTitle, leftListData, transferButtonDisabled } = useComputedData(
  props.data,
  targetIndex,
  rightListData,
  checkedData
);

const setCheckedData = (checked, leftOrRight, item) => {
  checked
    ? addCheckedData(leftOrRight, item)
    : removeCheckedData(leftOrRight, item.id);
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
      justify-content: center;
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
