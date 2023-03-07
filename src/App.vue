<script setup>
  import { ref } from 'vue';
  const value = ref([])
  const data = [
    {
      title: '华为',
      data: [
        {
          id: 1,
          phone_name: 'Mate 40 Pro',
          disabled: false
        },
        {
          id: 2,
          phone_name: 'P40 Pro',
          disabled: true
        },
        {
          id: 3,
          phone_name: 'P50 Pro',
          disabled: false
        }
      ]
    },
    {
      title: 'iphone',
      data: [
        {
          id: 9,
          phone_name: '13',
          disabled: false
        },
        {
          id: 10,
          phone_name: '13 Pro',
          disabled: false
        },
        {
          id:11,
          phone_name: '13 Pro Max',
          disabled: false
        }
      ]
    }
  ]
</script>

<template>
  <div>
    {{ value }}
    <transfer 
    v-model = "value"
    :data="data"
    right-title="已选择"
    ></transfer>
  </div>
</template>

<style scoped>
</style>
