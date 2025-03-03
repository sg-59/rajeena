import {createSlice} from '@reduxjs/toolkit'

const user=createSlice({name:"userInfo",
    initialState:{
        userData:null
    },
    reducers:{
        display:(state,action)=>{
            console.log("action values in redux",action);
            
state.userData=action.payload
        }
    }
})

export const {display} =user.actions
export default user.reducer 