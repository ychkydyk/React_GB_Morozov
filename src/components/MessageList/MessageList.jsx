

export function MessageList({messages}) {
    return (
        <>
            <h1 style={{color: 'darkgreen'}}>MessageList</h1>
            <ul>
                {messages.map((message,index) => (
                    <li key={index}>{message.author}:{message.text}</li>
                ))}
            </ul>
        </>
    )
}