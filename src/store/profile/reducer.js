import * as types from './types'

const initialState = {
    name: 'DefaultUser'
}

export const profileReducer =(state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case types.Change_Name:
            return {
                ...state,
                name: payload
            }
            default:
            return state
    }
}