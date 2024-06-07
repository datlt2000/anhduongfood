import React from 'react'

const Button = (props) => {
    const { children, format, active, ...rest } = props
    return (
        <button className={active ? 'btnActive' : ''} title={format}  {...rest}>
            {children}
        </button>
    )
}

export default Button;