<template>
  <div class="mx-auto max-w-4xl p-6 text-gray-800">
    <h1 class="mb-6 text-center text-3xl font-extrabold text-blue-700">
      💪 Храни, богати на протеин
    </h1>

    <section v-for="(group, index) in proteinData" :key="index" class="mb-8">
      <h2 class="mb-2 text-xl font-bold text-indigo-700">{{ group.category }}</h2>
      <ul class="list-inside list-disc space-y-1">
        <li v-for="item in group.items" :key="item.name">
          <strong>{{ item.name }}</strong> – {{ item.protein }}
        </li>
      </ul>
    </section>

    <hr class="my-10 border-indigo-300" />

    <h2 class="mb-4 text-2xl font-bold text-blue-700">🍽️ Рецепти с много протеин</h2>

    <div v-for="(recipe, i) in recipes" :key="i" class="mb-6 rounded-xl bg-indigo-50 p-4 shadow">
      <h3 class="mb-2 text-xl font-semibold text-indigo-800">{{ recipe.title }}</h3>
      <p class="mb-2 text-sm text-gray-600">Протеин: {{ recipe.protein }} на порция</p>
      <p class="mb-1 text-sm font-medium">Продукти:</p>
      <ul class="mb-2 list-inside list-disc text-sm">
        <li v-for="(ingredient, j) in recipe.ingredients" :key="j">{{ ingredient }}</li>
      </ul>
      <p class="text-sm"><strong>Приготвяне:</strong> {{ recipe.preparation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const proteinData = [
  {
    category: 'Месо и риба',
    items: [
      { name: 'Пилешки гърди (печени)', protein: '31 г на 100 г' },
      { name: 'Говеждо месо (печено)', protein: '26 г на 100 г' },
      { name: 'Сьомга (печена)', protein: '25 г на 100 г' },
      { name: 'Риба тон (консерва)', protein: '27 г на 100 г' },
      { name: 'Яйца', protein: '6.3 г на 1 яйце' },
    ],
  },
  {
    category: 'Бобови',
    items: [
      { name: 'Леща (варена)', protein: '9 г на 100 г' },
      { name: 'Нахут (варен)', protein: '8.9 г на 100 г' },
      { name: 'Черен боб (варен)', protein: '8.9 г на 100 г' },
    ],
  },
  {
    category: 'Ядки и семена',
    items: [
      { name: 'Бадеми', protein: '21 г на 100 г' },
      { name: 'Фъстъци', protein: '25 г на 100 г' },
      { name: 'Слънчогледови семки', protein: '21 г на 100 г' },
      { name: 'Чиа семена', protein: '17 г на 100 г' },
      { name: 'Тиквени семки', protein: '19 г на 100 г' },
    ],
  },
  {
    category: 'Млечни продукти',
    items: [
      { name: 'Скир (исландско кисело мляко)', protein: '11 г на 100 г' },
      { name: 'Гръцко кисело мляко (2%)', protein: '10 г на 100 г' },
      { name: 'Кисело мляко (2%)', protein: '3.5–4 г на 100 г' },
      { name: 'Кашкавал', protein: '25 г на 100 г' },
      { name: 'Извара (нискомаслена)', protein: '11–13 г на 100 г' },
    ],
  },
  {
    category: 'Зърнени и други',
    items: [
      { name: 'Овесени ядки (сухи)', protein: '13 г на 100 г' },
      { name: 'Киноа (варена)', protein: '4.1 г на 100 г' },
      { name: 'Яйчен белтък', protein: '11 г на 100 г' },
      { name: 'Протеинов изолат (суроватка)', protein: '~20–25 г на доза (30 г)' },
    ],
  },
]

const recipes = [
  {
    title: 'Пилешка купа с киноа и зеленчуци',
    protein: '~35 г',
    ingredients: [
      '100 г печени пилешки гърди',
      '½ ч.ч. варена киноа',
      '1/2 авокадо – нарязано',
      '1 ч.ч. задушен броколи',
      '1 с.л. зехтин и лимон за дресинг',
    ],
    preparation:
      'Подредете всички съставки в купа, залейте с дресинга и сервирайте топло или охладено.',
  },
  {
    title: 'Салата с риба тон, яйца и авокадо',
    protein: '~30 г',
    ingredients: [
      '1 консерва риба тон в собствен сок',
      '2 сварени яйца',
      '½ авокадо',
      'Шепа зелени салати',
      '1 с.л. зехтин и балсамико',
    ],
    preparation: 'Смесете всичко, овкусете и сервирайте охладено.',
  },
  {
    title: 'Смути с протеин и фъстъчено масло',
    protein: '~28 г',
    ingredients: [
      '1 мерителна лъжица суроватъчен протеин (~25 г)',
      '200 мл неподсладено бадемово мляко',
      '1 банан',
      '1 с.л. фъстъчено масло',
      '1 ч.л. чиа семена',
    ],
    preparation: 'Смесете всички съставки в блендер до получаване на хомогенна смес.',
  },
]
</script>
