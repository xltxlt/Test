<template>
<div class="designer-material">
  <div class="title">组件库</div>
  <div v-for="item in materials" :key="item.type" class="item" draggable="true" @dragstart="start(item)">
    {{ item.label }}
  </div>
</div>
</template>

<script setup lang="ts">
const emit=defineEmits(['drag'])
const materials=[
 {label:'输入框',type:'input'},
 {label:'数字输入',type:'number'},
 {label:'下拉选择',type:'select'},
 {label:'日期选择',type:'date'},
 {label:'上传图片',type:'upload'}
]
function start(item:any){emit('drag',item)}
</script>

<style scoped>
.designer-material{width:220px;padding:16px;background:#fff;border-right:1px solid #ddd}.item{padding:12px;margin-bottom:10px;border:1px dashed #ccc;cursor:move}
</style>
