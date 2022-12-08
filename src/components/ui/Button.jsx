

export function Button(props) {
    return ( //* в children всё что помещается между тегами в родителе *//
        <>
            <button{...props}>{props.children}</button>
        </>
    )
}
