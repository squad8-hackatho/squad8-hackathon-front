/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../services/services';

export const fetchUser = createAsyncThunk('user', async (params: any) => {
  const { data }: any = await getUsers(`/profiles/findprofile?email=${params}`);

  if (data !== null) return data;
  return false;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    user: [{}],
    request: false,
    isLogged: false,
  },
  reducers: {
    logout(state) {
      return { ...state, isLogged: false, request: false, user: [''] };
    },
    setRequest(state, flag: any) {
      return { ...state, request: flag.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      if (action.payload) {
        state.user = action.payload;
        state.isLogged = true;
        state.request = false;
      }
    });
  },
});

export const { logout, setRequest } = userSlice.actions;
export default userSlice.reducer;
