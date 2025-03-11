// import {configureStore} from '@reduxjs/toolkit'
// import userslicepage from './userSlice'

// export default configureStore({reducer:{userInfo:userslicepage}})

import { configureStore,combineReducers } from '@reduxjs/toolkit'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import loginslicePage from './loginSlice'
import userslice from './userSlice'


const persistConfig = {
  key: 'rajeenasProject',
  version: 1,
  storage,
}

const rootReducer=combineReducers({userInfo:userslice,loginDatas:loginslicePage})

const persistedReducer = persistReducer(persistConfig,rootReducer)

export const store = configureStore({ 
  reducer:persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }),
})

export let persistor = persistStore(store)
