<template>
  <el-row>
    <el-button class="default">{{text}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "ButtonPopular",
  props:{
    text: String,
  }
}
</script>

<style scoped>
.default{
  font-weight: 600;
  font-size: 12px;
  font-family: Open Sans;
  height: 10px;
  color: #67C23A;
  border: none;
  width: 165px;
}
@media (max-width: 480px) {
  .default{
    width: 328px;
  }
}
.el-button{
  --el-button-active-border-color: none;
  --el-button-active-bg-color: none;
  --el-button-hover-bg-color: none;
  --el-button-hover-border-color: none;
}
</style>
