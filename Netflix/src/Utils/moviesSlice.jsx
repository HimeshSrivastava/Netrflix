import {createSlice} from '@reduxjs/toolkit';

const moviesSlice = createSlice({
 name:"movies",
 initialState:{
  nowPlayingMovies :null,
  Trailer:null,
},
reducers:{
    addNowPlayingMovies : (state,action)=>{
        state.nowPlayingMovies = action.payload;
    },
    addTrailer : (state,action)=>{
        state.Trailer = action.payload;
    }
}
})

export const {addNowPlayingMovies,addTrailer}=moviesSlice.actions;

export default moviesSlice.reducer
