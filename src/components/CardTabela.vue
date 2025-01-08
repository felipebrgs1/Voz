<template>
  <div
    class="bg-white border-2 rounded-lg shadow-lg overflow-hidden transform hover:scale-105 transition-transform duration-300 flex flex-col md:flex-row">
    <div class="relative h-full md:w-1/4 overflow-hidden flex items-center justify-center">
      <img v-if="project.imageUrl" :src="project.imageUrl" :alt="project.title" class="object-contain max-h-full" />
      <div v-else class="h-full bg-gray-200 flex items-center justify-center">
        <span class="text-gray-400">Imagem não disponível</span>
      </div>
    </div>

    <div class="p-6 md:w-3/4 flex flex-col justify-between">
      <div>
        <h3 class="font-bold text-xl mb-2 text-gray-800">{{ project.title }}</h3>
        <p class="text-gray-600 mb-4">{{ project.description }}</p>
        <div class="flex flex-wrap justify-between items-center">
          <div class="flex items-center mb-2">
            <img src="/data.png" class="inline size-8 mr-2" />
            <span>{{ project.data }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/velocidademaxima.png" class="inline size-8 mr-2" />
            <span>{{ project.velocidademaxima + " Km/h" }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/potencia.png" class="inline size-8 mr-2" />
            <span>{{ project.potencia + "/10" }}</span>
          </div>
          <div class="flex items-center mb-2">
            <img src="/conforto.png" class="inline size-8 mr-2" />
            <span>{{ project.conforto + "/10" }}</span>
          </div>
          <div class="mt-4 flex justify-center">
            <button @click="openModal" class="bg-blue-500 text-white px-4 py-2 rounded mr-2">Abrir Modal</button>
            <button @click="deleteCard" class="bg-red-500 text-white px-4 py-2 rounded">Excluir</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { defineProps, defineEmits } from 'vue';
import axios from 'axios';

const props = defineProps({
  project: {
    type: Object,
    required: true,
    default: () => ({
      id: 1,
      imageUrl: '',
      title: '',
      description: '',
      data: '',
      velocidademaxima: '',
      potencia: '',
      conforto: ''
    })
  }
});

const emit = defineEmits(['onDelete', 'openModal']);

const openModal = () => {
  emit('openModal', props.project);
};

const deleteCard = async () => {
  try {
    await axios.delete(`http://localhost:3000/Tabela/${props.project.id}`);
    console.log('Projeto excluído com sucesso:', props.project.id);
    emit('onDelete', props.project.id); // Notifica o componente pai para atualizar a lista
  } catch (error) {
    console.error('Erro ao excluir o projeto:', error);
  }
};
</script>
