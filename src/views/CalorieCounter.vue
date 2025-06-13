<template>
  <div
    class="mx-auto mt-10 max-w-xl rounded-2xl bg-white p-6 shadow-2xl space-y-6"
  >
    <h2
      class="text-center text-3xl font-extrabold text-emerald-700 drop-shadow"
    >
      🧮 Калориен калкулатор
    </h2>

    <form @submit.prevent class="grid grid-cols-1 gap-4 text-gray-800">
      <!-- Пол -->
      <div>
        <label class="mb-1 block font-medium">👤 Пол:</label>
        <select v-model="gender" class="w-full rounded-lg border p-2">
          <option value="female">Жена</option>
          <option value="male">Мъж</option>
        </select>
      </div>

      <!-- Възраст, тегло -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="mb-1 block font-medium">🎂 Възраст:</label>
          <input
            v-model.number="age"
            type="number"
            min="0"
            class="w-full rounded-lg border p-2"
          />
        </div>
        <div>
          <label class="mb-1 block font-medium">⚖️ Тегло (кг):</label>
          <input
            v-model.number="weight"
            type="number"
            min="0"
            class="w-full rounded-lg border p-2"
          />
        </div>
      </div>

      <!-- Ръст, активност -->
      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="mb-1 block font-medium">📏 Ръст (см):</label>
          <input
            v-model.number="height"
            type="number"
            min="0"
            class="w-full rounded-lg border p-2"
          />
        </div>
        <div>
          <label class="mb-1 block font-medium">🏃‍♀️ Активност:</label>
          <select
            v-model.number="activity"
            class="w-full rounded-lg border p-2"
          >
            <option :value="1.2">🛋️ Ниска</option>
            <option :value="1.375">🚶‍♀️ Лека</option>
            <option :value="1.55">🏋️ Умерена</option>
            <option :value="1.725">🔥 Висока</option>
          </select>
        </div>
      </div>

      <!-- Бутон за изчистване -->
      <div class="text-center">
        <button
          type="button"
          @click="resetForm"
          class="mt-2 inline-block rounded-full bg-rose-100 px-5 py-2 text-rose-700 font-semibold shadow hover:bg-rose-200 transition"
        >
          ♻️ Изчисти всичко
        </button>
      </div>
    </form>

    <!-- Резултат -->
    <transition name="fade">
      <div v-if="calories" class="text-center mt-6 space-y-3">
        <p class="text-xl font-medium text-gray-700">
          👉 За поддържане:
          <span class="font-extrabold text-emerald-600">{{ calories }}</span>
          kcal / ден
        </p>
        <p class="text-lg text-rose-600 font-semibold">
          🔥 За отслабване:
          <span class="text-xl font-bold">{{ calories - 500 }}</span>
          kcal / ден
        </p>
      </div>
    </transition>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from "vue";

const gender = ref<"female" | "male">("female");
const age = ref<number | null>(30);
const weight = ref<number | null>(60);
const height = ref<number | null>(165);
const activity = ref(1.55);

const resetForm = () => {
  gender.value = "female";
  age.value = null;
  weight.value = null;
  height.value = null;
  activity.value = 1.55;
};

const calories = computed(() => {
  if (!age.value || !weight.value || !height.value) return null;

  const base =
    gender.value === "female"
      ? 10 * weight.value + 6.25 * height.value - 5 * age.value - 161
      : 10 * weight.value + 6.25 * height.value - 5 * age.value + 5;

  return Math.round(base * activity.value);
});
</script>

<style scoped>
input,
select {
  border-color: #cbd5e0;
}
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
