<template>
  <el-popover
      placement="bottom"
      title="Медичні витрати"
      :width="432"
      class="popover"
      trigger="click"
      content="надання стаціонарної медичної допомоги в медичних закладах, включаючи також витрати на медикаментозне лікування
              надання амбулаторної медичної допомоги в медичному закладі
              надання швидкої медичної допомоги
              репатріація в країну, де Застрахована особа має постійне місце проживання"
  >
    <template #reference>
        <el-icon class="icon" ><warning/></el-icon>
    </template>
  </el-popover>
</template>

<script>
import { defineComponent, ref } from 'vue'
import PopoverText from "./PopoverText";
export default defineComponent({
  name:"Popover",
  components:{
    PopoverText
  },
  setup() {
    return {
      visible: ref(false),
    }
  },
})
</script>
<style scoped>
.icon{
  background: #C0C4CC;
  size: 20px;
  color: red;
}
.popover{
  height: 261px;
}
</style>
