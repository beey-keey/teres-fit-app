<template>
  <div
    class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 px-4 py-10 text-gray-800"
  >
    <div class="mx-auto max-w-5xl space-y-20">
      <!-- Заден фон -->
      <div
        class="fixed inset-0 z-0 bg-cover bg-center animate-bg-fade pointer-events-none"
      ></div>

      <section
        v-for="(card, index) in foodCards"
        :key="index"
        @click="navigateTo(card.route)"
        class="group relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl cursor-pointer transition hover:scale-[1.01]"
      >
        <img
          :src="card.image"
          :alt="card.title"
          class="absolute inset-0 h-full w-full object-cover opacity-80 transition-transform duration-700 ease-in-out group-hover:scale-105"
        />

        <div
          class="absolute inset-0 bg-gradient-to-b from-white/70 via-white/30 to-white/90"
        ></div>

        <div
          class="relative z-10 flex h-full w-full flex-col items-center justify-center text-center px-4"
        >
          <h1
            class="text-4xl font-extrabold text-green-700 drop-shadow-md transition-opacity duration-700 group-hover:opacity-90"
          >
            {{ card.title }}
          </h1>
          <p
            class="mt-4 max-w-xl text-lg leading-relaxed text-gray-800 drop-shadow-sm transition-opacity duration-700 group-hover:opacity-90"
          >
            {{ card.description }}
          </p>
          <button
            class="mt-6 inline-flex items-center gap-2 rounded-full bg-emerald-500 px-5 py-2 text-white font-semibold shadow hover:bg-emerald-600 transition"
          >
            Разгледай
            <span class="text-xl">→</span>
          </button>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";

const router = useRouter();

const navigateTo = (route: string) => {
  if (route) router.push(route);
};

const foodCards = [
  {
    title: "Протеини",
    description: "Основен градивен елемент за мускулите и ситостта.",
    image: "/protein.png",
    route: "/proteins",
  },
  {
    title: "Мазнини",
    description: "Полезни и незаменими за хормонален баланс и енергия.",
    image: "/fats.png",
    route: "/fats",
  },
  {
    title: "Въглехидрати",
    description: "Източник на енергия – с висок и нисък гликемичен индекс.",
    image: "/carbs.png",
    route: "/carbs",
  },
  {
    title: "Фибри",
    description: "Засищат, балансират глюкозата и поддържат храносмилането.",
    image: "/fiber.png",
    route: "/fibers",
  },
  {
    title: "ГИ на храните",
    description: "Гликемичните индекси на храните",
    image: "/glycemic-index-foods.png",
    route: "/glycemic-index-foods",
  },
  {
    title: "Хранене",
    description: "",
    image: "/nutrition.png",
    route: "/nutrition",
  },
];
</script>
