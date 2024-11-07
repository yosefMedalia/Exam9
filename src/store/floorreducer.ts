import { createSlice } from '@reduxjs/toolkit';

// הגדרת ממשק המייצג את מצב הקומות
interface FloorState {
  floorAccess: boolean[]; // מערך בוליאני שמייצג גישה לכל קומה
}

// מצב התחלתי שבו אין גישה לכל הקומות (הכולן מוגדרות כ-false)
const initialState: FloorState = {
  floorAccess: [false, false, false, false, false],
};

// יצירת Slice לניהול הגישה לקומות
const floorSlice = createSlice({
  name: 'floorAccess', 
  initialState,
  reducers: {
    // פונקציה לשינוי מצב הגישה לקומה מסוימת
    changeAccess: (state, action) => {
      const index = action.payload;
      if (index >= 0 && index < state.floorAccess.length) {
        state.floorAccess[index] = !state.floorAccess[index];
      }
    },
  },
});

export const { changeAccess } = floorSlice.actions;
export default floorSlice.reducer;
