import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { useHttp } from "../../hooks/http.hook";

// export interface TextQuestionType {
//     id: string;
//     name: string;
//     type: string;
//     title: string;
//     subtitle?: string;
//     img?: string;
//     options: (string | string[])[];
// }
export interface TestPageType {
    testPageActive: boolean;
    testLoadingState: string;
    testLength: number;
    testQuestionID: number;
    testQuestionObject: {};
}

const initialState: TestPageType = {
    testPageActive: false,
    testLoadingState: "idle",
    testLength: 0,
    testQuestionID: 1,
    testQuestionObject: {},
}

export const fetchTest: any = createAsyncThunk(
    'testPageState/fetchTest', 
    async () => { 
        const {request} = useHttp();
        const testArray = await request("http://localhost:3001/testIQ");
        return testArray.length;
    }
);

export const fetchTestQuestion: any = createAsyncThunk(
    'testPageState/fetchTestQuestion', 
    async (id) => { 
        const {request} = useHttp();
        return await request(`http://localhost:3001/testIQ/${id}`);
    }
);

const testPageSlice = createSlice({
    name: "testPageState",
    initialState,
    reducers: {
        setTestPageActive: state => {state.testPageActive = true},
        setTestPageNotActive: state => {state.testPageActive = false}
    },
    extraReducers: (builder) => { 
        builder
            // .addCase(fetchTest.pending, state => {state.testLoadingState = "loading"})
            .addCase(fetchTest.fulfilled, (state, action) => {
                        // state.testLoadingState = "idle";
                        state.testLength = action.payload;
                    })
            .addCase(fetchTest.rejected, state => {
                        state.testLoadingState = "error";
                    })  
            .addCase(fetchTestQuestion.pending, state => {state.testLoadingState = "loading"})
            .addCase(fetchTestQuestion.fulfilled, (state, action) => {
                        state.testLoadingState = "idle";
                        state.testQuestionObject = action.payload;
                    })
            .addCase(fetchTestQuestion.rejected, state => {
                        state.testLoadingState = "error";
                    }) 
            .addDefaultCase(() => {}) 
    }
})

const {actions, reducer} = testPageSlice; 

export default reducer; 

export const {
    setTestPageActive, 
    setTestPageNotActive
} = actions;