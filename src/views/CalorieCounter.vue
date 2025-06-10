<template>
  <div class="mx-auto mt-10 max-w-xl rounded-xl bg-white p-6 shadow-lg">
    <h2 class="mb-4 text-center text-2xl font-bold text-emerald-700">🧮 Калориен калкулатор</h2>

    <form @submit.prevent class="grid grid-cols-1 gap-4">
      <div>
        <label class="mb-1 block font-medium">Пол:</label>
        <select v-model="gender" class="w-full rounded border p-2">
          <option value="female">Жена</option>
          <option value="male">Мъж</option>
        </select>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="mb-1 block font-medium">Възраст (г.):</label>
          <input v-model.number="age" type="number" class="w-full rounded border p-2" />
        </div>
        <div>
          <label class="mb-1 block font-medium">Тегло (кг):</label>
          <input v-model.number="weight" type="number" class="w-full rounded border p-2" />
        </div>
      </div>

      <div class="grid grid-cols-2 gap-4">
        <div>
          <label class="mb-1 block font-medium">Ръст (см):</label>
          <input v-model.number="height" type="number" class="w-full rounded border p-2" />
        </div>
        <div>
          <label class="mb-1 block font-medium">Активност:</label>
          <select v-model.number="activity" class="w-full rounded border p-2">
            <option :value="1.2">Ниска</option>
            <option :value="1.375">Лека</option>
            <option :value="1.55">Умерена</option>
            <option :value="1.725">Висока</option>
          </select>
        </div>
      </div>
    </form>

    <div v-if="calories" class="mt-6 text-center">
      <p class="text-lg text-gray-700">
        👉 За поддържане: <span class="font-semibold">{{ calories }}</span> kcal/ден
      </p>
      <p class="text-lg text-red-600">
        🔥 За отслабване (~500 kcal дефицит):
        <span class="font-bold">{{ calories - 500 }}</span> kcal/ден
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'

const gender = ref<'female' | 'male'>('female')
const age = ref(30)
const weight = ref(60)
const height = ref(165)
const activity = ref(1.55)

const calories = computed(() => {
  if (!age.value || !weight.value || !height.value) return null

  const base =
    gender.value === 'female'
      ? 10 * weight.value + 6.25 * height.value - 5 * age.value - 161
      : 10 * weight.value + 6.25 * height.value - 5 * age.value + 5

  return Math.round(base * activity.value)
})
</script>

<style scoped>
input,
select {
  border-color: #cbd5e0;
}
</style>
