import { applyMiddleware, combineReducers, createStore } from "redux";

import cartReducer from "./reducers/cart.reducer";
import categoryReducer from "./reducers/category.reducer";
import foodsReducer from "./reducers/food.reducer";
import thunk from "redux-thunk";

const RootReducer = combineReducers({
  category: categoryReducer,
  food: foodsReducer,
  cart: cartReducer,
});

export default createStore(RootReducer, applyMiddleware(thunk));