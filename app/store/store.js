import { configureStore } from '@reduxjs/toolkit';
import mapToggleReducer from './mapToggleSlice';

const store = configureStore({
  reducer: {
    mapToggle: mapToggleReducer,
    // other reducers...
  },
});

export default store;
