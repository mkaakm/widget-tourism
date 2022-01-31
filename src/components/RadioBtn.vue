<template>
  <div>
    <el-radio v-model="radio1" label="1">{{firstText}}</el-radio>
    <el-radio v-model="radio1" label="2">{{secondText}}</el-radio>
  </div>
</template>

<script>
import { ref } from 'vue'
export default {
  name: "RadioBtn",
  props:{
    firstText: String,
    secondText: String
  },
  setup() {
    return {
      radio1: ref('1'),
    }
  },
}
</script>

<style scoped>
el-radio{
  --el-radio-input-border-color-hover: var(--el-color-primary);
}
</style>
