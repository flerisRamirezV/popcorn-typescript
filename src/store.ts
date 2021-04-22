import { createStore, applyMiddleware, } from 'redux';

import rootReducer from './content/redux/reducers/index';
import {save, load} from 'redux-localstorage-simple';
import { composeWithDevTools } from 'redux-devtools-extension/developmentOnly';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './content/redux/redux-saga/rootSaga';

const sagaMiddleware = createSagaMiddleware();
const initialData= save(
    {
      states:["movieReducer"
     ]
    }    
  );
  
  
  const createStoreWithMiddleware 
  = 
  composeWithDevTools(applyMiddleware(sagaMiddleware,initialData),)
      
  (createStore)
  
  
    const store = createStoreWithMiddleware(
      rootReducer,    
       load({
            states:["movieReducer"
           ]     
       }) 
   )  
   sagaMiddleware.run(rootSaga)
  export default store;