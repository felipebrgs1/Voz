<template>
  <div class="fixed inset-0 flex items-center justify-center bg-gray-800 bg-opacity-75 z-50">
    <div class="bg-white p-8 rounded-lg shadow-lg w-full max-w-3xl">
      <h3 class="text-xl font-bold mb-4">Adicionar Novo Carro</h3>
      <form @submit.prevent="addCar">
        <div><img class="mx-auto mb-4 " alt="" src="/carro1.png"></div>
        <div class="mb-4">
          <label for="title" class="block text-gray-700 font-bold mb-2">Título</label>
          <input type="text" id="title" v-model="newCar.title"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
            required />
        </div>

        <div class="grid grid-cols-2 gap-4">
          <div class="mb-4">
            <label for="data" class="block text-gray-700 font-bold mb-2">Ano</label>
            <input type="text" id="data" v-model="newCar.data"
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
            <input type="text" id="potencia" v-model="newCar.potencia"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0" max="10" required />
          </div>
          <div class="mb-4">
            <label for="conforto" class="block text-gray-700 font-bold mb-2">Conforto</label>
            <input type="text" id="conforto" v-model="newCar.conforto"
              class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              min="0" max="10" required />
          </div>
        </div>
        <div class="mb-4">
          <label for="imageUrl" class="block text-gray-700 font-bold mb-2">URL da Imagem</label>
          <input type="text" id="imageUrl" v-model="newCar.imageUrl"
            class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />

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

interface Car {
  title: string;
  imageUrl: string;
  data: string;
  velocidademaxima: string;
  potencia: string;
  conforto: string;
}

const emit = defineEmits(['close', 'carAdded']);

const newCar = ref<Car>({
  title: '',
  imageUrl: '',
  data: '',
  velocidademaxima: '',
  potencia: '',
  conforto: ''
});

const addCar = async () => {
  // Validação adicional
  if (Number.parseInt(newCar.value.data) < 1900 || Number.parseInt(newCar.value.data) > 2100) {
    alert('Ano deve estar entre 1900 e 2100.');
    return;
  }
  if (Number.parseFloat(newCar.value.potencia) < 0 || Number.parseFloat(newCar.value.potencia) > 10) {
    alert('Potência deve estar entre 0 e 10.');
    return;
  }
  if (Number.parseFloat(newCar.value.conforto) < 0 || Number.parseFloat(newCar.value.conforto) > 10) {
    alert('Conforto deve estar entre 0 e 10.');
    return;
  }

  try {
    const response = await axios.post('http://localhost:3000/Tabela', newCar.value);
    emit('carAdded', response.data);
    newCar.value = {
      title: '',
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
    alert('Erro ao adicionar carro. Tente novamente.');
  }
};

const closeModal = () => {
  emit('close');
};
</script>
