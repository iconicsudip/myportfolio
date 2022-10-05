import React from 'react'
import { useState,useEffect } from 'react';
import Projectcontainer from './Projectcontainer';
import Modal from './Modal';

export default function Projects() {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://sheetpi.herokuapp.com/api/sheetdata/1FwUuZO2FrPdk-CTisPvp9AQTE3ogh778M0ilFb5JwAo');
            const raw = await response.json();
            var arr = []
            for(var i in raw){
                arr.push(raw[i])
            }
            setProjects(arr)
        })();
    },[projects])
    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {projects.map((project,id)=>(
                        <Projectcontainer project={project} id={id}/>
                    ))}
                </div>
                {projects.map((project,id)=>(
                    <Modal project={project} id={id}/>
                ))}
            </div>
        </div>
    )
}
