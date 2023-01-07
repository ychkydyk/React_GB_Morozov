//actions это константы, описывающие событие. обычно это просто строка.
//описывем функцию, принимающую payload и возвразающую
import * as types from './types'

export const changeName = (data) => ({ // data это payload(можно любое абстрактное имя)
        type: types.Change_Name ,
        payload: data
    }
)