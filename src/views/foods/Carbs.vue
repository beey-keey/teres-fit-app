<template>
  <div class="mx-auto max-w-4xl p-6 text-gray-800">
    <h1 class="mb-6 text-center text-3xl font-extrabold text-orange-700">
      🍞 Храни, богати на въглехидрати
    </h1>

    <section v-for="(group, index) in carbData" :key="index" class="mb-8">
      <h2 class="mb-2 text-xl font-bold text-orange-600">{{ group.category }}</h2>
      <ul class="list-inside list-disc space-y-1">
        <li v-for="item in group.items" :key="item.name">
          <strong>{{ item.name }}</strong> – {{ item.carbs }}
        </li>
      </ul>
    </section>

    <hr class="my-10 border-orange-300" />

    <h2 class="mb-4 text-2xl font-bold text-orange-700">🥣 Рецепти с въглехидрати</h2>

    <div v-for="(recipe, i) in recipes" :key="i" class="mb-6 rounded-xl bg-orange-50 p-4 shadow">
      <h3 class="mb-2 text-xl font-semibold text-orange-800">{{ recipe.title }}</h3>
      <p class="mb-2 text-sm text-gray-600">Въглехидрати: {{ recipe.carbs }} на порция</p>
      <p class="mb-1 text-sm font-medium">Продукти:</p>
      <ul class="mb-2 list-inside list-disc text-sm">
        <li v-for="(ingredient, j) in recipe.ingredients" :key="j">{{ ingredient }}</li>
      </ul>
      <p class="text-sm"><strong>Приготвяне:</strong> {{ recipe.preparation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const carbData = [
  {
    category: 'Пълнозърнести храни',
    items: [
      { name: 'Овесени ядки (сухи)', carbs: '66 г на 100 г' },
      { name: 'Пълнозърнест хляб', carbs: '40–45 г на 100 г' },
      { name: 'Кафяв ориз (варен)', carbs: '23 г на 100 г' },
      { name: 'Киноа (варена)', carbs: '21 г на 100 г' },
      { name: 'Елда (варена)', carbs: '19 г на 100 г' },
    ],
  },
  {
    category: 'Бобови култури',
    items: [
      { name: 'Леща (варена)', carbs: '20 г на 100 г' },
      { name: 'Нахут (варен)', carbs: '27 г на 100 г' },
      { name: 'Боб (варен)', carbs: '22 г на 100 г' },
    ],
  },
  {
    category: 'Плодове (естествени захари)',
    items: [
      { name: 'Банан', carbs: '23 г на 100 г' },
      { name: 'Ябълка', carbs: '14 г на 100 г' },
      { name: 'Грозде', carbs: '17 г на 100 г' },
      { name: 'Сушени фурми', carbs: '75 г на 100 г' },
    ],
  },
  {
    category: 'Зеленчуци (ниско съдържание)',
    items: [
      { name: 'Моркови (сурови)', carbs: '10 г на 100 г' },
      { name: 'Цвекло (варено)', carbs: '9.6 г на 100 г' },
      { name: 'Картофи (варени)', carbs: '17 г на 100 г' },
      { name: 'Царевица (варена)', carbs: '19 г на 100 г' },
    ],
  },
  {
    category: 'Други източници',
    items: [
      { name: 'Мед', carbs: '82 г на 100 г' },
      { name: 'Кленов сироп', carbs: '67 г на 100 г' },
      { name: 'Зърнени закуски', carbs: '60–80 г на 100 г' },
    ],
  },
]

const recipes = [
  {
    title: 'Овесена каша с банан и канела',
    carbs: '~45 г',
    ingredients: [
      '50 г овесени ядки',
      '200 мл вода или мляко',
      '1 банан – нарязан',
      '½ ч.л. канела',
      '1 ч.л. чиа или мед (по желание)',
    ],
    preparation:
      'Сварете овеса, добавете банана и канелата и разбъркайте. Може да добавите мед по желание.',
  },
  {
    title: 'Купа с киноа, червен боб и царевица',
    carbs: '~35–40 г',
    ingredients: [
      '½ ч.ч. сварена киноа',
      '½ ч.ч. червен боб',
      '¼ ч.ч. царевица',
      '1 чери домат, нарязан',
      '1 с.л. зехтин и лимон',
    ],
    preparation: 'Смесете всички съставки в купа и сервирайте охладено или леко затоплено.',
  },
  {
    title: 'Пълнозърнеста паста с тиквички и сирене',
    carbs: '~50 г',
    ingredients: [
      '80 г пълнозърнеста паста (варена)',
      '½ тиквичка – настъргана и сотирана',
      '1 с.л. зехтин',
      '30 г сирене (по избор)',
    ],
    preparation: 'Сотирайте тиквичката, смесете с пастата и поръсете със сирене.',
  },
]
</script>
