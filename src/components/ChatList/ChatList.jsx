
import { useState} from "react";
import { Link } from "react-router-dom";
import UIButton from "@mui/material/Button";
import {useDispatch, useSelector} from "react-redux";
import {addChat, deleteChat} from '../../store/messages/actions'
import {selectChat} from "../../store/messages/selectors";

export function ChatList({onAddChat}) {
    const [value, setValue] = useState('')
    const dispatch = useDispatch()
    const chats = useSelector(selectChat, (prev, next) => prev.length === next.length)

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(addChat(value))
    }

    return (
        <>
            <h1>Chat List</h1>
            <ul>
                {chats.map((chat)=> (
                    <li key={chat.id}>
                        <Link to={`/chats/${chat.name}`}>
                            {chat.name}
                        </Link>
                        <button onClick={()=>dispatch(deleteChat(chat.name))}>x</button>
                    </li>
                    ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                />
                <UIButton  type="submit"
                           variant="contained"
                           color="success"
                           size="small"
                >Create Chat
                </UIButton>
            </form>
        </>
    )
}