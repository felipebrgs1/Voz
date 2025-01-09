<template>
  <nav :class="navbarClass" class="fixed top-0 left-0 w-full bg-black bg-opacity-50 backdrop-blur-md shadow-md z-50">
    <div class="max-w-7xl mx-auto px-4">
      <div class="flex items-center justify-between h-16">
        <div class="flex-shrink-0">
          <button @click="navigateToPage('home')" class="text-white font-bold text-2xl">
            <img src="/logo.svg" alt="Logo" class="h-10 w-auto">
          </button>
        </div>

        <div class="hidden md:flex space-x-4">
          <button v-for="item in menuItems" :key="item" @click="navigateToPage(item.toLowerCase())"
            class="px-4 py-2 rounded-lg text-gray-300 hover:bg-indigo-100 hover:text-indigo-600 transition-colors">
            {{ item }}
          </button>
        </div>

        <button @click="toggleMobileMenu"
          class="md:hidden p-2 rounded-md text-gray-300 hover:bg-indigo-100 hover:text-indigo-600">
          <svg v-if="!isMobileMenuOpen" class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
          <svg v-else class="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div>

      <div v-show="isMobileMenuOpen" class="md:hidden">
        <div class="px-2 pt-2 pb-3 space-y-1">
          <button v-for="item in menuItems" :key="item" @click="handleMobileMenuItemClick(item.toLowerCase())"
            class="w-full text-left px-4 py-2 rounded-lg text-gray-200 hover:bg-indigo-100 hover:text-indigo-600 transition-colors block">
            {{ item }}
          </button>
        </div>
      </div>
    </div>
  </nav>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const menuItems = ['Home', 'Sobre', 'Tabela', 'Fale Conosco']
const isMobileMenuOpen = ref(false)
const navbarClass = ref('text-gray-300')

const router = useRouter()

function navigateToPage(pageName) {
  router.push({ name: pageName.replace(/\s+/g, '') })
}

function toggleMobileMenu() {
  isMobileMenuOpen.value = !isMobileMenuOpen.value
}

function handleMobileMenuItemClick(pageName) {
  navigateToPage(pageName)
  toggleMobileMenu()
}
</script>