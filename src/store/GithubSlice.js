import { createSlice } from '@reduxjs/toolkit'



export const GithubSlice = createSlice({
  name: 'github',
  initialState: {
    repos: [],
    isSearched: false,
    error: {message: undefined, isError: false},
    currentLogin: undefined
  },
  reducers: {
    setRepos: (state, action) => {
      state.repos = action.payload.value;
    },
    setError: (state, action) => {
        state.error = action.payload;
    },
    setIsSearched: (state, action) => {
        state.isSearched = action.payload.value;
    },
    setCurrentLogin: (state, action) => {
        state.currentLogin = action.payload.value;
    },
  }
})

export const { setRepos, setError, setIsSearched, setCurrentLogin } = GithubSlice.actions

export default GithubSlice.reducer
