import React  from "react";
import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name: 'cart',
    initialState: {
        'productIds': []
    },
    reducers: {
        addToCart: (state, action) => {
            state.productIds = [action.payload, ...state.productIds]
        },
        removeFromCart: (state, action) => {
            state.productIds = state.productIds.filter(productId => {
                return productId !== action.payload
            })
        }
    }
})
export default cartSlice;
