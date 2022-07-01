import { foods } from '../../data/foods';
import { foodsTypes } from '../types/food.types';

const { SELECT_FOOD, FILTERED_FOODS } = foodsTypes;

const initialState = {
  foods,
  filteredFoods: [],
  selected: null
}

const foodsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SELECT_FOOD:
      return {
        ...state,
        selected: state.foods.find(
          (food) => food.id === action.foodId
        ),
      };
    case FILTERED_FOODS:
      return {
        ...state,
        filteredFoods: state.foods.filter(
          (food) => food.categoryId === action.categoryId
        ),
      };
      default:
        return state
  }
};

export default foodsReducer;