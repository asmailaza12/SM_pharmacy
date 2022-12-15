import { createSlice } from "@reduxjs/toolkit"
const h = createSlice({
  name: "auth",
  initialState: { isLoggIn: false },
  reducers: {
    login(state) {
      state.isLoggIn = true
    },
    logout(state) {
      state.isLoggIn = false
    },
  },
})

export const authActions = h.actions
export default h
