import { createSlice } from '@reduxjs/toolkit'

const initialState = [
  { nom: 'Nkengne', prenom: 'Armelle', message: 'satisfaite' },
  { nom: 'Nkengne', prenom: 'Armelle', message: 'dynamique et travailleuse' }
]

const postsSlice = createSlice({
  name: 'reviews',
  initialState,
  reducers: {
    postAdded(state, action) {
      state.push(action.payload)
    }
  }
})


export const { postAdded } = postsSlice.actions

export default postsSlice.reducer