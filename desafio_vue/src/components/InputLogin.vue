<script lang="ts" setup>
  
const props = defineProps<HTMLInputElement>()

</script>

<template>
  <div class="inputWrapper">
    <label v-if="props.placeholder">{{ props.placeholder }}</label>
    <input 
    
    />
  </div>
</template>

<style lang="css" scoped>
  
</style>
