import * as types from './types'

// initialState это глобальное, начальное состояние нашего store, можно вынести в отдельный файл
const initialState = {
    name: 'DefaultUser'
}
    // reducer - чистая функция, отвечающая за состояние state в зависимости от action'a
export const profileReducer =(state = initialState, action) => {
    const {type, payload} = action   // деструктуризация
    switch (type) {                 // action это объект {type: 'action1', value:'здесь значение поля формы'}
        case types.Change_Name:
            return {
                ...state, // предыдущее состояние state
                name: payload
            }
        default:
            return state // если не один из тпйпов не подхрдит, то по дэфолту должен всегда возвразать state,
    }
}