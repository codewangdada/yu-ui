<script setup>
import { reactive, toRefs } from "vue";
const state = reactive({
  imgUrl:
    "https://gw.alicdn.com/imgextra/i3/2207836816195/O1CN01xC9YKO1vdMRFrdrN2_!!2207836816195.jpg",
  blank: true,
  imgAlt: "111",
  link: "https://www.baidu.com",
  imgWidth: 375,
  imgHeight: 375,
  magWidth: 150,
  magHeight: 100,
});

const {
  link,
  blank,
  imgUrl,
  imgAlt,
  imgWidth,
  imgHeight,
  magWidth,
  magHeight,
} = toRefs(state);
</script>

<template>
  <div>
    <magnifier
      :link="link"
      :blank="blank"
      :imgUrl="imgUrl"
      :imgAlt="imgAlt"
      :imgWidth="imgWidth"
      :imgHeight="imgHeight"
      :magWidth="magWidth"
      :magHeight="magHeight"
    >
    </magnifier>
  </div>
</template>
