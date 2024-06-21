import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './moviesSlice'

const AppStore = configureStore({
    reducer:{
        movies:moviesReducer,
    },
});

export default AppStore
