import { createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: {},
    isLogged: false,
  },
  reducers: {
    getUser(state, { payload }) {
      return { ...state, isLogged: true, user: payload };
    },
  },
});

export const { getUser } = userSlice.actions;

export const currentUser = (state: any) => {
  return state.user;
};

export default userSlice.reducer;
