import { createSlice } from '@reduxjs/toolkit'



export const FactorialSlice = createSlice({
  name: 'factorial',
  initialState: {
    numbers: [],
    isNumbers: false
  },
  reducers: {
    addNumber: (state, action) => {
        const updatedNumber = [action.payload, ...state.numbers];
        state.numbers = updatedNumber;
    },
    setIsNumbers: (state, action) => {
      state.isNumbers = action.payload.value;
    }
  }
})

export const { addNumber, setIsNumbers } = FactorialSlice.actions

export default FactorialSlice.reducer
