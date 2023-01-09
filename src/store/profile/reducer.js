import * as types from './types'
//в этом файле описывает редюсеры, отвечающие за отрисовку состояния. в зависимости от action'a - изменяющие наш Store
// initialState это глобальное, начальное состояние нашего store, можно вынести в отдельный файл
const initialState = {
    name: 'DefaultUser',
    visible: true,
    isAuth: false
}
    // reducer - чистая функция, отвечающая за состояние state в зависимости от action'a
export const profileReducer =(state = initialState, action) => {

    const {type, payload} = action// деструктуризация

    switch (type) {                 // action это объект {type: 'action1', value:'здесь значение поля формы'  часто вместо него payload}
        case types.Change_Name:
            return {
                ...state,
                name: payload
            }
            case types.TOGGLE_PROFILE:
                    return {
                        ...state,
                        visible: !state.visible
                    }
        case types.IS_AUTH:
            return {
                ...state,
                isAuth: payload
            }
        default:
            return state // если не один из тайпов не подходит, то по дэфолту должен всегда возвращать state,
    }
}