import React from 'react'

export default function TechSkills(props) {
    return (
        <div className="progress-charts">
            <h6 className="heading heading-h6">{props.tskills[0]}</h6>
            <div className="progress">
                <div className="progress-bar wow fadeInLeft" style={{"width":props.tskills[1]+"%"}} data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">{props.tskills[1]}%</span></div>
            </div>
        </div>
    )
}
