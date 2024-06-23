<script setup lang="ts">
import theme from "../../config.theme";
import { data as allPosts } from "../events.data";
</script>

<template>
  <v-data-iterator
    :items="allPosts"
    :page="page"
    :items-per-page="theme.pageSize"
  >
    <template v-slot:default="{ items }">
      <template v-for="(post, i) in items" :key="i">
        <v-card class="mb-2" variant="tonal" :href="post.raw.url" link>
          <v-card-item>
            <div>
              <div class="text-overline">
                {{ post.raw.date.string }} - {{ post.raw.subtitle }}
              </div>
              <div class="text-h6 font-weight-bold">
                {{ post.raw.title }}
              </div>
            </div>
          </v-card-item>
        </v-card>
      </template>
    </template>
    <template v-slot:footer="{ page, pageCount, prevPage, nextPage }">
      <div class="d-flex align-center justify-space-between pa-4">
        <v-btn
          :disabled="page === 1"
          density="comfortable"
          icon="mdi-arrow-left"
          variant="tonal"
          rounded
          @click="prevPage"
        />

        <div class="mx-2 text-caption">{{ page }} / {{ pageCount }}</div>

        <v-btn
          :disabled="page >= pageCount"
          density="comfortable"
          icon="mdi-arrow-right"
          variant="tonal"
          rounded
          @click="nextPage"
        />
      </div>
    </template>
  </v-data-iterator>
</template>
