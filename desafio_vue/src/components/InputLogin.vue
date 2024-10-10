<script lang="ts" setup>
import { computed, ref } from 'vue';

  
const props = defineProps<{
  placeholder: string
  value: string
  type: "text" | "password"
  onChange: () => void
}>()

const showPass = ref(false)

const inputType = computed(() => {
 return props.type == "password" ? (showPass ? "text" : "password") : props.type
})

</script>

<template>
  <div class="inputWrapper">
    <label v-if="placeholder">{{ placeholder }}</label>
    <input 
      v-model="value"
      :type="inputType"
    />
  </div>
</template>

<style lang="css" scoped>
  
</style>
