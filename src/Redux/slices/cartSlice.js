

import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    cartItems: [],
    totalAmount: 0,
    totalQuantity: 0,
}

const cartSlice = createSlice({
    name: "cart",
    initialState,
    reducers: {
        addItem: (state, { type, payload }) => {
            const newItem = payload;
            const existingItem = state.cartItems.find((item) => item.id === newItem.id);
            state.totalQuantity++;

            if (!existingItem) {
                state.cartItems.push({
                    id: newItem.id,
                    productName: newItem.productName,
                    imgUrl: newItem.imgUrl,
                    price: newItem.price,
                    quantity: 1,
                    totaPrice: newItem.price
                })
            }

            else {
                existingItem.quantity++;
                existingItem.totaPrice = Number(existingItem.totaPrice) + Number(newItem.price);
            }

            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0);
        },
        deleteItem: (state, { type, payload }) => {
            const id = payload;
            const existingItems = state.cartItems.find(item => item.id === id);
    
            if (existingItems) {
                state.cartItems = state.cartItems.filter(item => item.id !== id);
                state.totalQuantity = state.totalQuantity - existingItems.quantity;
            }
            state.totalAmount = state.cartItems.reduce((total, item) => total + Number(item.price) * Number(item.quantity),0);
        }
    },


});

export const cartActions = cartSlice.actions

export default cartSlice.reducer