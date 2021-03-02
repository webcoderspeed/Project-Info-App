  
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './components/store/reducers/rootReducer'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import fbConfig from './components/config/fbConfig'
import { getFirestore, reduxFirestore } from 'redux-firestore' 
import { getFirebase, reactReduxFirebase } from 'react-redux-firebase'



const store = createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk.withExtraArgument({
      getFirestore,
      getFirebase
    })),
    reduxFirestore(fbConfig),
    reactReduxFirebase(fbConfig, {
      attachAuthIsReady: true,
      useFirestoreForProfile:true,
      userProfile:'users'    
    })
  )
)

store.firebaseAuthIsReady.then(() => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root')); 
})
