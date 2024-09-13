import { createSlice } from "@reduxjs/toolkit";

export interface testPageType {
    testPageActive: boolean;
}

const initialState: testPageType = {
    testPageActive: false
}

const testPageSlice = createSlice({
    name: "testPageState",
    initialState,
    reducers: {
        setTestPageActive: state => {state.testPageActive = true},
        setTestPageNotActive: state => {state.testPageActive = false}
    }
})

const {actions, reducer} = testPageSlice; 

export default reducer; 

export const {
    setTestPageActive, 
    setTestPageNotActive
} = actions;