import {useState} from "react";
import UIButton from '@mui/material/Button';
import { AUTHOR } from '../../constants'

export function Form({addMessage}) {
    const [text, setText] = useState('')

    const handleSubmit = (event) => {
        event.preventDefault()
        addMessage({
            author: AUTHOR.user,
            text: text
        })
        setText('')
    }
 //todo (make focused input using refs)
    return (
        <>
            <form  onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    id="standard-basic"
                    placeholder="Send message"
                />
                <UIButton
                    type="submit"
                    variant="contained"
                    color="success"
                    size="small"
                >SEND
                </UIButton>

            </form>
        </>
    )
}
