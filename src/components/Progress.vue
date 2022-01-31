<template>
  <div class="demo-progress">
    <el-progress :percentage="33" :width="895" />
  </div>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name:'Progress',
  setup() {
    const format = (percentage) =>
        percentage === 100 ? 'Full' : `${percentage}%`
    return {
      format,
    }
  },
})
</script>
<style scoped>
.el-progress{
  width: 895px;
  margin-bottom: 41px;
}
@media (max-width: 480px) {
  .el-progress{
    width: 347px;
    margin-bottom: 51px;
  }
}
</style>
