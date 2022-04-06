import { configureStore } from '@reduxjs/toolkit';
import countReducer from '../features/count/CountSlider';
import productReducer from '../features/product/ProductSider';
export const store = configureStore({
  reducer: {
    count: countReducer,
    product: productReducer
  },
});
