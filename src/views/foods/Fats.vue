<template>
  <div class="mx-auto max-w-4xl p-6 text-gray-800">
    <h1 class="mb-6 text-center text-3xl font-extrabold text-yellow-700">
      🥑 Храни, богати на мазнини
    </h1>

    <section v-for="(group, index) in fatData" :key="index" class="mb-8">
      <h2 class="mb-2 text-xl font-bold text-amber-700">{{ group.category }}</h2>
      <ul class="list-inside list-disc space-y-1">
        <li v-for="item in group.items" :key="item.name">
          <strong>{{ item.name }}</strong> – {{ item.fat }}
        </li>
      </ul>
    </section>

    <hr class="my-10 border-yellow-300" />

    <h2 class="mb-4 text-2xl font-bold text-yellow-700">🍳 Рецепти с полезни мазнини</h2>

    <div v-for="(recipe, i) in recipes" :key="i" class="mb-6 rounded-xl bg-yellow-50 p-4 shadow">
      <h3 class="mb-2 text-xl font-semibold text-amber-800">{{ recipe.title }}</h3>
      <p class="mb-2 text-sm text-gray-600">Мазнини: {{ recipe.fat }} на порция</p>
      <p class="mb-1 text-sm font-medium">Продукти:</p>
      <ul class="mb-2 list-inside list-disc text-sm">
        <li v-for="(ingredient, j) in recipe.ingredients" :key="j">{{ ingredient }}</li>
      </ul>
      <p class="text-sm"><strong>Приготвяне:</strong> {{ recipe.preparation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const fatData = [
  {
    category: 'Ядки и семена',
    items: [
      { name: 'Бадеми', fat: '49 г на 100 г' },
      { name: 'Орехи', fat: '65 г на 100 г' },
      { name: 'Фъстъци', fat: '49 г на 100 г' },
      { name: 'Слънчогледови семки', fat: '51 г на 100 г' },
      { name: 'Чиа семена', fat: '31 г на 100 г' },
      { name: 'Ленено семе', fat: '42 г на 100 г' },
    ],
  },
  {
    category: 'Масла и мазнини',
    items: [
      { name: 'Зехтин (екстра върджин)', fat: '100 г на 100 мл' },
      { name: 'Кокосово масло', fat: '100 г на 100 г (предимно наситени)' },
      { name: 'Масло от авокадо', fat: '100 г на 100 мл' },
      { name: 'Фъстъчено масло (натурално)', fat: '50 г на 100 г' },
    ],
  },
  {
    category: 'Риба и морски дарове',
    items: [
      { name: 'Сьомга (печена)', fat: '13 г на 100 г (богата на омега-3)' },
      { name: 'Скумрия', fat: '13–15 г на 100 г' },
      { name: 'Херинга', fat: '17 г на 100 г' },
    ],
  },
  {
    category: 'Авокадо и други',
    items: [
      { name: 'Авокадо', fat: '15 г на 100 г' },
      { name: 'Кокос (суров)', fat: '33 г на 100 г' },
      { name: 'Маслини', fat: '10–15 г на 100 г' },
      { name: 'Яйчен жълтък', fat: '10.5 г на 100 г' },
    ],
  },
  {
    category: 'Млечни продукти (пълномаслени)',
    items: [
      { name: 'Кашкавал', fat: '30 г на 100 г' },
      { name: 'Маскарпоне', fat: '44 г на 100 г' },
      { name: 'Сметана (30%)', fat: '30 г на 100 мл' },
      { name: 'Кисело мляко (4.5%)', fat: '4.5 г на 100 г' },
    ],
  },
]

const recipes = [
  {
    title: 'Авокадо тост с яйце и чиа',
    fat: '~20–25 г',
    ingredients: [
      '1 филия пълнозърнест хляб',
      '½ авокадо – намачкано',
      '1 яйце – сварено или поширано',
      '1 ч.л. чиа семена',
      'Малко зехтин и сол',
    ],
    preparation:
      'Намачкайте авокадото с подправките, сложете върху хляба, добавете яйцето и поръсете с чиа.',
  },
  {
    title: 'Салата със сьомга, авокадо и орехи',
    fat: '~30 г',
    ingredients: [
      '100 г печена сьомга',
      '½ авокадо',
      'Шепа орехи (20–25 г)',
      'Микс зелени салати',
      '1 с.л. зехтин',
      'Лимон и сол',
    ],
    preparation: 'Смесете всичко и сервирайте охладено.',
  },
  {
    title: 'Смути с кокосово мляко и ленено семе',
    fat: '~18–22 г',
    ingredients: [
      '200 мл кокосово мляко (от консерва)',
      '1 банан',
      '1 с.л. ленено семе',
      '1 ч.л. фъстъчено масло',
    ],
    preparation: 'Смесете всички съставки в блендер и сервирайте веднага.',
  },
]
</script>
