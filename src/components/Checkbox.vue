<template>
  <div>
    <el-checkbox v-model="checked1" label="">З умовами <a class="green">оферти</a> ознайомлен та згоден</el-checkbox>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  name:"checkbox",
  setup() {
    const checked1 = ref(true)
    return {
      checked1,
    }
  },
})
</script>
