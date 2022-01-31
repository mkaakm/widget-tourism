<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      @select="handleSelect"
  >
    <el-menu-item @click="toPage(1)" index="1">Загальна інформація<el-icon><arrow-right /></el-icon></el-menu-item>
    <el-menu-item @click="toPage(2)" index="2">Оформлення замовлення<el-icon><arrow-right /></el-icon></el-menu-item>
    <el-menu-item @click="toPage(3)" index="3">Страхувальник<el-icon><arrow-right /></el-icon></el-menu-item>
    <el-menu-item @click="toPage(4)" index="4">Застраховані особи<el-icon><arrow-right /></el-icon></el-menu-item>
  </el-menu>
  <div class="line"></div>
</template>

<script>
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name:"SideBar",
  methods:{
    toPage(nextStep){
      this.$emit('next', nextStep)
    }
  },
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
.el-menu{
  justify-content: space-around;
  font-family: Open Sans;
  font-weight: 600;
  font-size: 14px;
  color:#C0C4CC;
  --el-menu-hover-text-color: none;
}
.el-menu-demo{
  width: 1140px;
  background: #F8F9FB;
  border-radius: 4px;
  margin-bottom: 24px;
}
.el-menu--horizontal>.el-menu-item{
  color: #C0C4CC;
}
.el-menu--horizontal>.el-menu-item.is-active{
  border: none;
}
.el-menu--horizontal .el-menu-item:not(.is-disabled):focus, .el-menu--horizontal .el-menu-item:not(.is-disabled):hover{
  background-color: transparent;
}
</style>
