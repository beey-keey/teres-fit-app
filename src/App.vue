<template>
  <UApp>
    <NuxtPage />
    <div class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 text-gray-800">
      <header class="bg-white shadow-md">
        <div class="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <!-- Logo & Title -->
          <div class="flex items-center space-x-3">
            <img src="/favicon.png" alt="Teres Fit Logo" class="h-8 w-8" />
            <h1 class="font-brand text-2xl text-emerald-600">Teres Fit</h1>
          </div>

          <!-- Desktop Nav -->
          <nav class="hidden space-x-4 text-lg font-semibold md:flex">
            <router-link
              v-for="link in navLinks"
              :key="link.path"
              :to="link.path"
              class="text-xl font-semibold hover:underline"
              :class="$route.path === link.path ? 'text-emerald-600 underline' : 'text-green-800'"
            >
              {{ link.label }}
            </router-link>
          </nav>

          <!-- Mobile button -->
          <button
            class="text-green-700 focus:outline-none md:hidden"
            @click="showMenu = !showMenu"
            aria-label="Toggle menu"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>

        <!-- Mobile menu -->
        <div v-if="showMenu" class="space-y-2 px-6 pb-4 text-lg font-semibold md:hidden">
          <router-link
            v-for="link in navLinks"
            :key="link.path"
            :to="link.path"
            class="block"
            :class="$route.path === link.path ? 'text-emerald-600 underline' : 'text-green-800'"
            @click="showMenu = false"
          >
            {{ link.label }}
          </router-link>
        </div>
      </header>

      <main class="p-6">
        <router-view />
        <footer class="mt-10 text-center text-sm text-gray-600">
          <p>&copy; 2025 Teres Fit. Създадено с 💚 от Боряна.</p>
        </footer>
      </main>
    </div>
  </UApp>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const showMenu = ref(false)

const navLinks = [
  { path: '/', label: 'Начало' },
  { path: '/me', label: 'За мен' },
  { path: '/principles', label: 'Принципи' },
  { path: '/foodGuide', label: 'Хранене' },
  { path: '/calorieCounter', label: 'Калкулатор' },
]

const activeTab = ref('home')

// Няма нужда от логика тук, навигацията и рутера вършат работата
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600&display=swap');

.font-brand {
  font-family: 'Cormorant Garamond', serif;
}
</style>

<style>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.8s ease-out;
}
</style>
