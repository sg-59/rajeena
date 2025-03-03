import {configureStore} from '@reduxjs/toolkit'
import userslicepage from './userSlice'

export default configureStore({reducer:{userInfo:userslicepage}})