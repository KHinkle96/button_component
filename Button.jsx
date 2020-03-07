import React from "react"
import "./button.css"

const Styles = [
    "btn-primary",
    "btn-warning",
    "btn-danger",
    "btn-success",
]

const Sizes = [
    "btn-small",
    "btn-medum"
]

const Button = ({
    children,
    type,
    onClick,
    buttonStyle,
    buttonSize
}) => {

    return (
        <button onClick={onClick} type={type}>
            {children}
        </button>
    )
}

export default Button