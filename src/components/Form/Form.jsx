import {useState} from "react";
import UIButton from '@mui/material/Button';

import {useDispatch} from "react-redux";
import { addMessageWithReply} from "../../store/messages/actions";
import {useParams} from "react-router-dom";
import {AUTHOR} from "../../constants";


export function Form() {
    const [text, setText] = useState('')
    const dispatch = useDispatch()
    const {chatId} = useParams()

    const handleSubmit = (event) => {
        event.preventDefault()
        dispatch(addMessageWithReply(chatId, {
            author: AUTHOR.user,
            text
        }))
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
