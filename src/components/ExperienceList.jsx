import React from 'react'

export default function ExperienceList(props) {
    let desc = props.experience.Description.split("||");
    return (
        <div className="resume-single-list">
            <div className="inner">
                <div className="heading">
                    <div className="title">
                        <h4>{props.experience.Role}</h4>
                        <span>({props.experience.Org}){props.experience.Techstack}</span>
                    </div>
                    <div className="date-of-time">
                        <span>{props.experience.Start}</span>
                    </div>
                    <span>to</span>
                    <div className="date-of-time">
                        <span>{props.experience.End}</span>
                    </div>
                </div>
                <p className="description">{desc.map((des)=>{
                    return <li>{des}</li>;
                })}</p>
            </div>
        </div>
    )
}
