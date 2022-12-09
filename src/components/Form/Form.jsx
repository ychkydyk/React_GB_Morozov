
import {useState} from "react";
import UIButton from '@mui/material/Button';
import UITextField from '@mui/material/TextField';

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
