/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../services/services';

export const fetchUser = createAsyncThunk('user', async (params: any) => {
  const { data }: any = await getUsers(`/profiles/findprofile?email=${params}`);

  console.log('noo', data);
  if (data !== null) return data;
  return false;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [{}],
    isLogged: false,
  },
  reducers: {
    logout(state) {
      return { ...state, isLogged: false, user: [''] };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isLogged = true;
      }
    });
  },
});

export const { logout } = userSlice.actions;
export default userSlice.reducer;
