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

        <!-- <div class="mb-8 flex justify-center">
          <img
            src="/carb-dressing.png"
            alt="Обличане на въглехидратите"
            class="animate-fade-in w-full max-w-md rounded-xl border-2 border-green-200 shadow-md"
          />
        </div> -->

        <div class="grid grid-cols-1 gap-6 text-center md:grid-cols-3">
          <!-- Глюкозната богиня -->
          <div
            class="group flex cursor-pointer flex-col items-center rounded-2xl bg-green-50 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            @click="glucoseGoddessPrinciple()"
          >
            <img
              src="/glucosegoddess.png"
              alt="Глюкозната богиня"
              class="mb-4 w-full max-w-[220px] rounded-xl shadow-sm"
            />
            <h3 class="text-xl font-bold text-green-800 transition group-hover:text-green-900">
              ⭐️ Принципът на глюкозната богиня
            </h3>
          </div>

          <!-- Периодично гладуване -->
          <div
            class="group flex cursor-pointer flex-col items-center rounded-2xl bg-emerald-50 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            @click="intermittentFasting()"
          >
            <img
              src="/intermittent-fasting.png"
              alt="Хранене в прозорец"
              class="mb-4 w-full max-w-[220px] rounded-xl shadow-sm"
            />
            <h3 class="text-xl font-bold text-emerald-800 transition group-hover:text-emerald-900">
              🍽️ Хранене в прозорец
            </h3>
          </div>

          <!-- Спорт -->
          <div
            class="group flex cursor-pointer flex-col items-center rounded-2xl bg-lime-50 p-5 shadow-md transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            @click="workout()"
          >
            <img
              src="/woman.png"
              alt="Спорт"
              class="mb-4 w-full max-w-[220px] rounded-xl shadow-sm"
            />
            <h3 class="text-xl font-bold text-lime-800 transition group-hover:text-lime-900">
              🤸🏼 Спорт
            </h3>
          </div>
        </div>

        <div class="mt-20">
          <h2 class="mb-6 text-center text-2xl font-bold text-green-700">📚 Принципи и подходи</h2>

          <!-- нужно за child routes -->
          <div class="space-y-6">
            <div class="rounded border-l-4 border-green-300 bg-white p-4 shadow">
              <h3 class="mb-2 text-xl font-semibold text-green-800">
                🧬 Принципът на глюкозната богиня
              </h3>
              <p class="text-sm text-gray-600">
                Спазването на ред при хранене – първо фибри, после протеин и мазнини, и чак накрая
                въглехидрати – помага да се забави усвояването на глюкозата в кръвта. Това води до
                по-малки глюкозни пикове, по-дълготрайна ситост, по-малко апетит за сладко и
                по-стабилна енергия през деня. Подходът не изключва храни, а учи как да ги
                комбинираме умно.
              </p>
            </div>

            <div class="rounded border-l-4 border-emerald-300 bg-white p-4 shadow">
              <h3 class="mb-2 text-xl font-semibold text-emerald-800">
                ⏱️ Периодично гладуване и хранене в прозорец
              </h3>
              <p class="text-sm text-gray-600">
                Периодичното гладуване – било то 16:8, 14:10 или друга схема – дава на тялото време
                да почива от храносмилане и да се фокусира върху възстановяване. Този подход
                подпомага регулирането на кръвната захар, подобрява инсулиновата чувствителност и
                улеснява изгарянето на мазнини без крайни лишения. Най-важното е постоянството и
                изборът на прозорец, който пасва на твоя ритъм на живот.
              </p>
            </div>

            <div class="rounded border-l-4 border-lime-300 bg-white p-4 shadow">
              <h3 class="mb-2 text-xl font-semibold text-lime-800">🚶‍♀️ Движение след хранене</h3>
              <p class="text-sm text-gray-600">
                Леко движение или разходка след хранене подпомага усвояването на глюкозата и
                намалява глюкозните пикове, като допринася за повече енергия и по-малка сънливост.
              </p>
            </div>

            <div class="rounded border-l-4 border-lime-300 bg-white p-4 shadow">
              <h3 class="mb-2 text-xl font-semibold text-lime-800">🖥️ Хапване далеч от екрани</h3>
              <p class="text-sm text-gray-600">
                Храненето без екрани помага на мозъка да се фокусира върху храната, което води до
                по-добро храносмилане и усещане за ситост. Когато се разсейваме с телефон, лаптоп
                или телевизор, ядем автоматично и често повече, отколкото е нужно. Без да осъзнаем
                вкусовете и сигналите на тялото, можем да се почувстваме подути или да преядем.
                Затова – остави екрана, дишай дълбоко и се свържи със себе си и храната пред теб.
              </p>
            </div>
            <div class="rounded border-l-4 border-yellow-300 bg-white p-4 shadow">
              <h3 class="mb-2 text-xl font-semibold text-yellow-800">
                ☕ Кафе без мляко по време на гладуване
              </h3>
              <p class="text-sm text-gray-600">
                Добавянето на мляко в кафето, дори в малки количества, може да прекъсне състоянието
                на периодично гладуване. Причината е, че млякото съдържа захари и протеини, които
                активират храносмилателния процес и повишават инсулина. Това може да спре ползите от
                гладуването като изгаряне на мазнини и клетъчен рестарт. Дори извън гладуване,
                кафето без мляко (например с канела) поддържа стабилна енергия и избягва глюкозни
                колебания.
              </p>
            </div>
          </div>
        </div>

        <div class="mt-10 text-center text-sm text-gray-500">
          <p class="animate-fade-in">✨ Следвай Teres Fit за още съвети, рецепти и мотивация!</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import router from '@/router/router'

const glucoseGoddessPrinciple = () => {
  router.push('/glucose-goddess')
}

const intermittentFasting = () => {
  router.push('/intermittent-fasting')
}

const workout = () => {
  router.push('/workout')
}
</script>

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
