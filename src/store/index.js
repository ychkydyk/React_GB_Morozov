import {createStore, compose, combineReducers, applyMiddleware} from 'redux' // compose для подключения devtools
import { profileReducer } from './profile/reducer'
import {messagesReducer} from "./messages/reducer";
import thunk from "redux-thunk";
import storage from 'redux-persist/lib/storage' // defaults to localStorage for web
import { persistStore, persistReducer } from 'redux-persist'
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['profile']
}



const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;  //  для подключения devtools

const rootReducer = combineReducers({
    profile: profileReducer,
    messages: messagesReducer
}) // метод, который собирает воедино все редюсеры. Принимает в себя объект который
// , где мы описыввет тот срез state, за который будет отвечать определенный reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = createStore(persistedReducer, composeEnhancers(applyMiddleware(thunk))) // composeEnhancers для подключения devtools
//через createStore мы создаем store, в который передаем наши reducer'ы
export const persistor = persistStore(store)