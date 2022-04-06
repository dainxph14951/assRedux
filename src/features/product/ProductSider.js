import { createSlice } from '@reduxjs/toolkit';

const productSlice = createSlice({
    name: "Product",
    initialState: {
        value: [
            {
                id: 1, name: "product A"
            },
            {
                id: 2, name: "product B"
            }
        ]
    },
    reducers: { // hàng động
        addProduct(state, action) { //action-> put action.paylod vào trong state
            state.value.push(action.payload)
        }
    }
});
export const { addProduct } = productSlice.actions;
export default productSlice.reducer;

