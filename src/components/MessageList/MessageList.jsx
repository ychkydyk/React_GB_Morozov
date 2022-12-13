

export function MessageList ({messages}) {
    console.log('messages', messages)
    return (
        <>
            <h1>MessageList</h1>
            <ul>
                {messages.map((message, index) => (
                    <li key={index}>
                        {message.author} : {message.text}
                    </li>
                ))}
            </ul>
        </>
    )
}

