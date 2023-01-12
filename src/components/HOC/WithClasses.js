import React from 'react'

export function WithClasses(Component) {
    return function Wrapper(props) {
        return (
            <div className={props.classes}>
                <Component {...props} />
            </div>
        )
    }
}