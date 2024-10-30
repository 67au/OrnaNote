<script setup lang="ts">
import Container from "../components/Container.vue";
const props = defineProps({
  posts: { type: Object as PropType<Posts>, required: true },
});

const allPosts = props.posts

const postsByYear = {};
allPosts.forEach((post) => {
  const time = post.date.time;
  if(postsByYear[time] === undefined) {
    postsByYear[time] = {
      string: post.date.string,
      posts: []
    };
  }
  
  postsByYear[time].posts.push(post);
});
const years = Object.keys(postsByYear).sort().reverse();
</script>

<template>
  <Container>
    <div>
      <div class="text-right">
        <v-chip label>
          <v-icon icon="mdi-post-outline" class="mr-1" />
          {{ allPosts.length }}
        </v-chip>
      </div>
      <v-divider class="mt-2 mb-2" />
      <div v-for="year in years" :key="year">
        <div class="text-overline font-weight-bold">
          <a :id="year" :href="`#${postsByYear[year].string}`">
            {{ postsByYear[year].string }}
          </a>
        </div>
        <v-list line="one" style="background: var(--vp-c-bg)">
          <v-list-item
            v-for="(post, index) in postsByYear[year].posts"
            class="mb-1"
            :key="index"
            :title="post.title"
            :subtitle="post.subtitle"
            variant="tonal"
            density="compact"
            link
            rounded
            :href="post.url"
          >
          </v-list-item>
        </v-list>
      </div>
    </div>
  </Container>
</template>
