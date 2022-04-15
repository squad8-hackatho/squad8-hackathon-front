/* eslint-disable no-param-reassign */
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { getUsers } from '../services/services';

export const fetchUser = createAsyncThunk('user', async (params: any) => {
  const { data }: any = await getUsers(
    `/profiles/findprofile?email=${params.profileEmail}`,
    params.authentication
  );
  if (data !== null) return data;
  return false;
});

const userSlice = createSlice({
  name: 'user',
  initialState: {
    authorization: '',
    request: false,
    isLogged: false,
    user: {},
  },
  reducers: {
    logout(state) {
      return {
        ...state,
        request: false,
        isLogged: false,
        authorization: '',
        user: {},
      };
    },
    setRequest(state, flag: any) {
      return { ...state, request: flag.payload };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      return {
        ...state,
        user: action.payload,
        authorization: action.meta.arg.authentication,
        isLogged: true,
        request: false,
      };
    });
  },
});

export const { logout, setRequest } = userSlice.actions;
export default userSlice.reducer;
