import {createSlice} from '@reduxjs/toolkit'

const loginslices=createSlice({
    name:"loginDatas",
    initialState:{
        loginInfo:null
    },
    reducers:{
        storeloginInfo:(state,action)=>{
            state.loginInfo=action.payload
        },
        removedatas:(state,action)=>{
            state.loginInfo=null
        }
    }
})

export const {storeloginInfo,removedatas} =loginslices.actions

export default loginslices.reducer