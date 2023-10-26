import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { Products } from '../interface/Product'
import { getProduct } from '../config'

export interface ListState {
    value: Products[]
}

const initialState: ListState = {
    value: []
}

const apiProductSlice = createSlice({
    name: 'products',
    initialState,
    reducers: {

    },
    extraReducers(builder) {
        builder.addCase(getProductAsycn.fulfilled, (state, action) => {
            state.value = action.payload
        })
    },
})

export default apiProductSlice.reducer

export const getProductAsycn = createAsyncThunk('product/get', async () => {
    const data = await getProduct()
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