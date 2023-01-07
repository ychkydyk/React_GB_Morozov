import { createStore, compose } from 'redux' // compose для подключения devtools
import { profileReducer } from './profile/reducer'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //  для подключения devtools

export const store = createStore(profileReducer, composeEnhancers()) // composeEnhancers для подключения devtools
//через createStore мы создаем store, в который передаем наши reducer'ы