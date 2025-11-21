import { createSlice  } from '@reduxjs/toolkit'

interface AuthState {
  value: number
}

const initialState: AuthState = { value: 0 }

export const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state) => { state.value += 1 },
  }
})

export const { login } = authSlice.actions
export default authSlice.reducer
