<template>
  <div class="min-h-screen bg-gradient-to-br from-emerald-50 to-green-100 px-6 py-10 text-gray-800">
    <div class="mx-auto max-w-3xl">
      <h1 class="animate-fade-in mb-6 text-center text-4xl font-bold text-emerald-700">
        🧘‍♀️ Повече за мен – Боряна
      </h1>

      <div class="prose prose-lg max-w-none leading-relaxed text-gray-800">
        <p><strong>Здравей!</strong> Казвам се Боряна и съм жената зад Teres Fit.</p>
        <br />

        <p>
          Доскоро водех заседнал начин на живот. Работата ми е на бюро, случи се ковид, а малко след
          това се преместих да живея на село. От хубав живот качих някое друго килограмче – и
          започна да ми тежи.
        </p>

        <p>
          Дрехите започнаха да ми стягат. Нищо не ми стоеше добре. Нямах сили за нищо, а и желание.
          Дори да играя с племенниците ми беше трудно. Мислите ми често се въртяха около храна.
        </p>

        <p>
          През септември 2024 година, благодарение на
          <a
            href="https://www.mobilily.com/"
            class="text-green-700 underline hover:text-green-900"
            target="_blank"
            >Лили Камбурова</a
          >, се записах на групови тренировки. Те ми дадоха енергия и ново усещане за тялото ми.
        </p>

        <p>
          Но въпреки движението, започнах леко да напълнявам. Защо, след като тренирам?
          <br />
          Отговорът се оказа прост:
          <span class="rounded bg-yellow-100 px-1 font-semibold">
            Хранех се още повече – без осъзнатост и с грешни представи за нуждите на тялото ми.
          </span>
        </p>

        <p>
          След оплаквания насам-натам, като една истинска дама, друго страхотно момиче – Еми
          Белеганска – ме открехна към света на <strong>глюкозната революция</strong> и
          <strong>периодичното гладуване</strong>.
        </p>

        <p class="font-semibold text-emerald-700">
          И така... интересното започна, с него и разучаването на собственото ми тяло.
        </p>

        <p>
          В <span class="font-bold text-emerald-600">Teres Fit</span> ще намериш съвети, идеи,
          принципи, калкулатор на калории и вдъхновение.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// няма логика за сега
</script>

<style scoped>
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.animate-fade-in {
  animation: fade-in 0.6s ease-out;
}
</style>
