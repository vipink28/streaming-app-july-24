import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import instance from "../../helper/axios"
import { requests } from "../../helper/apiRequests"
import { act } from "react"

const initialState = {
    headerDetails: {
        status: "idle",
        data: null,
        error: null
    },
    videoDetails: {
        status: "idle",
        data: null,
        error: null
    },
    searchParams: {
        platform: "",
        query: ""
    }
}

export const fetchHeaderDetails = createAsyncThunk(
    'common/fetchHeaderDetails',
    async (param) => {
        const response = await instance.get(requests.getVideoDetails(param.type, param.id));
        return response.data;
    }
)

export const fetchVideoDetails = createAsyncThunk(
    'common/fetchVideoDetails',
    async (param) => {
        const response = await instance.get(requests.getVideoDetails(param.type, param.id));
        return response.data;
    }
)


export const commonSlice = createSlice({
    initialState,
    name: "common",
    reducers: {
        searchQuery: (state, action) => {
            state.searchParams = action.payload;
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchHeaderDetails.pending, (state) => {
                state.headerDetails.status = "loading";
            })
            .addCase(fetchHeaderDetails.fulfilled, (state, action) => {
                state.headerDetails.status = "success";
                state.headerDetails.data = action.payload;
            })
            .addCase(fetchHeaderDetails.rejected, (state, action) => {
                state.headerDetails.status = "failed";
                state.headerDetails.error = action.error;
            })
            .addCase(fetchVideoDetails.pending, (state) => {
                state.videoDetails.status = "loading";
            })
            .addCase(fetchVideoDetails.fulfilled, (state, action) => {
                state.videoDetails.status = "success";
                state.videoDetails.data = action.payload;
            })
            .addCase(fetchVideoDetails.rejected, (state, action) => {
                state.videoDetails.status = "failed";
                state.videoDetails.error = action.error;
            })
    }
})


export const { searchQuery } = commonSlice.actions;

export const selectSearchParams = (state) => state.common.searchParams;
export const selectHeaderDetails = (state) => state.common.headerDetails;
export const selectVideoDetails = (state) => state.common.videoDetails;


export default commonSlice.reducer;