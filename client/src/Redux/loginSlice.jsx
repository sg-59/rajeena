import {createSlice} from '@reduxjs/toolkit'

const loginslices=createSlice({
    name:"loginInfos",
    initialState:{
        loginInfo:null
    },
    reducers:{
        storeloginInfo:(state,action)=>{
            state.loginInfo=action.payload
        }
    }
})

export const {storeloginInfo} =loginslices.actions

export default loginslices.reducer