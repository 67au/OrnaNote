<script setup lang="ts">
const classArray = [
  'mx-auto',
  'justify-center',
  'align-center',

  'px-4',
  'pt-2',
  'px-sm-6',
  'px-md-16',
  'px-lg-16',
  'px-xl-16',
  'px-xxl-16',
];
const containerClass = classArray.join(' ');
</script>

<template>
  <div :class="`${containerClass} ${$style.container}`">
    <slot />
  </div>
</template>

<style module scoped>
@media screen and (min-width: 768px) {
  .container {
    width: 600px;
  }
}
</style>