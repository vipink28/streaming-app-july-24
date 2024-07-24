//initial value

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axios from '../../helper/axios';
import { requests } from "../../helper/apiRequests";

const initialState = {
    netflixOriginals: {
        status: "idle",
        data: null,
        error: null
    }
}

// optional - actions or async actionse
export const fetchNetflixOriginals = createAsyncThunk(
    'tv/fetchNetflixOriginals',
    async () => {
        const response = await axios.get(requests.getDataByNetwork(213));
        return response.data;
    }
);


// createSlice method

export const tvSlice = createSlice({
    initialState,
    name: "tv",
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchNetflixOriginals.pending, (state) => {
                state.netflixOriginals.status = "loading";
            })
            .addCase(fetchNetflixOriginals.fulfilled, (state, action) => {
                state.netflixOriginals.status = "success";
                state.netflixOriginals.data = action.payload;
            })
            .addCase(fetchNetflixOriginals.rejected, (state, action) => {
                state.netflixOriginals.status = "failed";
                state.netflixOriginals.error = action.error;
            })
    }
})


// actions export

// optional - selectors export

export const selectNetflixOriginals = (state) => state.tv.netflixOriginals;


// export slice
export default tvSlice.reducer;