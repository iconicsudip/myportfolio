import React,{useState,useEffect} from 'react'
import ExperienceList from './ExperienceList';

export default function Experience() {
    const [experience,setExperience] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://sheetpi.herokuapp.com/api/sheetdata/1YsNVVff_h0rEYxrmm6VAaPizctFY_zS_qihj6Xnn29I');
            const raw = await response.json();
            var arr = []
            for(var i in raw){
                arr.push(raw[i])
            }
            setExperience(arr.reverse())
        })();
    },[experience])
    return (
        <div className="tab-pane fade active show" id="experience" role="tabpanel" aria-labelledby="experience-tab">
            <div className="personal-experience-inner mt--40">
                <div className="row">
                    <div className="col-md-12 col-12">
                        <div className="content">
                            <span className="subtitle">2021 - Present</span>
                            <h4 className="maintitle">Job/Internship Experience</h4>
                            <div className="experience-list">
                                {experience.length!==0?experience.map((exp,index)=>(
                                    <ExperienceList key={"exp"+index} experience={exp}/>
                                )):<h4 style={{"textAlign":"center"}}>Currently i don't have any job/internship experience</h4>}
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}
