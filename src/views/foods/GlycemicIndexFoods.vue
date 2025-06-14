<template>
  <div class="px-4 py-6">
    <h1 class="mb-6 text-center text-3xl font-bold text-emerald-700">
      🥗 Таблица на гликемичен и инсулинов индекс
    </h1>

    <!-- Info Section -->
    <div class="mx-auto max-w-4xl text-center text-sm text-gray-600">
      <p class="mb-2">
        Глюкозата е приета за референтна с индекс 100. Стойностите могат да варират в зависимост от
        зрелост, термична обработка и други фактори.
      </p>
    </div>

    <!-- Table Toggle -->
    <div class="my-6 flex justify-center gap-4">
      <button
        @click="
          () => {
            activeTab = 'gi'
            currentPage = 1
          }
        "
        :class="tabButtonClass('gi')"
      >
        Гликемичен индекс
      </button>
      <button
        @click="
          () => {
            activeTab = 'ii'
            currentPage = 1
          }
        "
        :class="tabButtonClass('ii')"
      >
        Инсулинов индекс
      </button>
    </div>

    <!-- Search Box -->
    <div class="mb-4 flex justify-center">
      <input
        v-model="searchQuery"
        type="text"
        placeholder="Търсене по храна..."
        class="w-full max-w-md rounded border px-4 py-2 text-sm shadow-sm focus:border-emerald-500 focus:outline-none"
      />
    </div>

    <!-- Table -->
    <div v-if="activeTab === 'gi'" class="overflow-x-auto">
      <table class="mx-auto w-full max-w-5xl table-auto border border-gray-300 text-left text-sm">
        <thead>
          <tr class="bg-emerald-100 text-emerald-800">
            <th class="border p-2">Храна</th>
            <th class="border p-2">GI</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedList"
            :key="index"
            class="odd:bg-white even:bg-gray-50"
          >
            <td class="border p-2">{{ item.name }}</td>
            <td class="border p-2">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <div v-if="activeTab === 'ii'" class="overflow-x-auto">
      <table class="mx-auto w-full max-w-3xl table-auto border border-gray-300 text-left text-sm">
        <thead>
          <tr class="bg-emerald-100 text-emerald-800">
            <th class="border p-2">Храна</th>
            <th class="border p-2">ИИ</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="(item, index) in paginatedList"
            :key="index"
            class="odd:bg-white even:bg-gray-50"
          >
            <td class="border p-2">{{ item.name }}</td>
            <td class="border p-2">{{ item.value }}</td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Pagination -->
    <div class="mt-6 flex flex-wrap items-center justify-center gap-2">
      <button
        :disabled="currentPage === 1"
        @click="currentPage--"
        class="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-emerald-700 disabled:opacity-40"
      >
        ⬅ Назад
      </button>
      <span class="rounded bg-emerald-100 px-3 py-2 text-sm text-emerald-800 shadow">
        Страница {{ currentPage }} от {{ totalPages }}
      </span>
      <button
        :disabled="currentPage === totalPages"
        @click="currentPage++"
        class="rounded-full bg-emerald-600 px-4 py-2 text-sm font-medium text-white shadow transition hover:bg-emerald-700 disabled:opacity-40"
      >
        Напред ➡
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'

type FoodItem = { name: string; value: number | string }

const activeTab = ref<'gi' | 'ii'>('gi')
const currentPage = ref(1)
const itemsPerPage = 20
const searchQuery = ref('')

const filteredList = computed(() => {
  const list = activeTab.value === 'gi' ? giList.value : iiList.value
  return list.filter((item) => item.name.toLowerCase().includes(searchQuery.value.toLowerCase()))
})

const paginatedList = computed(() => {
  const start = (currentPage.value - 1) * itemsPerPage
  return filteredList.value.slice(start, start + itemsPerPage)
})

const totalPages = computed(() => {
  return Math.ceil(filteredList.value.length / itemsPerPage)
})

const giList = ref<FoodItem[]>([
  { name: 'Кайсия (пресен плод)', value: 30 },
  { name: 'Кайсии (консервирани в сироп)', value: 60 },
  { name: 'Авокадо', value: 10 },
  { name: 'Дюли (пресни плодове)', value: 35 },
  { name: 'Амарант (семена)', value: 35 },
  { name: 'Диня', value: 75 },
  { name: 'Ананас (консервиран в сироп)', value: 65 },
  { name: 'Ананас (пресен плод)', value: 45 },
  { name: 'Патладжан', value: 20 },
  { name: 'Десертни банани (зелени)', value: 45 },
  { name: 'Десертни банани (узрели)', value: 60 },
  { name: 'Банан от явор (суров)', value: 45 },
  { name: 'Банан от явор (само варен)', value: 70 },
  { name: 'Butternut', value: 65 },
  { name: 'Бисквити', value: 70 },
  { name: 'Бисквити (грубо брашно без захар)', value: 50 },
  { name: 'Пълнозърнест булгур (сготвено)', value: 45 },
  { name: 'Грозде (пресни плодове)', value: 45 },
  { name: 'Череши (пресни плодове)', value: 25 },
  { name: 'Глюкоза (декстроза)', value: 100 },
  { name: 'Боровинки (пресни плодове)', value: 25 },
  { name: 'Сух грах', value: 25 },
  { name: 'Зелен грах (консервиран)', value: 45 },
  { name: 'Зелен грах (пресен)', value: 35 },
  { name: 'Круша (пресен плод)', value: 30 },
  { name: 'Грах с лют червен пипер', value: 15 },
  { name: 'Пъпеш круша (pepino)', value: 40 },
  { name: 'Пъпеш (канталупа, меден пъпеш и др.)', value: 60 },
  { name: 'Къпини (пресни горски плодове)', value: 25 },
  { name: 'Желе от дюли (без захар)', value: 40 },
  { name: 'Желе от дюли (със захар)', value: 65 },
  { name: 'Зърнени кълнове', value: 15 },
  { name: 'Пълнозърнести зърнени храни (без захар)', value: 45 },
  { name: 'Натурално кисело мляко', value: 35 },
  { name: 'Sultanas', value: 65 },
  { name: 'Сладко кисело мляко', value: 52 },
  { name: 'Джинджифил', value: 15 },
  { name: 'Соево кисело мляко (ароматизирано)', value: 35 },
  { name: 'Смокини (пресни плодове)', value: 35 },
  { name: 'Соево кисело мляко (натурално)', value: 20 },
  { name: 'Сушени смокини', value: 40 },
  { name: 'Зеле от карфиол', value: 15 },
  { name: 'Тиквички', value: 15 },
  { name: 'Картофено пюре (варени, задушени)', value: 65 },
  { name: 'Какао на прах (без захар)', value: 20 },
  { name: 'Пържени, печени, пържени картофи', value: 95 },
  { name: 'Камут пълнозърнест', value: 40 },
  { name: 'Варени картофи без кожа', value: 70 },
  { name: 'Capellini (вид паста, по-тънка от спагетите)', value: 45 },
  { name: 'Сладки картофи', value: 50 },
  { name: 'Бяло зеле', value: 15 },
  { name: 'Картофено пюре', value: 80 },
  { name: 'Броколи зеле', value: 15 },
  { name: 'Картофено пюре – на прах', value: 90 },
  { name: 'Брюкселско зеле', value: 15 },
  { name: 'Картофени люспи (моментално)', value: 90 },
  { name: 'Кисело зеле', value: 15 },
  { name: 'Чипс', value: 70 },
  { name: 'Касуле', value: 35 },
  { name: 'Модифицирано нишесте', value: 100 },
  { name: 'Каша от елда', value: 40 },
  { name: 'Каши от елда', value: 40 },
  { name: 'Овесена каша от царевично брашно (mamaliga)', value: 70 },
  { name: 'Каши от твърда пшеница', value: 60 },
  { name: 'Овесена каша', value: 60 },
  { name: 'Перлени каши', value: 60 },
  { name: 'Овесена каша (натрошена)', value: 60 },
  { name: 'Ечемични зърна', value: 25 },
  { name: 'Каша от просо', value: 70 },
  { name: 'Гъбозец', value: 25 },
  { name: 'Оризова каша с мляко (със захар)', value: 75 },
  { name: 'Индийска царевица', value: 35 },
  { name: 'Кестен', value: 60 },
  { name: 'Консервирана царевица', value: 65 },
  { name: 'Киноа', value: 35 },
  { name: 'Прясна царевица', value: 35 },
  { name: 'Кетчуп', value: 55 },
  { name: 'Корнфлейкс', value: 85 },
  { name: 'Киви (пресен плод)', value: 50 },
  { name: 'Арония (пресен плод)', value: 25 },
  { name: 'Черни боровинки (пресни плодове)', value: 45 },
  { name: 'Кокос', value: 45 },
  { name: 'Gherkin (кисели краставички)', value: 15 },
  { name: 'Нишесте от царевица', value: 85 },
  { name: 'Картофено нишесте', value: 95 },
  { name: 'Макарони (мек тип)', value: 70 },
  { name: 'Оризова торта', value: 65 },
  { name: 'Френски хляб', value: 69 },
  { name: 'Лимон (пресен плод)', value: 20 },
  { name: 'Лайм (пресен плод)', value: 50 },
  { name: 'Леща', value: 35 },
  { name: 'Лупина', value: 15 },
  { name: 'Сладолед от соево мляко', value: 35 },
  { name: 'Брашно от ориз', value: 40 },
  { name: 'Макаронени изделия от твърда пшеница', value: 50 },
  { name: 'Маково семе', value: 35 },
  { name: 'Малина (пресен плод)', value: 25 },
  { name: 'Маскарпоне', value: 95 },
  { name: 'Манго (пресен плод)', value: 50 },
  { name: 'Мандарини, клементини', value: 30 },
  { name: 'Мащерка (горчица, суха)', value: 55 },
  { name: 'Маракуя', value: 30 },
  { name: 'Мляко (пълномаслено)', value: 40 },
  { name: 'Мед', value: 60 },
  { name: 'Бананово мляко', value: 30 },
  { name: 'Кокосово мляко', value: 40 },
  { name: 'Овесено мляко (сурово)', value: 30 },
  { name: 'Оризово мляко', value: 85 },
  { name: 'Соево мляко', value: 30 },
  { name: 'Мляко на прах', value: 30 },
  { name: 'Мляко (всякаква масленост)', value: 30 },
  { name: 'Нектарина (пресен плод)', value: 35 },
  { name: 'Нахут', value: 30 },
  { name: 'Консервирани зеленчуци (бобови)', value: 65 },
  { name: 'Овесени ядки (без варене)', value: 40 },
  { name: 'Нахут (консервиран)', value: 35 },
  { name: 'Кисели краставички', value: 15 },
  { name: 'Корен от овес (стръкове)', value: 30 },
  { name: 'Маслини', value: 15 },
  { name: 'Краставица (пресна зелена)', value: 15 },
  { name: 'Орехи', value: 15 },
  { name: 'Артишок', value: 15 },
  { name: 'Лещник (лешник)', value: 15 },
  { name: 'Трици (пшенични трици, овесени трици)', value: 15 },
  { name: 'Папая (пресен плод)', value: 55 },
  { name: 'Нектар', value: 15 },
  { name: 'Лимонова паста (без захар)', value: 25 },
  { name: 'Паста от сурови фурми (без захар)', value: 25 },
  { name: 'Паста от печени тиквички (без захар)', value: 35 },
  { name: 'Пълнозърнеста паста', value: 50 },
  { name: 'Макаронени изделия', value: 85 },
  { name: 'Тъмна захар (treacle)', value: 70 },
  { name: 'Сладък пипер', value: 15 },
  { name: 'Червен ориз', value: 55 },
  { name: 'Оризова паста', value: 85 },
  { name: 'Жасминов ориз', value: 60 },
  { name: 'Бял ориз', value: 70 },
  { name: 'Разтворим ориз', value: 85 },
  { name: 'Оризов пудинг', value: 85 },
  { name: 'Ориз в камера', value: 60 },
  { name: 'Пълнозърнест ориз', value: 60 },
  { name: 'Касава захар', value: 70 },
  { name: 'Фруктоза (захароза)', value: 70 },
  { name: 'Царевичен сироп', value: 65 },
  { name: 'Кленов сироп', value: 98 },
  { name: 'Оризов сироп', value: 98 },
  { name: 'Сироп от цикория', value: 55 },
  { name: 'Скорцонера (козя брада)', value: 30 },
  { name: 'Коренова целина (сготвена)', value: 85 },
  { name: 'Коренова целина (сурова)', value: 35 },
  { name: 'Сушени сливи (пресни плодове)', value: 35 },
  { name: 'Сух стафидоподобен плод', value: 40 },
  { name: 'AllBran™ (Kellogg)', value: 50 },
  { name: 'Сироп от агаве', value: 15 },
  { name: 'Царевичен сироп', value: 100 },
  { name: 'Череши кашис (пресни плодове)', value: 25 },
  { name: 'Кашис (пресни плодове)', value: 15 },
  { name: 'Соеви продукти', value: 20 },
  { name: 'Соев крем', value: 20 },
  { name: 'Соев сос (без захар)', value: 20 },
  { name: 'Сок от ананас (без захар)', value: 50 },
  { name: 'Аспержи', value: 15 },
  { name: 'Супа от боб от мааш', value: 36 },
  { name: 'Супа от горен ечемик', value: 60 },
  { name: 'Супа от горен зелен грах', value: 66 },
  { name: 'Супа от горен червен боб', value: 64 },
  { name: 'Супа от горен леща', value: 44 },
  { name: 'Сушени сливи', value: 50 },
  { name: 'Сушени плодове за мариноване', value: 74 },
  { name: 'Кръгли макарони', value: 70 },
  { name: 'Такос (мексикански царевични горчичени)', value: 70 },
  { name: 'Тапиока (само от маниока – нишесте)', value: 85 },
  { name: 'Таро', value: 54 },
  { name: 'Тахан', value: 40 },
  { name: 'Непрежарена извара', value: 30 },
  { name: 'Темпе (от ферментирала соева зърна)', value: 15 },
  { name: 'Домашен сок', value: 35 },
  { name: 'Домашен сок (без захар)', value: 35 },
  { name: 'Домашен сок (с добавена захар)', value: 45 },
  { name: 'Папая, рота (прясна)', value: 30 },
  { name: 'Тиква (различни видове)', value: 75 },
  { name: 'Тиквени семки', value: 25 },
  { name: 'Фурми', value: 55 },
  { name: 'Фасул на пара', value: 25 },
  { name: 'Фасул (бял, варен)', value: 40 },
  { name: 'Фасул от нахут', value: 35 },
  { name: 'Фасул (варен)', value: 80 },
  { name: 'Черен боб', value: 35 },
  { name: 'Боб борлотти', value: 35 },
  { name: 'Зелен фасул', value: 30 },
  { name: 'Черен боб (черен око)', value: 35 },
  { name: 'Физалис', value: 15 },
  { name: 'Ямс', value: 70 },
  { name: 'Фруктоза (от захарно цвекло)', value: 20 },
  { name: 'Хляб – на скара, от пълнозърнесто брашно без захар', value: 45 },
  { name: 'Тъмен хляб (с квас)', value: 65 },
  { name: 'Ръжен хляб (30% пълнозърнесто)', value: 65 },
  { name: 'Пълнозърнест ръжен хляб', value: 45 },
  { name: 'Оризов хляб', value: 70 },
  { name: 'Тиквен хляб', value: 40 },
  { name: 'Бял хляб за сандвичи', value: 85 },
  { name: 'Пълнозърнест хляб', value: 47 },
  { name: 'Хляб от елда', value: 50 },
  { name: 'Хляб с малц', value: 65 },
  { name: 'Хляб с квас', value: 45 },
  { name: 'Хляб с киноа (около 65% киноа)', value: 50 },
  { name: 'Хляб от грубо брашно', value: 65 },
  { name: 'Чайот (мексиканска краставица)', value: 50 },
  { name: 'Боровинки (пресни плодове)', value: 25 },
  { name: 'Сушени сини сливи', value: 40 },
  { name: 'Кейл (къдраво зеле)', value: 30 },
  { name: 'Зелена салата', value: 25 },
  { name: 'Касава семена', value: 30 },
  { name: 'Спанак', value: 15 },
  { name: 'Черен шоколад (>70% какао)', value: 25 },
  { name: 'Черен шоколад (>85% какао)', value: 20 },
  { name: 'Копър', value: 15 },
  { name: 'Кленов сироп (без захар)', value: 35 },
  { name: 'Овесен хляб', value: 60 },
  { name: 'Сладко от ябълка (без захар)', value: 35 },
  { name: 'Сушени ябълки', value: 35 },
  { name: 'Пълнозърнест ечемик', value: 45 },
  { name: 'Задушено морковено пюре', value: 35 },
])

const iiList = ref<FoodItem[]>([
  { name: 'Портокали', value: '60±3' },
  { name: 'Фъстъци', value: '20±12' },
  { name: 'Банани', value: '81±5' },
  { name: 'Печен боб', value: '120±19' },
  { name: 'Грозде', value: '82±6' },
  { name: 'Кисело мляко', value: '115±13' },
  { name: 'Картофи', value: '121±11' },
  { name: 'Чипс', value: '74±12' },
  { name: 'Корнфлейкс', value: '75±8' },
  { name: 'Бяла паста', value: '40±5' },
  { name: 'Паста от твърда пшеница', value: '40±5' },
  { name: 'Бар Mars', value: '122±15' },
  { name: 'Мед', value: '67±6' },
  { name: 'Сладолед', value: '89±13' },
  { name: 'Мюсли', value: '46±5' },
  { name: 'Овесена каша', value: '40±4' },
  { name: 'Бран', value: '32±4' },
  { name: 'Яйца', value: '31±6' },
  { name: 'Бисквити', value: '92±12' },
  { name: 'Крекери', value: '87±12' },
  { name: 'Торта', value: '82±12' },
  { name: 'Кроасани', value: '79±14' },
  { name: 'Бял хляб', value: '100±0' },
  { name: 'Зърнен хляб', value: '96±12' },
  { name: 'Мармалад', value: '160±16' },
  { name: 'Леща', value: '58±12' },
  { name: 'Чипс', value: '61±14' },
  { name: 'Ябълки', value: '59±4' },
  { name: 'Кафяв ориз', value: '62±11' },
  { name: 'Риба', value: '59±18' },
  { name: 'Сирене', value: '45±13' },
  { name: 'Бял ориз', value: '79±12' },
  { name: 'Пуканки', value: '54±9' },
  { name: 'Понички', value: '74±9' },
])

const tabButtonClass = (tab: 'gi' | 'ii') =>
  `rounded-full px-4 py-2 text-sm font-semibold transition ${
    activeTab.value === tab
      ? 'bg-emerald-600 text-white'
      : 'bg-white text-emerald-600 border border-emerald-600'
  }`
</script>

<style scoped></style>
