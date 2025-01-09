<template>
  <div
    class="bg-white border-2 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 cursor-pointer transition-transform duration-300 flex flex-col md:flex-row h-full w-full"
    @click="openModal">
    <div class="relative h-48 md:h-full md:w-1/4 overflow-hidden flex items-center justify-center">
      <img v-if="project.imageurl" :src="project.imageurl" :alt="project.title" class="object-contain max-h-full" />
      <div v-else class="h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Imagem não disponível</span>
      </div>
    </div>

    <div class="p-6 md:w-3/4 flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">{{ project.title }}</h3>
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex items-center mb-2">
            <img src="/data.svg" class="inline w-6 h-6 mr-2" />
            <span>{{ project.data }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/velocidademaxima.svg" class="inline w-6 h-6 mr-2" />
            <span>{{ project.velocidademaxima + " Km/h" }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/potencia.svg" class="inline w-6 h-6 mr-2" />
            <span>{{ project.potencia + "/10" }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/conforto.svg" class="inline w-6 h-6 mr-2" />
            <span>{{ project.conforto + "/10" }}</span>
          </div>
          <div class="flex justify-center">
            <button @click="openModal"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center mr-2">
              <svg class="w-6 h-6 text-blue-500" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="none" viewBox="0 0 24 24">
                <path stroke="currentColor" stroke-width="2"
                  d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
                <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
              </svg>
            </button>
            <button @click="deleteCar(project.id)"
              class="w-10 h-10 rounded-full bg-transparent flex items-center justify-center">
              <svg class="w-6 h-6 text-red-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="24"
                height="24" fill="currentColor" viewBox="0 0 24 24">
                <path fill-rule="evenodd"
                  d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                  clip-rule="evenodd" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';
import { useCarStore } from '../store/CarStore';

const CarStore = useCarStore();

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      imageUrl: '',
      title: '',
      data: '',
      velocidademaxima: '',
      potencia: '',
      conforto: ''
    })
  }
});

const emit = defineEmits(['closeAdd', 'openModal']);

const openModal = () => {
  emit('openModal', props.project);
};
const closeAdd = () => {
  emit('closeAdd');
}
const deleteCar = async (id) => {
  try {
    CarStore.deleteCar(id)
    closeAdd();
  } catch (error) {
    console.error(error);
  }
};
</script>
