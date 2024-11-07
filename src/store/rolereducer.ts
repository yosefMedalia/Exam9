import { createSlice } from '@reduxjs/toolkit';
import roles from '../data/roles.json';

interface RoleState {
  currentRole: string;
}

const initialState: RoleState = {
  currentRole: roles[0],
};

const roleSlice = createSlice({
  name: 'role', 
  initialState,
  reducers: {
    // פונקציה לשינוי תפקיד
    setRole: (state, action) => {
      const newRole = action.payload;
      if (roles.includes(newRole)) {
        state.currentRole = newRole;
      }
    },
  },
});

export const { setRole } = roleSlice.actions;
export default roleSlice.reducer;
