<script setup>
const { path } = useRoute();

const { data: blogPost } = await useAsyncData(`content-${path}`, () => {
  return queryContent().where({ _path: path }).findOne();
})
</script>

<template>
  <Topbar />
  <article class="container mx-auto my-6 prose">
    <ContentDoc />
  </article>
</template>


