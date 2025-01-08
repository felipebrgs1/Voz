<template>
  <div>
    <section id="home" class="min-h-screen bg-cover bg-center relative" style="background-image: url('HomeCar.jpeg');">
      <div class="absolute inset-0 bg-black/50"></div>
    </section>

    <section class="min-h-screen bg-gray-100 p-8 content-center">
      <div class="max-w-6xl mx-auto">
        <div v-if="loading" class="text-center">Carregando...</div>
        <div v-else-if="err" class="text-center text-red-500">Erro ao carregar os dados: {{ err }}</div>
        <div v-else class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20">
          <Card v-for="(item, index) in carStore.cars" :key="index" :project="item" />
        </div>
      </div>
    </section>

    <section id="projetos" class="min-h-screen bg-cover bg-center relative content-center"
      style="background-image: url('CarroFinal.png');">
      <div class="absolute inset-0 bg-black/50"></div>
      <div class="relative container mx-auto h-full flex flex-col items-center justify-center px-4">
        <p class="texto max-w-2xl mb-8">
          O Ford Mustang é um automóvel desportivo produzido pela Ford Motor Company. O carro foi apresentado ao público
          em 17 de abril de 1964 durante a New York World's Fair. O Mustang, apesar de ter sofrido grandes alterações ao
          longo dos anos é a mais antiga linha de automóveis da Ford.
        </p>
        <a href="/Tabela">
          <button type="button"
            class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">
            Ver Carros
          </button>
        </a>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import { useCarStore } from "../store/CarStore";
import Card from "../components/Card.vue";

const loading = ref(true);
const err = ref(null);
const carStore = useCarStore();

onMounted(async () => {
  try {
    await carStore.getCars();
  } catch (error) {
    err.value = error.message;
  } finally {
    loading.value = false;
  }
});

function scrollToSection(sectionId) {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
</script>

<style scoped>
.texto {
  font-family: Montserrat;
  font-size: 20px;
  font-weight: 100;
  line-height: 40px;
  text-align: right;
  text-underline-position: from-font;
  text-decoration-skip-ink: none;
  color: #FFFFFF;
}
</style>
