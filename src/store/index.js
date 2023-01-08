import {createStore, compose, combineReducers} from 'redux' // compose для подключения devtools
import { profileReducer } from './profile/reducer'
import {messagesReducer} from "./messages/reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //  для подключения devtools

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
}) // метод, который собирает воедино все редюсеры. Принимает в себя объект который
// , где мы описыввет тот срез state, за который будет отвечать определенный reducer


export const store = createStore(rootReducer, composeEnhancers()) // composeEnhancers для подключения devtools
//через createStore мы создаем store, в который передаем наши reducer'ы