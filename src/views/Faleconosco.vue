<template>
  {{ carStore.cars }}
</template>
<script setup lang="ts">
import { useCarStore } from '../store/CarStore';

const carStore = useCarStore();
carStore.getCars();
</script>
