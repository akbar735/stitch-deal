import { createSlice } from "@reduxjs/toolkit";
import { PayloadAction } from "@reduxjs/toolkit";

export interface loginState  {
    userId: string,
    userName: string,
    userRoleId: number,
    jwtToken: string
} 

const initialState: loginState = {
    userId: '1',
    userName: 'Ali',
    userRoleId: 1,
    jwtToken: "sfsdfwefqer"
}

export const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setUserDetail: (state, action: PayloadAction<loginState>) => {
            state = action.payload
        }
    }
})

export const { setUserDetail } = loginSlice.actions;

export default loginSlice.reducer
