<template>
<el-input v-model="text" type="textarea" :rows="8" />
</template>

<script setup lang="ts">
import {computed} from 'vue'
const props=defineProps<{modelValue:any}>()
const emit=defineEmits(['update:modelValue'])
const text=computed({
 get:()=>JSON.stringify(props.modelValue||{},null,2),
 set:(v)=>{try{emit('update:modelValue',JSON.parse(v))}catch(e){}}
})
</script>
