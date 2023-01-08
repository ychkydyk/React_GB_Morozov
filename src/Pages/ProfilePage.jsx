import {useSelector, useDispatch } from "react-redux"; //selector чтобы получить данные из store; dispatch - чтобы запустить reduser
import {useState} from "react";
import {changeName, toggleProfile} from '../store/profile/actions'
import {selectName, selectVisible} from "../store/profile/selectors";



export function ProfilePage() {
    const name = useSelector(selectName) // вытаскиваем хуком определенное состояние из Store(в данном случае имя)
    const visible = useSelector(selectVisible)
    const [value, setValue] = useState('') // state inputa

    const dispatch = useDispatch() // чтобы обновиить/изменить store нужно вызвать метод dispatchи передать в него action
    // он вызывается у объекта store из ./store/index.js

    const handleChange = () => {
        // dispatch({type: types.Change_Name, payload: value}) // передаем action
        dispatch(changeName(value)) // в диспатч передаем action из store, а в него наш value
        setValue('') // обнуляем значение
    }

    return (
        <>
            <h1>Profile Page</h1>
            <h2>{name}</h2>
            <input type="checkbox" checked={visible} readOnly/>
            <button onClick={() => dispatch(toggleProfile())}>Change visible</button>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleChange}>Change User</button>
        </>
    )
}