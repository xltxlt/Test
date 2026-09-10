<template>
<div class="field" :class="{active:active}" @click="$emit('select',field)">
 <div class="toolbar">
  <span>{{field.title}}</span>
  <button @click.stop="$emit('remove',field)">删除</button>
 </div>
 <slot />
</div>
</template>

<script setup lang="ts">
defineProps<{field:any,active:boolean}>()
defineEmits(['select','remove'])
</script>

<style scoped>
.field{background:#fff;border:1px solid transparent;padding:12px;margin-bottom:12px}.active{border-color:#409eff}.toolbar{display:flex;justify-content:space-between}
</style>
