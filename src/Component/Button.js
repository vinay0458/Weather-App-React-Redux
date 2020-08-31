import React from 'react'

export default function Button(props) {
    const submitCityName=()=>{
        props.onClick();
    };
    return (
        <div>
            <a
                className="btn"
                href="#"
                onClick={submitCityName}
            >
                {props.text}
            </a>
        </div>
    )
}
