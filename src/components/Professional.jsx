import React, { useEffect, useState } from 'react'
import TechSkills from './TechSkills';

export default function Professional() {
    const [techskills,setTechSkills] = useState([]);
    const [devskills,setDevSkills] = useState([]);
    useEffect(()=>{
        let tech_skills = [["C","90"],["C++","70"],["Java","80"],["Python","80"],["SQL","70"]]
        let dev_skills = [["HTML","90"],["CSS","80"],["Javascript","80"],["Wordpress","80"],["React","70"],["Django","80"]]
        setTechSkills(tech_skills);
        setDevSkills(dev_skills)
    },[])
    return (
        <div className="tab-pane fade active show" id="professional" role="tabpanel" aria-labelledby="professional-tab">
            <div className="personal-experience-inner mt--40">
                <div className="row row--40">
                    <div className="col-lg-6 col-md-6 col-12">
                        <div className="progress-wrapper">
                            <div className="content">
                                <span className="subtitle">Features</span>
                                <h4 className="maintitle">Technical Skill</h4>
                                {techskills.length!==0?techskills.map((tech,ind)=>(
                                    <TechSkills key={"tskills"+ind} tskills={tech}/>
                                )):<p>Currently i don't have any technical skills</p>}

                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                        <div className="progress-wrapper">
                            <div className="content">
                                <span className="subtitle">Features</span>
                                <h4 className="maintitle">Development Skill</h4>
                                {devskills.length!==0?devskills.map((tech,ind)=>(
                                    <TechSkills key={"dskills"+ind} tskills={tech}/>
                                )):<p>Currently i don't have any development skills</p>}
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
