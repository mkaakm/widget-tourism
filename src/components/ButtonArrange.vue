<template>
  <el-row>
    <el-button type="success" class="btn-success">{{text}}</el-button>
  </el-row>
</template>

<script>
export default {
  name: "ButtonArrange",
  props:{
    text: String
  }
}
</script>

<style scoped>
.btn-success{
  font-weight: 600;
  font-size: 14px;
  font-family: Raleway;
  height: 10px;
  color: #fff;
  background-color: #47A04A;
  width: 182px;
}
@media (max-width: 480px) {
  .btn-success{
    width: 328px;
  }
}
</style>
