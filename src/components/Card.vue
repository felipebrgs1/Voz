<template>
  <div class="transform hover:scale-105 transition-transform duration-300">
    <div class="relative h-48 z-10 translate-y-10">
      <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="w-full h-full object-cover" />
      <div v-else class="h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Imagem não disponível</span>
      </div>
    </div>
    <div class="p-6 border-solid border-2 border-gray-500 rounded-3xl shadow-lg text-center texto">
      <h3 class="text-2xl my-2">{{ project.title }}</h3>
      <div class="grid grid-cols-2  mt-4">
        <div class="flex  ml-4">
          <img src="/data.png" class="size-8" />
        </div>
        <div class="flex items-center">
          <span>{{ project.data }}</span>
        </div>

        <div class="flex  ml-4 mt-2">
          <img src="/velocidademaxima.png" class="size-8" />
        </div>
        <div class="flex items-center ">
          <span>{{ project.velocidademaxima + " Km/h" }}</span>
        </div>

        <div class="flex  ml-4 mt-2">
          <img src="/potencia.png" class="size-8" />
        </div>
        <div class="flex items-center ">
          <span>{{ project.potencia + "/10" }}</span>
        </div>

        <div class="flex ml-4 mt-2">
          <img src="/conforto.png" class="size-8" />
        </div>
        <div class="flex items-center">
          <span>{{ project.conforto + "/10" }}</span>
        </div>
      </div>
      <button type="button"
        class="mt-4 text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">
        Ver carro
      </button>
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

<style lang="css" scoped>
.texto {
  color: #1D2527;
}
</style>