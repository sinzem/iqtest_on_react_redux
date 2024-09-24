import { createSlice } from "@reduxjs/toolkit";

export interface menuType {
    menuState: boolean;
    toInform: boolean;
}

const initialState: menuType = {
    menuState: false,
    toInform: false
}

const menuSlice = createSlice({
    name: "menuState",
    initialState,
    reducers: {
        setMenuState: state => {state.menuState = !state.menuState},
        setToInform: state => {state.toInform = true},
        unsetToInform: state => {state.toInform = false} 
    }
})

const {actions, reducer} = menuSlice; 

export default reducer; 

export const {
    setMenuState,
    setToInform,
    unsetToInform
} = actions;