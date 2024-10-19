import {createSlice} from "@reduxjs/toolkit";


const initialState = {
    data: [
        { id: 1, name: "Test-data 1"},
        { id: 2, name: "Test-data 2"},
        { id: 3, name: "Test-data 3"},
    ],
    loading: false,
    error: null
};

const dataSlice = createSlice({
    name: 'data',
    initialState,
    reducers: {
        addData: (state, action) => {
            state.loading= true;
        },
        addDataResult: (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        addDataFailure: (state, action) => {
            state.loading = false;
            state.error = action.payload;
        },
        getData : (state, action) => {
            state.loading = true;
        },
        getDataResult : (state, action) => {
            state.data = action.payload;
            state.loading = false;
            state.error = null;
        },
        getDataFailure : (state, action) => {
            state.loading = false;
            state.error = action.payload;
        }
    }
});

export const { addData, addDataFailure, addDataResult, getData, getDataFailure, getDataResult } = dataSlice.actions;

export default dataSlice.reducer;
