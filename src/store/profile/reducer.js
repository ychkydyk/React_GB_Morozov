const initialState = {
    name: 'Biba'
}

export const profileReducer =(state = initialState, action) => {
    const {type, payload} = action
    switch (type) {
        case 'Change_Name':
            return {
                ...state,
                name: payload
            }
            default:
            return state
    }
}