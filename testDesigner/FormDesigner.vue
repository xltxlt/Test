<template>
<div class="form-designer">
  <slot name="material" />
  <main class="canvas">
    <slot name="canvas" :schema="schema" />
  </main>
  <slot name="setting" :field="currentField" />
</div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import { createSchema } from './core/schema';

const schema = reactive(createSchema());
const currentField = ref<any>(null);

function selectField(field:any){
 currentField.value=field;
}

defineExpose({schema,selectField});
</script>

<style scoped>
.form-designer{display:flex;height:100%;background:#f5f6f8}
.canvas{flex:1;overflow:auto}
</style>
