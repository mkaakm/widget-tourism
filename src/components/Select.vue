<template>
  <el-select v-model="value" placeholder="placeholder">
    <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
    >
    </el-option>
  </el-select>
</template>

<script>
import { ref, defineComponent } from 'vue'

export default defineComponent({
  name: 'Select',
  props:{
    placeholder: String
  },
  setup() {
    return {
      options: ref([
        {
          value: 'Одесса',
          label: 'Одесса',
        },
        {
          value: 'Харків',
          label: 'Харків',
        },
        {
          value: 'Option3',
          label: 'Харків',
        },
        {
          value: 'Option4',
          label: 'Харків',
        },
        {
          value: 'Option5',
          label: 'Харків',
        },
      ]),
      value: ref(''),
    }
  },
})
</script>
