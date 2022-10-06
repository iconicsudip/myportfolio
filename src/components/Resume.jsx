import React from 'react'
import { useState } from 'react'
import Education from './Education'
import Experience from './Experience'
import Professional from './Professional'

export default function Resume() {
    const [section,setSection] = useState(<Professional />)
    const setProfessional=(e)=>{
        setSection(<Professional />);
    }
    const setExperience = (e)=>{
        setSection(<Experience />);
    }
    const setEducation = (e)=>{
        setSection(<Education />);
    }
    return (
        <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            {/* <span className="subtitle">7+ Years of Experience</span> */}
                            <span className="subtitle">Fresher</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item" onClick={setProfessional}>
                                <a className="nav-link active" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="true">Skills</a>
                            </li>
                            <li className="nav-item" onClick={setExperience}>
                                <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                            </li>
                            <li className="nav-item" onClick={setEducation}>
                                <a className="nav-link " id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">education</a>
                            </li>
                        </ul>

                        <div className="rn-nav-content tab-content" id="myTabContents">
                            {section}
                        </div>
                    </div>
                    <div className="load-more"><a className="nav-link" href="https://drive.google.com/file/d/1WmOBfBvtA1zoJdC2wukwmj7KrkFuH3yN/view" target="_blank">Download my CV</a></div>
                </div>
            </div>
        </div>
    )
}
