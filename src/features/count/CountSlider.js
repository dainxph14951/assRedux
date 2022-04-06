import {createSlice} from '@reduxjs/toolkit';

const countSlider = createSlice({
        name: "count",
        initialState: {
            value: 10
        },
        reducers: {
            increment(state){
                state.value +=1
            },
            decrease(state){
                state.value -=1
            }
        }
});
export const {increment, decrease} = countSlider.actions;
export default countSlider.reducer;