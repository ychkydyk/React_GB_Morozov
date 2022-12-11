import { nanoid } from 'nanoid';
import { useState} from "react";
import { Link } from "react-router-dom";

export function ChatList({onAddChat, chats}) {
    const [value, setValue] = useState('')

    const handleChange = (e) => {
        setValue(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        onAddChat({
            id: nanoid(),
            name: value
        })
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
                    </li>
                    ))}

            </ul>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={value}
                    onChange={handleChange}
                />
                <button type="submit">Create Chat</button>
            </form>
        </>
    )
}