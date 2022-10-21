import React from 'react'

export default function ExperienceList(props) {
    let desc = props.experience.Description.split("||");
    return (
        <div className="resume-single-list">
            <div className="inner">
                <div className="heading">
                    <div className="title">
                        <h4>{props.experience.Title}</h4>
                        {/* <span>(ICCE)Wordpress, CSS</span> */}
                    </div>
                    <div className="date-of-time">
                        <a href={props.experience.Proof} target="_blank" rel="noopener noreferrer"><span>Proof</span></a>
                        
                    </div>
                </div>
                <p className="description">{desc.map((des,ind)=>{
                    return <li key={"descc"+ind}>{des}</li>;
                })}</p>
            </div>
        </div>
    )
}
