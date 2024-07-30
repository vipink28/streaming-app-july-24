import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios"
import { requests } from "../../helper/apiRequests"

const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    'common/fetchHeaderDetails',
    async (param) => {
        const response = await instance.get(requests.getVideoDetails(param.type, param.id));
        return response.data;
    }
)


export const commonSlice = createSlice({
    initialState,
    name: "common",
    reducers: {},
    extraReducers: (builder) => { }
})

export default commonSlice.reducer;