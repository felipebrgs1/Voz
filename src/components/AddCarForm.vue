<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h3 class="text-xl font-bold mb-4">Adicionar Novo Carro</h3>
      <form @submit.prevent="addCar">
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Título</label>
          <input type="text" id="title" v-model="newCar.title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>
        <div class="mb-4">
          <label for="description" class="block text-gray-700 font-bold mb-2">Descrição</label>
          <textarea id="description" v-model="newCar.description"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required></textarea>
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="block text-gray-700 font-bold mb-2">URL da Imagem</label>
          <input type="text" id="imageUrl" v-model="newCar.imageUrl"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
        </div>
        <div class="mb-4">
          <label for="data" class="block text-gray-700 font-bold mb-2">Ano</label>
          <input type="number" id="data" v-model="newCar.data"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="1900" max="2100" required />
        </div>
        <div class="mb-4">
          <label for="velocidademaxima" class="block text-gray-700 font-bold mb-2">Velocidade Máxima</label>
          <input type="text" id="velocidademaxima" v-model="newCar.velocidademaxima"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>
        <div class="mb-4">
          <label for="potencia" class="block text-gray-700 font-bold mb-2">Potência</label>
          <input type="number" id="potencia" v-model="newCar.potencia"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0" max="10" required />
        </div>
        <div class="mb-4">
          <label for="conforto" class="block text-gray-700 font-bold mb-2">Conforto</label>
          <input type="number" id="conforto" v-model="newCar.conforto"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            min="0" max="10" required />
        </div>
        <div class="flex justify-end">
          <button type="button"
            class="text-white bg-gray-500 hover:bg-gray-700 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2"
            @click="closeModal">
            Cancelar
          </button>
          <button type="submit"
            class="text-white bg-blue-500 hover:bg-blue-700 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center">
            Adicionar
          </button>
        </div>
      </form>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, defineEmits } from 'vue';
import axios from 'axios';

const emit = defineEmits(['close', 'carAdded']);

const newCar = ref({
  title: '',
  description: '',
  imageUrl: '',
  data: '',
  velocidademaxima: '',
  potencia: '',
  conforto: ''
});

const addCar = async () => {
  try {
    const response = await axios.post('http://localhost:3000/Tabela', newCar.value);
    emit('carAdded', response.data);
    newCar.value = {
      title: '',
      description: '',
      imageUrl: '',
      data: '',
      velocidademaxima: '',
      potencia: '',
      conforto: ''
    };
    closeModal();
    console.log('Carro adicionado com sucesso:', response.data);
  } catch (error) {
    console.error('Erro ao adicionar carro:', error.message);
  }
};

const closeModal = () => {
  emit('close');
};
</script>
