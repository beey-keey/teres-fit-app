<template>
  <div class="mx-auto max-w-4xl p-6 text-gray-800">
    <h1 class="mb-6 text-center text-3xl font-extrabold text-green-700">
      🌿 Храни, богати на фибри
    </h1>

    <section v-for="(group, index) in fiberData" :key="index" class="mb-8">
      <h2 class="mb-2 text-xl font-bold text-emerald-600">{{ group.category }}</h2>
      <ul class="list-inside list-disc space-y-1">
        <li v-for="item in group.items" :key="item.name">
          <strong>{{ item.name }}</strong> – {{ item.fiber }}
        </li>
      </ul>
    </section>

    <hr class="my-10 border-green-300" />

    <h2 class="mb-4 text-2xl font-bold text-green-700">🥗 Рецепти с много фибри</h2>

    <div v-for="(recipe, i) in recipes" :key="i" class="mb-6 rounded-xl bg-lime-50 p-4 shadow">
      <h3 class="mb-2 text-xl font-semibold text-lime-800">{{ recipe.title }}</h3>
      <p class="mb-2 text-sm text-gray-600">Фибри: {{ recipe.fiber }} на порция</p>
      <p class="mb-1 text-sm font-medium">Продукти:</p>
      <ul class="mb-2 list-inside list-disc text-sm">
        <li v-for="(ingredient, j) in recipe.ingredients" :key="j">{{ ingredient }}</li>
      </ul>
      <p class="text-sm"><strong>Приготвяне:</strong> {{ recipe.preparation }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
const fiberData = [
  {
    category: 'Семена',
    items: [
      { name: 'Чиа семена', fiber: '34 г' },
      { name: 'Ленено семе', fiber: '27 г' },
      { name: 'Слънчогледови семки', fiber: '8.6 г' },
    ],
  },
  {
    category: 'Бобови',
    items: [
      { name: 'Леща (варена)', fiber: '7.9 г' },
      { name: 'Нахут (варен)', fiber: '7.6 г' },
      { name: 'Боб (варен)', fiber: '6–9 г' },
    ],
  },
  {
    category: 'Плодове',
    items: [
      { name: 'Смокини (сушени)', fiber: '9.8 г' },
      { name: 'Сушени сливи', fiber: '7–8 г' },
      { name: 'Авокадо', fiber: '6.7 г' },
      { name: 'Малини', fiber: '6.5 г' },
      { name: 'Круша (с кора)', fiber: '3.1 г' },
      { name: 'Ябълка (с кора)', fiber: '2.4 г' },
    ],
  },
  {
    category: 'Ядки',
    items: [
      { name: 'Бадеми', fiber: '12.5 г' },
      { name: 'Орехи', fiber: '6.7 г' },
      { name: 'Фъстъци', fiber: '8.0 г' },
    ],
  },
  {
    category: 'Зърнени',
    items: [
      { name: 'Овесени ядки (сурови)', fiber: '10 г' },
      { name: 'Киноа (варена)', fiber: '2.8 г' },
      { name: 'Пълнозърнест хляб', fiber: '~6–8 г' },
    ],
  },
  {
    category: 'Зеленчуци',
    items: [
      { name: 'Артишок (варен)', fiber: '5.4 г' },
      { name: 'Брюкселско зеле', fiber: '4.1 г' },
      { name: 'Броколи (варени)', fiber: '3.3 г' },
      { name: 'Моркови (сурови)', fiber: '2.8 г' },
      { name: 'Спанак (варен)', fiber: '2.2 г' },
    ],
  },
]

const recipes = [
  {
    title: 'Салата с нахут, червен лук и авокадо',
    fiber: '~10–12 г',
    ingredients: [
      '1 консерва сварен нахут (около 200 г)',
      '1 авокадо – нарязано',
      '1 малка червена глава лук – полумесеци',
      '1 домат – на кубчета',
      'Шепа магданоз – ситно нарязан',
      '1 с.л. зехтин',
      'Сок от ½ лимон',
      'Сол и черен пипер',
    ],
    preparation: 'Смесете всички съставки в купа, разбъркайте внимателно и сервирайте охладена.',
  },
  {
    title: 'Салата с броколи, червен фасул и слънчогледови семки',
    fiber: '~9–11 г',
    ingredients: [
      '1 ч.ч. сварени броколи',
      '½ ч.ч. червен фасул',
      '1 настърган морков',
      '2 с.л. слънчогледови семки',
      '1 с.л. ябълков оцет или лимон',
      '1 ч.л. зехтин',
      'Щипка сол',
    ],
    preparation: 'Смесете всичко в купа и оставете да престои 15 минути за по-силен вкус.',
  },
  {
    title: 'Зелена салата с киноа, авокадо и чери домати',
    fiber: '~8–10 г',
    ingredients: [
      '½ ч.ч. сварена киноа',
      'Шепа бейби спанак или рукола',
      '6–8 чери домата – разполовени',
      '½ авокадо – нарязано',
      '1 с.л. чиа или ленено семе',
      '1 с.л. зехтин',
      'Сок от ½ лимон',
      'Щипка хималайска сол',
    ],
    preparation: 'Смесете всичко, полейте със зехтин и лимон, и поръсете със семена.',
  },
]
</script>
