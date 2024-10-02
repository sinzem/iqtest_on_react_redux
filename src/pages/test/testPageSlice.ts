import { createSlice } from "@reduxjs/toolkit";

export interface TextQuestionType {
    id: string;
    name: string;
    type: string;
    title: string;
    subtitle?: string;
    img?: string;
    options: (string | string[])[];
}
export interface TestPageType {
    testPageActive: boolean;
    testLength: number;
    testQuestion: {};
}

const initialState: TestPageType = {
    testPageActive: false,
    testLength: 0,
    testQuestion: {},
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