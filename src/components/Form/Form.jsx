
import {useState} from "react";
import {Button} from "../ui/Button";

export function Form({addMessage}) {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addMessage({
            author: 'Me',
            text: text
        })
        setText('')
    }

    return (
        <>
            <h1 style={{color: 'darkgreen'}}>Form</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}/>
                <Button type="submit">SEND</Button>
            </form>
        </>
    )
}
