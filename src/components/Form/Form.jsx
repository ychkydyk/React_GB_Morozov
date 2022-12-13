import {useState} from "react";
import UIButton from '@mui/material/Button';
import { AUTHOR } from '../../constants'
import UITextField from '@mui/material/TextField';

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
            <form onSubmit={handleSubmit}>
                <UITextField
                    type="text"
                    value={text}
                    onChange={(event) => setText(event.target.value)}
                    id="standard-basic"
                    label="Send message"
                    variant="standard"
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
