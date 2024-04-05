<script setup lang="ts">
import theme from '../../config.theme';
</script>

<template>
  <div class="mb-4">
    <div class="d-flex justify-center align-center">
      <v-avatar :size="68" class="pa-2 border-md mr-4">
        <v-img alt="avatar" :src="theme.avatar" :class="`${$style.avatar}`" />
      </v-avatar>
      <div>
        <div class="text-overline mb-n1">
          Author
        </div>
        <div class="text-h5">
          {{ theme.author }}
        </div>
      </div>
    </div>
    <div class="mt-2">
     <div class="text-center text-caption">
       {{ theme.bio }}
     </div>
    </div>
  </div>
</template>

<style module scoped>
.avatar {
  image-rendering: pixelated;
}
</style>