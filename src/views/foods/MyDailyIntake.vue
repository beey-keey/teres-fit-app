<template>
  <div
    class="min-h-screen bg-gradient-to-br from-lime-50 to-emerald-100 px-6 py-12 text-gray-800 relative"
  >
    <div class="relative z-10 mx-auto space-y-20" style="margin-bottom: 100px">
      <!-- 💬 Вдъхновяващо послание -->
      <div
        class="bg-gradient-to-br from-white/90 to-lime-100 border border-emerald-300 rounded-2xl p-8 shadow-xl backdrop-blur-sm"
      >
        <div class="flex flex-col items-center text-center space-y-4">
          <div class="text-5xl">💫</div>
          <h2 class="text-2xl font-bold text-emerald-700">
            Това е моят основен режим, но животът е много повече.
          </h2>
          <p class="text-base text-gray-700 leading-relaxed">
            Има празници, уикенди, поводи, женски периоди – <br />
            моменти, в които тялото има нужда от повече или различна храна.
          </p>
          <p class="text-base text-gray-700 leading-relaxed">
            <strong class="text-emerald-800">Истинският баланс</strong> идва,
            когато спрем да се обвиняваме. <br />
            Режимът е начин на живот – не система от лишения.
          </p>
          <p class="italic text-sm text-gray-600 max-w-lg">
            Ям пица. Ям спагети. Ям сладко. <br />
            И това е напълно нормално, когато 80% от храненето ми е
            балансирано,<br />
            а останалите 20% са разумна наслада. 💚
          </p>
        </div>
      </div>
    </div>

    <div class="relative z-10 mx-auto max-w-3xl space-y-16">
      <h1
        class="text-center text-4xl font-extrabold text-emerald-700 drop-shadow"
      >
        🌿 Моят дневен хранителен режим
      </h1>
      <!-- 🧠 Баланс и калкулатор – сигнално -->
      <div
        class="mt-6 mb-10 rounded-xl bg-amber-100/70 border border-amber-400 px-6 py-5 text-center shadow-md backdrop-blur-sm"
      >
        <p class="text-md sm:text-lg text-amber-900 font-semibold mb-4">
          ⚠️ Ключът е в баланса и устойчивия калориен дефицит – не в крайности.
        </p>
        <a
          href="/teres-fit-app/calorieCounter"
          class="inline-flex items-center gap-2 rounded-full bg-amber-500 px-5 py-2 text-white font-semibold shadow hover:bg-amber-600 transition"
        >
          📊 Калориен калкулатор
        </a>
      </div>

      <!-- 🍽️ Обяд -->
      <section
        class="rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md transition hover:scale-[1.01]"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-emerald-700">🍽️ Обяд</h2>
          <span
            class="inline-block rounded-full bg-emerald-100 px-3 py-1 text-emerald-700 font-semibold shadow text-sm"
          >
            🔥 ~ 450–550 kcal
          </span>
        </div>
        <ul class="list-disc pl-5 text-gray-700 space-y-2 text-base">
          <li>Салата или зеленчуци (задължително начало)</li>
          <li>Протеин: ~100 г пилешко, сьомга, стек или 2 яйца</li>
          <li>1 филия домашен пълнозърнест ръжен хляб (~80–100 kcal)</li>
          <li>Понякога: ~35 г авокадо и/или малко моцарела</li>
        </ul>
      </section>

      <!-- 🥣 Следобедна закуска -->
      <section
        class="rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md transition hover:scale-[1.01]"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-emerald-700">
            🥣 Следобедна закуска
          </h2>
          <span
            class="inline-block rounded-full bg-amber-100 px-3 py-1 text-amber-700 font-semibold shadow text-sm"
          >
            🔥 ~ 250–300 kcal
          </span>
        </div>
        <ul class="list-disc pl-5 text-gray-700 space-y-2 text-base">
          <li>200–300 г кисело мляко 2%</li>
          <li>½ ябълка или ~30–50 г боровинки</li>
          <li>10 г чиа + канела</li>
          <li>15 г ядки (мерени) – ~90 kcal</li>
        </ul>
      </section>

      <!-- 🌙 Вечеря -->
      <section
        class="rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md transition hover:scale-[1.01]"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-emerald-700">🌙 Вечеря</h2>
          <span
            class="inline-block rounded-full bg-indigo-100 px-3 py-1 text-indigo-700 font-semibold shadow text-sm"
          >
            🔥 ~ 300–400 kcal
          </span>
        </div>
        <ul class="list-disc pl-5 text-gray-700 space-y-2 text-base">
          <li>Зеленчуци или салата за старт</li>
          <li>
            Лека порция: риба, яйца, или паста с тиквичков сос (без сирене)
          </li>
          <li>Ако обядът е бил мазен → вечерята е още по-лека</li>
        </ul>
      </section>

      <!-- 🏋️‍♀️ След тренировка -->
      <section
        class="rounded-2xl bg-white/90 p-6 shadow-2xl backdrop-blur-md transition hover:scale-[1.01]"
      >
        <div class="flex justify-between items-center mb-4">
          <h2 class="text-2xl font-bold text-emerald-700">
            🏋️‍♀️ След тренировка
          </h2>
          <span
            class="inline-block rounded-full bg-pink-100 px-3 py-1 text-pink-700 font-semibold shadow text-sm"
          >
            🔥 ~ 110 kcal
          </span>
        </div>
        <ul class="list-disc pl-5 text-gray-700 space-y-2 text-base">
          <li>Протеинов шейк (изолат, ~25 г прах) веднага след тренировка</li>
          <li>След това – лека вечеря след 30–60 минути</li>
        </ul>
      </section>

      <!-- 📊 Общ прием -->
      <div class="text-center mt-12">
        <p class="text-xl font-bold text-emerald-700">
          📊 Общ дневен прием:
          <span
            class="bg-white/70 rounded-xl px-4 py-1 ml-2 text-emerald-900 shadow inline-block"
          >
            ~1100 – 1350 kcal
          </span>
        </p>
        <p class="text-sm text-gray-600 mt-1">
          (без изключения като десерт или специални дни)
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
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
