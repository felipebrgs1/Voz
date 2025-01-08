<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h3 class="text-xl font-bold mb-4">Adicionar Novo Carro</h3>
      <form @submit.prevent="handleAddCar">
        <div><img class="mx-auto mb-4 " alt="" src="/carro1.png"></div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Título</label>
          <input type="text" id="title" v-model="carStore.newCar.title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="mb-4">
            <label for="data" class="block text-gray-700 font-bold mb-2">Ano</label>
            <input type="text" id="data" v-model="carStore.newCar.data"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="1900" max="2100" required />
          </div>
          <div class="mb-4">
            <label for="velocidademaxima" class="block text-gray-700 font-bold mb-2">Velocidade Máxima</label>
            <input type="text" id="velocidademaxima" v-model="carStore.newCar.velocidademaxima"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              required />
          </div>
          <div class="mb-4">
            <label for="potencia" class="block text-gray-700 font-bold mb-2">Potência</label>
            <input type="text" id="potencia" v-model="carStore.newCar.potencia"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0" max="10" required />
          </div>
          <div class="mb-4">
            <label for="conforto" class="block text-gray-700 font-bold mb-2">Conforto</label>
            <input type="text" id="conforto" v-model="carStore.newCar.conforto"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0" max="10" required />
          </div>
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="block text-gray-700 font-bold mb-2">URL da Imagem</label>
          <input type="text" id="imageUrl" v-model="carStore.newCar.imageUrl"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

        </div>

        <div class="flex justify-end">
          <button type="button"
            class="text-white bg-red-500 hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            @click="closeModal">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="currentColor" viewBox="0 0 24 24">
              <path fill-rule="evenodd"
                d="M8.586 2.586A2 2 0 0 1 10 2h4a2 2 0 0 1 2 2v2h3a1 1 0 1 1 0 2v12a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V8a1 1 0 0 1 0-2h3V4a2 2 0 0 1 .586-1.414ZM10 6h4V4h-4v2Zm1 4a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Zm4 0a1 1 0 1 0-2 0v8a1 1 0 1 0 2 0v-8Z"
                clip-rule="evenodd" />
            </svg>

          </button>
          <button type="submit"
            class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            <svg class="w-6 h-6 text-gray-800 dark:text-white" aria-hidden="true" xmlns="http://www.w3.org/2000/svg"
              width="24" height="24" fill="none" viewBox="0 0 24 24">
              <path stroke="currentColor" stroke-width="2"
                d="M21 12c0 1.2-4.03 6-9 6s-9-4.8-9-6c0-1.2 4.03-6 9-6s9 4.8 9 6Z" />
              <path stroke="currentColor" stroke-width="2" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
            </svg>

          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineEmits } from 'vue';
import { useCarStore } from '../store/CarStore';

const emit = defineEmits(['close', 'carAdded']);
const carStore = useCarStore();

const handleAddCar = async () => {
  const newCar = await carStore.addCar();
  if (newCar) {
    emit('carAdded', newCar);
    closeModal();
  }
};

const closeModal = () => {
  emit('close');
};
</script>
