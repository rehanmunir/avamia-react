import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import * as userApi from 'api/user';

export const registration = createAsyncThunk('user/registration',
    async (data, { rejectWithValue }) => {
        try{
            const response = await userApi.createRegistration(data);
            return { data: response.data };
        }
        catch(e){
            return rejectWithValue({ data: e.response.data});
        }
    }
);

export const login = createAsyncThunk('user/login',
    async (data, { rejectWithValue }) => {
        try{
            const response = await userApi.login(data);
            return { data: response.data };
        }
        catch(e){
            return rejectWithValue({ data: e.response.data});
        }
    }
);

export const signout = createAsyncThunk('user/signout',
    async () => {
        try{
            const response = await userApi.signout();
            return { data: response.data };
        }
        catch(e){
            console.log("logout", e)
        }
    }
);

const initialState = {
    user: {},
    loading: false,
    error: null,
};

  const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: {
        [login.fulfilled]: (state, {payload}) => {
            localStorage.setItem('userInfo', JSON.stringify(payload.data.user));
            localStorage.setItem('authToken', JSON.stringify(payload.data.user.api_token));
        },
    },
  })

  export default userSlice.reducer;