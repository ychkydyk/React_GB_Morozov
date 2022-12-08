

export function MessageList({messages}) {
    return (
        <>
            <h1 style={{color: 'darkgreen'}}>MessageList</h1>
            <ul>
                {messages.map((item) => (
                    <li>{item}</li>
                ))}
            </ul>

        </>
    )
}