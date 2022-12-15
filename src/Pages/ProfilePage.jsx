import {useSelector, useDispatch } from "react-redux"; //selector чтобы получить данные из store
import {useState} from "react";
import * as types from '../store/profile/types'



export function ProfilePage() {
    const name = useSelector((store) => store.name )
    const [value, setValue] = useState('')
    const dispatch = useDispatch() // чтобы обновиить store нужно вызвать метод dispatch,он вызывается у объекта store, из index.js
    const handleChange = () => {
        dispatch({type: types.Change_Name, payload: value})
        setValue('')
    }

    return (
        <>
            <h1>Profile Page</h1>
            <h2>{name}</h2>
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
            />
            <button onClick={handleChange}>Change User</button>
        </>
    )
}