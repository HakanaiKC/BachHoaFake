import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getCart } from '../config'
import { Cart } from '../interface/Cart'

export interface ListState {
    value: Cart[]
}

const initialState: ListState = {
    value: []
}

const apiCartSlice = createSlice({
    name: 'carts',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getCartAsycn.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
})

export default apiCartSlice.reducer

export const getCartAsycn = createAsyncThunk('cart/get', async () => {
    const data = await getCart()
    if (data.status === 200) {
        return data.data
    }
})

// export function getProductAsycn() {
//     return async function getProductThunk(dispatch, getState) {
//         const data = await getProduct()
//         if (data.status === 200) {
//             dispatch(fetchData(data.data))
//         }
//     }
// }