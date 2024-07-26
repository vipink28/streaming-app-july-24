import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import instance from "../../helper/axios";
import { endpoints, platformType, requests } from "../../helper/apiRequests";

const initialState = {
    upcomingMovies: {
        status: "idle",
        data: null,
        error: null
    },
    nowPlayingMovies: {
        status: "idle",
        data: null,
        error: null
    }
}

export const fetchUpcomingMovies = createAsyncThunk(
    "movie/fetchUpcomingMovies",
    async () => {
        const response = await instance.get(requests.getCollections(platformType.movie, endpoints.upcoming));
        return response.data;
    }
)

export const fetchNowPlayingMovies = createAsyncThunk(
    "movie/fetchNowPlayingMovies",
    async () => {
        const response = await instance.get(requests.getCollections(platformType.movie, endpoints.nowPlaying));
        return response.data;
    }
)

export const movieSlice = createSlice({
    name: "movie",
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUpcomingMovies.pending, (state, action) => {
                state.upcomingMovies.status = "loading";
            })
            .addCase(fetchUpcomingMovies.fulfilled, (state, action) => {
                state.upcomingMovies.status = "success";
                state.upcomingMovies.data = action.payload;
            })
            .addCase(fetchUpcomingMovies.rejected, (state, action) => {
                state.upcomingMovies.status = "failed";
                state.upcomingMovies.error = action.error;
            })
            .addCase(fetchNowPlayingMovies.pending, (state, action) => {
                state.nowPlayingMovies.status = "loading";
            })
            .addCase(fetchNowPlayingMovies.fulfilled, (state, action) => {
                state.nowPlayingMovies.status = "success";
                state.nowPlayingMovies.data = action.payload;
            })
            .addCase(fetchNowPlayingMovies.rejected, (state, action) => {
                state.nowPlayingMovies.status = "failed";
                state.nowPlayingMovies.error = action.error;
            })
    }
})

export const selectUpcomingMovies = (state) => state.movie.upcomingMovies;
export const selectNowPlayingMovies = (state) => state.movie.nowPlayingMovies;

export default movieSlice.reducer;