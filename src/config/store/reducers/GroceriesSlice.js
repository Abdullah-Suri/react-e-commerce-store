import { createSlice } from "@reduxjs/toolkit";


export const cartSlice = createSlice({
    name: 'groceries',
    initialState: {
        cart: []
    },
    reducers: {
        addGroceriesItem: (state, action) => {
            const index = state.cart.findIndex(item=> item.id == action.payload.id)
            if(index === -1){
                action.payload.quantity = 1;
                state.cart.push(action.payload)
            }
            else{
                state.cart[index].quantity += 1;
            }
        },
        
    }
})

export const {addGroceriesItem} = cartSlice.actions
export default cartSlice.reducer