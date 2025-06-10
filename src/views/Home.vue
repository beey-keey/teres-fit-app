<!-- <template>
  <div class="home-view p-6 text-center text-2xl">
    Добре дошли в Teres Fit
    <p class="mt-2 text-base">Споделяне на личен опит със здравословен режим и нови навици</p>
  </div>
</template> -->

<template>
  <div class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 px-4 py-10 text-gray-800">
    <div class="mx-auto">
      <div class="rounded-2xl bg-white p-6 shadow-xl">
        <h1 class="animate-fade-in mb-4 text-center text-4xl font-extrabold text-green-700">
          Добре дошли в <span class="text-emerald-500">Teres Fit</span>!
        </h1>
        <p class="mb-6 text-center text-lg leading-relaxed">
          🌱 Споделям моя път към по-добро здраве, стабилна енергия и намаляване на килограмите чрез
          принципите на
          <span class="font-semibold text-green-600">глюкозната революция</span>.
        </p>

        <div class="mb-8 flex justify-center">
          <!-- <img
            src="/carb-dressing.png"
            alt="Обличане на въглехидратите"
            class="animate-fade-in w-full max-w-md rounded-xl border-2 border-green-200 shadow-md"
          /> -->
        </div>

        <div class="grid grid-cols-1 gap-6 text-center">
          <div
            class="rounded-xl bg-green-100 p-4 shadow transition hover:shadow-lg"
            v-for="(card, index) in cards"
            :key="index"
          >
            <h3 class="text-lg font-semibold text-purple-800">{{ card.title }}</h3>
            <p class="mt-2 text-sm text-gray-500 transition-opacity duration-300">
              {{ card.description }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

const cards = ref([
  {
    title: '💡 Oсновна идея и концепция',
    description: 'Споделяне на личен опит със здравословен режим, без да се дава медицински съвет.',
    open: false,
  },
  {
    title: '🌱 Каква е целта на сайта?',
    description: 'Да вдъхновя други хора чрез моя опит.',
    open: false,
  },
  {
    title: '🤸🏻‍♀️ За кого е този сайт?',
    description: 'За хора, които търсят баланс, вдъхновение и реален пример – не диета.',
    open: false,
  },
  {
    title: '‼️ Какво НЕ е този сайт?',
    description: 'Това не е медицински блог или диетичен план. Всичко е личен пример.',
    open: false,
  },
  {
    title: '🤩 Какво ще намериш тук?',
    description: 'Моите дневници, рецепти, хранителни схеми, трикове за баланс и вдъхновение.',
    open: false,
  },
])

function toggle(index: number) {
  cards.value[index].open = !cards.value[index].open
}
</script>

<style scoped>
.home-view {
  animation: fade-in 0.6s ease-out;
}

@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
