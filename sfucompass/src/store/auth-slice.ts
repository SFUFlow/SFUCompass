import { createSlice } from "@reduxjs/toolkit";

const authSlice = createSlice({
  name: "auth",
  initialState: { isloggedIn: false, token: "" },
  reducers: {
    logIn(state) {
      state.isloggedIn = true;
    },

    logOut(state) {
      state.isloggedIn = false;
    },

    setToken(state: any, action: any){
        state.token = action.payload
    }
  },
});

export const authActions = authSlice.actions;

export default authSlice.reducer;