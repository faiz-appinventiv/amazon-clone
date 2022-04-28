import React from 'react'
import RootRouter from './src/modules/router'
import { PersistGate } from 'redux-persist/integration/react'
import { persistor, store } from './src/modules/store/index'
import { Provider } from 'react-redux'



export default function App() {
  return (
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <RootRouter />
      </PersistGate>
    </Provider>
    )
}