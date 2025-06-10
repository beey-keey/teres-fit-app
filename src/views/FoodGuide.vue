<template>
  <div class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 px-4 py-10 text-gray-800">
    <div class="mx-auto max-w-6xl">
      <h1 class="mb-8 text-center text-4xl font-extrabold text-emerald-700">
        🥗 Класификации на храни
      </h1>

      <div class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
        <div
          v-for="(card, index) in foodCards"
          :key="index"
          @click="navigateTo(card.route)"
          class="cursor-pointer rounded-xl bg-white p-6 shadow-lg transition hover:scale-[1.02] hover:shadow-xl"
        >
          <img :src="card.image" :alt="card.title" class="mx-auto mb-4 h-36 w-36 object-contain" />
          <h3 class="mb-2 text-xl font-bold text-emerald-800">{{ card.title }}</h3>
          <p class="text-sm text-gray-600">{{ card.description }}</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'

const router = useRouter()

const navigateTo = (route: string) => {
  if (route) router.push(route)
}

const foodCards = [
  {
    title: 'Протеини',
    description: 'Основен градивен елемент за мускулите и ситостта.',
    image: '/protein.png',
    route: '/proteins',
  },
  {
    title: 'Мазнини',
    description: 'Полезни и незаменими за хормонален баланс и енергия.',
    image: '/fats.png',
    route: '/fats',
  },
  {
    title: 'Въглехидрати',
    description: 'Източник на енергия – с висок и нисък гликемичен индекс.',
    image: '/carbs.png',
    route: '/carbs',
  },
  {
    title: 'Фибри',
    description: 'Засищат, балансират глюкозата и поддържат храносмилането.',
    image: '/fiber.png',
    route: '/fibers',
  },
  {
    title: 'ГИ на храните',
    description: 'Гликемичните индекси на храните',
    image: '/glycemic-index-foods.png',
    route: '/glycemic-index-foods',
  },
  {
    title: 'Хранене',
    description: '',
    image: '/nutrition.png',
    route: '/nutrition',
  },
]
</script>
