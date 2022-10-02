import React from 'react'

export default function TestiBody(props) {
    console.log(props)
    return (
        <div>
            <img src={props.testi.email} alt="My logo"/>
            <div className="myCarousel">
                <h3>{props.testi.name}</h3>
                <h4>{props.testi.designation}</h4>
                <p>
                {props.testi.brief}
                </p>
            </div>
        </div>
    )
}
