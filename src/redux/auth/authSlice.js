// import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
// import { createUser, login, } from "./authApi";

// export const createUserThunk = createAsyncThunk('create_user', async (form) => {
//   const { data } = await createUser(form);
//   return true;
// });

// export const loginThunk = createAsyncThunk('login', async (form) => {
//     const { data } = await login(form);
//     return data;
// });

// const initialState = {
//   isLoginLoading: false,
//   token: null,
// };

// const authSlice = createSlice({
//     name: 'auth',
//     initialState,
//     reducers: {},

//     extraReducers: builder => {
//     builder
//       .addCase(loginThunk.pending, (state) => {
//         state.isLoginLoading = true;
//       })
//       .addCase(loginThunk.fulfilled, (state, { payload }) => {
//         state.token = payload.token;
//         state.isLoginLoading = false;  
//         state.error = null;
//       })
//       .addCase(loginThunk.rejected, (state, { payload }) => {
//         state.isLoginLoading = false;
//       })
//     }
// });
// export default authSlice.reducer;