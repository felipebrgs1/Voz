<template>
  <div class="container mx-auto pt-20">
    <div class="flex flex-row pb-4 px-2">
      <div class="basis-3/4">
        <p class="text-2xl font-bold">Tabela de carros</p>
      </div>
      <div class="flex basis-1/4 justify-end">
        <button type="button"
          class="self-end text-white bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center"
          @click="toggleAddCarModal">
          Adicionar Carro
        </button>
      </div>
    </div>
    <AddCarModal v-if="isAddCarModalVisible" @close="closeAddCarModal" @carAdded="handleCarAdded" />
    <ul class="grid grid-cols-1 gap-4 ">
      <li v-for="car in cars" :key="car.id" class="bg-gray-200 p-4 rounded-lg">
        <CardTabela :project="car" @onDelete="handleDelete" @openModal="openModal" />
      </li>
    </ul>
    <Modal v-if="selectedCar" :project="selectedCar" @close="closeModal" />
  </div>
</template>

<script setup lang="ts">
import axios from 'axios';
import { ref, onMounted } from 'vue';
import CardTabela from '../components/CardTabela.vue';
import Modal from '../components/Modal.vue';
import AddCarModal from '../components/AddCarModal.vue';

const cars = ref([]);
const isAddCarModalVisible = ref(false);

const fetchCars = async () => {
  try {
    const response = await axios.get('http://localhost:3000/Tabela');
    cars.value = response.data;
  } catch (error) {
    console.error('Erro ao obter dados:', error.message);
  }
};

const handleDelete = (carId: number) => {
  cars.value = cars.value.filter(car => car.id !== carId);
  selectedCar.value = null;
};

const selectedCar = ref(null);

const openModal = (car: any) => {
  selectedCar.value = car;
};

const closeModal = () => {
  selectedCar.value = null;
};

const toggleAddCarModal = () => {
  isAddCarModalVisible.value = !isAddCarModalVisible.value;
};

const closeAddCarModal = () => {
  isAddCarModalVisible.value = false;
};

const handleCarAdded = (newCar: any) => {
  cars.value.push(newCar);
  closeAddCarModal();
};

onMounted(fetchCars);
</script>
