<template>
  <div>
    <div class="container mx-auto pb-4">
      <h1>Color mode: {{ $colorMode.value }}</h1>
      <select v-model="$colorMode.preference">
        <option value="system">System</option>
        <option value="light">Light</option>
        <option value="dark">Dark</option>
        <option value="night">Night</option>
        <option value="forest">Forest</option>
        <option value="cyberpunk">Cyberpunk</option>
      </select>
    </div>
    <NuxtPage />
  </div>
</template>
<script setup>
const colorMode = useColorMode();
</script>
