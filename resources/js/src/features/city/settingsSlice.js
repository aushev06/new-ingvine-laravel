import {createSlice} from '@reduxjs/toolkit'


const initialState = {
    activeCategory: '',
}

export const settingsSlice = createSlice({
    name: 'settings',
    initialState,
    reducers: {
        setActiveCategory: (state, action) => {
            state.activeCategory = action.payload;
        },

    },
})


export const {setActiveCategory} = settingsSlice.actions

export const selectActiveCategory = state => state.settings.activeCategory;

export default settingsSlice.reducer
