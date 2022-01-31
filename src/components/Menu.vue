<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">Номер карти</el-menu-item>
    <el-menu-item index="2">Номер Телефону</el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:"Menu",
  setup() {
    const activeIndex = ref('1')
    const activeIndex2 = ref('1')
    const handleSelect = (key, keyPath) => {
      console.log(key, keyPath)
    }
    return {
      activeIndex,
      activeIndex2,
      handleSelect,
    }
  },
})
</script>
<style scoped>
.el-menu-demo{
  margin-bottom: 24px;
}
.el-menu{
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color:#C0C4CC;
}
</style>
