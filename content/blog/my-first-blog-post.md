---
title: "My first Blog Post"
author: "@NinjaArmy"
dates:
    published: "2022-11-04"
description: "Add a description here"
coverImage: image.jpeg
alt: image alt text
tags: [tagOne, tagTwo]

---

# Markdown what else?

This is rendered as a simple p tag but it's a lot faster then fighting with html tags..

You want an unordered list? Also simple af:
- item 1
- item 2
  - indented
- item 3

What about ordered list?
1. Banana 
2. Apple
    - indented
3. Juice

## Disabling anchorLinks is not working

Why the fuck is this a link? Because of our tailwind typography plugin. We use the prose class to render our markdown and we use NuxtContent for the blog.
if you take a look at the [documentation](https://content.nuxtjs.org/api/configuration/#anchorlinks) we have a options to configure the links. 
For some reason it's not working see our nuxt.config.ts

### What else?

Of course you also can use code in your markdown files:
```js
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
```

Is there anything else you need? Take a look at this [cheatsheet](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet)