import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import Home from "../views/Home.vue";
import ForMe from "../views/ForMe.vue";
import Principles from "../views/Principles.vue";
import FoodGuide from "../views/FoodGuide.vue";
import CalorieCounter from "../views/CalorieCounter.vue";

import GlucoseGoddess from "../views/principles/GlucoseGoddess.vue";
import IntermittentFasting from "../views/principles/IntermittentFasting.vue";
import Workout from "../views/principles/Workout.vue";

import Proteins from "../views/foods/Proteins.vue";
import Fats from "../views/foods/Fats.vue";
import Carbs from "../views/foods/Carbs.vue";
import Fibers from "../views/foods/Fibers.vue";
import GlycemicIndexFoods from "../views/foods/GlycemicIndexFoods.vue";
import Nutrition from "../views/foods/Nutrition.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/home",
    name: "Home",
    component: Home,
  },
  {
    path: "/me",
    name: "Me",
    component: ForMe,
  },
  {
    path: "/principles",
    name: "Principles",
    component: Principles,
  },
  {
    path: "/foodGuide",
    name: "FoodGuide",
    component: FoodGuide,
  },
  {
    path: "/calorieCounter",
    name: "CalorieCounter",
    component: CalorieCounter,
  },
  {
    path: "/glucose-goddess",
    name: "GlucoseGoddess",
    component: GlucoseGoddess,
  },
  {
    path: "/intermittent-fasting",
    name: "IntermittentFasting",
    component: IntermittentFasting,
  },
  {
    path: "/workout",
    name: "Workout",
    component: Workout,
  },
  {
    path: "/proteins",
    name: "Proteins",
    component: Proteins,
  },
  {
    path: "/fats",
    name: "Fats",
    component: Fats,
  },
  {
    path: "/carbs",
    name: "Carbs",
    component: Carbs,
  },
  {
    path: "/fibers",
    name: "fibers",
    component: Fibers,
  },
  {
    path: "/glycemic-index-foods",
    name: "GlycemicIndexFoods",
    component: GlycemicIndexFoods,
  },
  {
    path: "/nutrition",
    name: "Nutrition",
    component: Nutrition,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
