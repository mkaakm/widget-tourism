<template>
  <div style="margin-top: 15px">
    <el-input
        v-model="input3"
        placeholder="Please input"
        class="input-with-select"
    >
      <template #append>
        <el-button :icon="ArrowRightBold"></el-button>
      </template>
    </el-input>
  </div>
</template>

<script setup>

import { ArrowRightBold } from '@element-plus/icons-vue'
</script>

<style>
.input-with-select .el-input-group__prepend {
  background-color: #fff;
}
</style>
