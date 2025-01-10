<template>
  <div class="flex flex-col items-center justify-center h-screen">
    <h1>Fale Conosco</h1>
    <a href="/" class="text-white rounded hover:bg-blue-500 bg-blue-600 py-2 px-4">Home</a>
  </div>
</template>
<script setup lang="ts">
import { useCarStore } from '../store/CarStore';

const carStore = useCarStore();
carStore.getCars();
</script>
