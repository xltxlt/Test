<template>
  <div class="designer-canvas">
    <div v-if="!schema.form.length" class="empty">拖入组件开始设计</div>
    <DesignerField
      v-for="item in schema.form"
      :key="item.fieldName"
      :field="item"
      :active="current===item"
      @select="$emit('select',item)"
      @remove="$emit('remove',item)"
      @copy="$emit('copy',item)"
    />
  </div>
</template>

<script setup lang="ts">
import DesignerField from './DesignerField.vue'

defineProps<{schema:any,current:any}>()
defineEmits(['select','remove','copy'])
</script>
