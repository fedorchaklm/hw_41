import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { Album, Photo } from "../types";

type AlbumsState = {
    albums: Array<Album>;
    photos: Array<Photo>;
}

const initialState: AlbumsState = {
    albums: [],
    photos: [],
}

export const getAlbums = createAsyncThunk<Array<Album>>('albums/fetch', async () => fetch("https://jsonplaceholder.typicode.com/albums")
    .then((response) => response.json()));

export const getPhotos = createAsyncThunk<Array<Photo>, number>('album/:id/photos', async (id) => fetch(`https://jsonplaceholder.typicode.com/albums/${id}/photos`)
    .then((response) => response.json()));

const albumsSlice = createSlice({
    name: 'albums',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(getAlbums.fulfilled, (state, action) => {
                state.albums = action.payload;
            }).addCase(getPhotos.fulfilled, (state, action) => {
                state.photos = action.payload;
            })
    }
});

export default albumsSlice;