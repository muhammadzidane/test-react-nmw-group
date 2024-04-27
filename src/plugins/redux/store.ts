// Redux toolkit
import { configureStore } from "@reduxjs/toolkit";

// Slices
import { counterSlice } from "@/features/counter/redux/slice";

export const store = configureStore({
  reducer: {
    counter: counterSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
