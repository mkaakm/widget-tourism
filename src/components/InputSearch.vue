<template>
  <div class="demo-input-suffix">
    <el-row>
      <el-input
          v-model="input2"
          placeholder="Type something"
          :prefix-icon="Search"
      />
    </el-row>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { Search } from '@element-plus/icons-vue'
const input2 = ref('')
</script>

<style>
.demo-input-suffix {
  margin-bottom: 16px;
}
@media (max-width: 480px) {
  .demo-input-suffix{
    width: 328px;
  }
}
</style>
