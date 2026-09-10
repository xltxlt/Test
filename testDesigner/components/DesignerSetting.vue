<template>
<div class="setting">
 <template v-if="field">
  <el-form label-width="80px">
   <el-form-item label="标题"><el-input v-model="field.title"/></el-form-item>
   <el-form-item label="字段名"><el-input v-model="field.fieldName"/></el-form-item>
   <el-form-item label="提示"><el-input v-model="field.placeholder"/></el-form-item>
   <el-form-item label="必填"><el-switch v-model="field.required"/></el-form-item>
   <el-form-item label="属性"><DesignerJsonEditor v-model="field.props"/></el-form-item>
  </el-form>
 </template>
 <div v-else>请选择字段</div>
</div>
</template>

<script setup lang="ts">
import DesignerJsonEditor from './DesignerJsonEditor.vue'
defineProps<{field:any}>()
</script>
<style scoped>.setting{width:320px;background:#fff;padding:16px;border-left:1px solid #ddd}</style>
