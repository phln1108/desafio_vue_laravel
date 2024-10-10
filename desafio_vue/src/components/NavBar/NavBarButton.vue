<script lang="ts" setup>
defineProps<{
  to: string,
  label: string
}>()
</script>

<template>
  <button :disabled="$route.path == to" @click="() => $router.push({ path: to })" class="navButton">
    {{ label }}
  </button>
</template>

<style lang="css" scoped>
.navButton {
  background-color: transparent;

  padding: 0 1rem;

  color: #252525;
  font-size: 1rem;
  line-height: 1.25rem;
  font-weight: 500;

  cursor: pointer;

  &::after {
    content: '';

    width: 100%;

    display: block;

    border-bottom: 3px solid #4060F7;

    transform: scaleX(0);
    transition: transform 250ms ease-in-out;
  }
}

.navButton:hover,
.navButton:disabled {
  text-shadow: .5px 0 0 black;
  
}

.navButton:disabled::after {
  transform: scaleX(1.2);
}
</style>
