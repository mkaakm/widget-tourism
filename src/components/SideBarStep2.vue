<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item index="1">Тип подорожі</el-menu-item>
    <el-menu-item index="2">Багаторазова</el-menu-item>
    <el-menu-item index="3">Місце подорожі</el-menu-item>
    <el-menu-item index="4">Весь світ</el-menu-item>
    <el-menu-item index="5">План договору</el-menu-item>
    <el-menu-item index="6">365/90</el-menu-item>
    <el-menu-item index="7">Термін дії договору</el-menu-item>
    <el-menu-item index="8">7 днів</el-menu-item>
    <el-menu-item index="9">Застраховано</el-menu-item>
    <el-menu-item index="10">3 особи</el-menu-item>
    <el-menu-item index="11">Категорія покриття</el-menu-item>
    <el-menu-item index="12">GOLD</el-menu-item>
    <el-menu-item index="13">Усього</el-menu-item>
    <el-menu-item index="14">672,48 грн</el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:"SideBarStep2",
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
  width: 1140px;
  background: #F8F9FB;
  border-radius: 4px;
  margin-bottom: 24px;
}
.el-menu{
  justify-content: space-around;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color:#C0C4CC
}
</style>
