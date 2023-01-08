import * as types from './types'
import { AUTHOR} from '../../constants'

const initialState =  {
    default: [
        {
            author: 'GreetingsBot',
            text: 'Приветствую!'
        },
        {
            author: 'GreetingsBot',
            text: 'Напиши мне!'
        },
    ]
}

export const messagesReducer =(state = initialState, action) => {

    const {type, payload} = action

    switch (type) {
        case types.ADD_CHAT:
            return {
                ...state,
               [payload] : []
            }
        case types.DELETE_CHAT:
            const chats = {...state}
            delete chats[payload]
            return chats
        case types.ADD_MESSAGE:
            return {
                ...state,
                [payload.chatName]: [
                    ...state[payload.chatName],
                    {
                        author: AUTHOR.user,
                        text: payload.text
                    }
                ],
            }
        default:
            return state
    }
}