import React,{useState,useEffect} from 'react'
import AchievementList from './AchievementList';

export default function Achievement() {
    const [achive,setAchive] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://sheetpi.herokuapp.com/api/sheetdata/1iCHQymM14JZToW5HduUKQQgLGF1oFM6Ff0VejLtec08');
            const raw = await response.json();
            var arr = []
            for(var i in raw){
                arr.push(raw[i])
            }
            setAchive(arr)
        })();
    },[achive])
    return (
        <div className="rn-resume-area rn-section-gap section-separator" id="achievement">
            <div className="container">
                <div className="tab-pane fade active show"  role="tabpanel" aria-labelledby="experience-tab">
                    <div className="personal-experience-inner mt--40">
                        <div className="row">
                            <div className="col-lg-12">
                                <div className="section-title text-center">
                                    {/* <span classNameName="subtitle">7+ Years of Experience</span> */}
                                    <span className="subtitle">2019-Present</span>
                                    <h2 className="title">My Achivements</h2>
                                </div>
                            </div>
                            <div className="col-md-12 col-12">
                                <div className="content">
                                    <div className="experience-list">
                                        {achive.length!==0?achive.map((exp,index)=>(
                                            <AchievementList key={"exp"+index} experience={exp}/>
                                        )):<h4 style={{"textAlign":"center"}}>Currently i don't have any achievements</h4>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div classNameName="rn-resume-area rn-section-gap section-separator" id="resume">
        //     <div classNameName="container">
        //         <div classNameName="row">
        //             <div classNameName="col-lg-12">
        //                 <div classNameName="section-title text-center">
        //                     {/* <span classNameName="subtitle">7+ Years of Experience</span> */}
        //                     <span classNameName="subtitle">2019-Present</span>
        //                     <h2 classNameName="title">My Achivements</h2>
        //                 </div>
        //             </div>
        //         </div>
        //         <div classNameName="row mt--45">
        //             <div classNameName="col-lg-12">
        //                 <div classNameName="rn-nav-content tab-content" id="myTabContents">
        //                     <div classNameName="tab-pane fade active show" id="experience" role="tabpanel" aria-labelledby="experience-tab">
        //                             {achive.length!==0?achive.map((exp,index)=>(
        //                                 <AchievementList key={"exp"+index} experience={exp}/>
        //                             )):<h4 style={{"textAlign":"center"}}>Currently i don't have any achievements</h4>}
        //                     </div>
        //                 </div>
        //             <div classNameName="load-more"><a classNameName="nav-link" href="https://drive.google.com/file/d/1WmOBfBvtA1zoJdC2wukwmj7KrkFuH3yN/view" target="_blank">Download my CV</a></div>
        //             </div>
        //         </div>
        //     </div>
        // </div>
    )
}
