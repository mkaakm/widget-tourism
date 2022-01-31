<template>
  <div class="radio-btn">
    <el-radio v-model="radio1" label="1">{{firstText}}</el-radio>
    <el-radio v-model="radio1" label="2">{{secondText}}</el-radio>
    <el-radio v-model="radio1" label="3">{{thirdText}}</el-radio>
    <el-radio v-model="radio1" label="4">{{fourthText}}</el-radio>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RadioBtnTourist",
  props:{
    firstText: String,
    secondText: String,
    thirdText: String,
    fourthText: String
  },
  setup() {
    return {
      radio1: ref('1'),
    }
  },
}
</script>

<style scoped>
.radio-btn{
  display: grid;
}
el-radio{
  --el-radio-input-border-color-hover: var(--el-color-primary);
}
</style>
