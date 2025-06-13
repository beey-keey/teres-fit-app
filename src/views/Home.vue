<template>
  <div
    class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 px-4 py-10 text-gray-800"
  >
    <div class="mx-auto max-w-5xl space-y-20">
      <div
        class="fixed inset-0 z-0 bg-cover bg-center animate-bg-fade pointer-events-none"
        style="
          background-image: url(&quot;/teres-fit-app/background.png&quot;);
          opacity: 1;
        "
      ></div>

      <section
        v-for="(card, index) in cards"
        :key="index"
        class="group relative h-[500px] w-full overflow-hidden rounded-2xl shadow-xl"
      >
        <img
          :src="card.image"
          alt="Глюкозната богиня"
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
        </div>
      </section>

      <!-- ✅ Бутона извън секцията -->
      <div class="text-center">
        <a
          :href="baseUrl + 'principles'"
          class="inline-block rounded-full bg-emerald-500 px-6 py-3 text-white font-semibold shadow hover:bg-emerald-600 transition"
        >
          Разгледай принципите
        </a>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
const baseUrl = import.meta.env.BASE_URL;

const cards = [
  {
    title: "💡 Основна идея и концепция",
    description:
      "Споделяне на личен опит със здравословен режим, без да се дава медицински съвет.",
    image: "/teres-fit-app/banner.png",
  },
  {
    title: "🌱 Каква е целта на сайта?",
    description: "Да вдъхновя други хора чрез моя опит.",
    image: "/teres-fit-app/banner2.png",
  },
  {
    title: "🤸🏻‍♀️ За кого е този сайт?",
    description:
      "За хора, които търсят баланс, вдъхновение и реален пример – не диета.",
    image: "/teres-fit-app/banner3.png",
  },
  {
    title: "‼️ Какво НЕ е този сайт?",
    description:
      "Това не е медицински блог или диетичен план. Всичко е личен пример.",
    image: "/teres-fit-app/banner4.png",
  },
  {
    title: "🤩 Какво ще намериш тук?",
    description:
      "Моите дневници, рецепти, хранителни схеми, трикове за баланс и вдъхновение.",
    image: "/teres-fit-app/banner5.png",
  },
];

function generateLeafStyle(index: number) {
  const left = Math.random() * 100;
  const top = Math.random() * 100;
  const delay = 0.3 * index;
  const size = 40 + Math.random() * 30;

  return {
    left: `${left}%`,
    top: `${top}%`,
    width: `${size}px`,
    animationDelay: `${delay}s`,
    transform: "rotate(0deg)",
  };
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

.animate-fade-in {
  animation: fade-in 0.6s ease-out both;
}

@keyframes bg-fade {
  0%,
  100% {
    opacity: 0.6;
  }
  50% {
    opacity: 0.2;
  }
}

.animate-bg-fade {
  animation: bg-fade 10s ease-in-out infinite;
}
</style>
