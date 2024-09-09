import { createSlice } from "@reduxjs/toolkit";

export interface menuType {
    menuState: boolean;
}

const initialState: menuType = {
    menuState: false
}

const menuSlice = createSlice({
    name: "menuState",
    initialState,
    reducers: {
        setMenuState: state => {state.menuState = !state.menuState} 
    }
})

const {actions, reducer} = menuSlice; 

export default reducer; 

export const {
    setMenuState
} = actions;