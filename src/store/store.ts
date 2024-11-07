import { configureStore } from '@reduxjs/toolkit';
import floorReducer from './floorreducer';
import roleReducer from './rolereducer';

const store = configureStore({
  reducer: {
    floor: floorReducer,
    role: roleReducer,
  },
});

export default store;
