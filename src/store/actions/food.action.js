import { foodsTypes } from "../types/food.types";

const { SELECT_FOOD, FILTERED_FOODS } = foodsTypes;

export const selectFood = (id) => ({
  type: SELECT_FOOD,
  foodId: id,
});

export const filteredFoods = (id) => ({
  type: FILTERED_FOODS,
  categoryId: id,
});