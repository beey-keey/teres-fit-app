<template>
  <section class="px-6 py-10">
    <h2 class="mb-10 text-center text-3xl font-bold text-green-700">
      🍽️ Какво и кога да ядем
    </h2>

    <div class="grid gap-8 md:grid-cols-3">
      <!-- Закуска -->
      <div class="rounded-xl border-l-4 border-green-300 bg-white p-6 shadow">
        <h3 class="mb-2 text-xl font-semibold text-green-800">🌅 Закуска</h3>
        <p class="text-sm text-gray-700">
          Закуската трябва да бъде в рамките на 1 час след събуждане, с 30–40 г
          протеин и да представлява 30–40% от дневните калории. Плътна и
          питателна, тя стабилизира глюкозата, намалява стреса и дава енергия.
        </p>
      </div>

      <!-- Обяд -->
      <div class="rounded-xl border-l-4 border-emerald-300 bg-white p-6 shadow">
        <h3 class="mb-2 text-xl font-semibold text-emerald-800">🌞 Обяд</h3>
        <p class="text-sm text-gray-700">
          Обядът трябва да включва протеин, сложни въглехидрати и разнообразие
          от зеленчуци. Избягвай крем супи с нишесте – по-добре гъста супа с
          фибри и зеленина.
        </p>
      </div>

      <!-- Вечеря -->
      <div class="rounded-xl border-l-4 border-lime-300 bg-white p-6 shadow">
        <h3 class="mb-2 text-xl font-semibold text-lime-800">🌙 Вечеря</h3>
        <p class="text-sm text-gray-700">
          Вечеряй 3–4 часа преди лягане. Леки храни с фибри, малко мазнини и
          умерен протеин ще подпомогнат съня и ще подготвят тялото за новия ден.
        </p>
      </div>
    </div>

    <!-- Режим -->
    <div
      class="mt-16 rounded-xl border-l-4 border-yellow-400 bg-white p-6 shadow"
    >
      <h3 class="mb-2 text-xl font-semibold text-yellow-600">
        🕒 Режим и съвети
      </h3>
      <ul class="list-disc space-y-2 pl-5 text-sm text-gray-700">
        <li>Яж по едно и също време – тялото обича ритъм и предсказуемост.</li>
        <li>4–5 часа между храненията, без похапване между тях.</li>
        <li>Яж само на масата, не пред екрани или на работа.</li>
        <li>Пикантни/кисели вкусове помагат срещу внезапен глад.</li>
        <li>Дръж подготвена закуска, за да устоиш на изкушенията.</li>
      </ul>
    </div>
  </section>
  <MyDailyIntake></MyDailyIntake>
</template>

<script setup lang="ts">
import MyDailyIntake from "./MyDailyIntake.vue";
// няма нужда от логика
</script>
