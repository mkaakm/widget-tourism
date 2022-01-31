<template>
  <el-input v-model="input" placeholder="placeholder" />
</template>

<script>
import { defineComponent, ref } from 'vue'
export default defineComponent({
  setup() {
    return {
      input: ref(''),
    }
  },
})
</script>
