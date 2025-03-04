import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({name:"userInfo",
    initialState:{
        userData:null,
        okData:null
    },
    reducers:{
        display:(state,action)=>{
            console.log("action values in redux",action);
            
state.userData=action.payload
        },
        haiOk:(state,action)=>{
            state.okData=action.payload
        }
    }
})

export const {display,haiOk} =user.actions
export default user.reducer 