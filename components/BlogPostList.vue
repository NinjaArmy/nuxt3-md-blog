<script setup>
const { data: blogPostList } = useAsyncData('blogPostList', () => {
    return queryContent('/blog').find();
})

</script>

<template>
    <Topbar />
    <div class="container p-4 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-auto mx-auto">
        <NuxtLink v-for="blogPost in blogPostList" :key="blogPost._path" class="w-max mx-auto" :to="blogPost._path">
            <div class="card w-72 lg:w-80 bg-base-100 shadow-xl">
                <figure>
                    <img :src="`_nuxt/assets/images/${blogPost.coverImage}`" :alt="blogPost.alt" />
                </figure>
                <div class="card-body">
                    <h2 class="card-title">{{ blogPost.title }}</h2>
                    <p> {{ blogPost.description }}</p>
                    <div class="card-actions justify-end mt-4">
                        <div v-for="item in blogPost.tags" class="badge badge-outline">{{ item }}</div>
                    </div>
                </div>
            </div>
        </NuxtLink>
    </div>
</template>