<template>
  <div
    class="bg-transparent border-3 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300">
    <div class="relative h-48 overflow-hidden">
      <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover" />
      <div v-else class="h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Imagem não disponível</span>
      </div>
    </div>
    <div class="p-6">
      <h3 class="font-bold text-xl mb-2 text-gray-800 text-center">{{ project.title }}</h3>
      <p class="text-gray-600 mb-4">{{ project.description }}</p>
      <p><img src="/data.png" class="inline size-8 mr-2 mb-2"> {{ project.data }}</p>
      <p><img src="/velocidademaxima.png" class="inline size-8 mr-2 mb-2"> {{ project.velocidademaxima }}</p>
      <p><img src="/potencia.png" class="inline size-8 mr-2 mb-2"> {{ project.potencia }}</p>
      <p><img src="/conforto.png" class="inline size-8 mr-2 mb-2"> {{ project.conforto }}</p>
    </div>
  </div>
</template>

<script setup>
defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      imageUrl: '',
      title: '',
      description: '',
      data: '',
      velocidademaxima: '',
      potencia: '',
      conforto: ''
    })
  }
})
</script>
