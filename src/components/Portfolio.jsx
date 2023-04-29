import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import {Link} from 'react-router-dom'
import Modal from './Modal';
import Projectcontainer from './Projectcontainer';
export default function Portfolio() {
    const [projects,setProjects] = useState([]);
    useEffect(()=>{
        (async ()=>{
            const response = await fetch(`${process.env.REACT_APP_API}/api/sheetdata/1FwUuZO2FrPdk-CTisPvp9AQTE3ogh778M0ilFb5JwAo`);
            const raw = await response.json();
            var arr = []
            for(var i in raw){
                arr.push(raw[i])
            }
            setProjects(arr.splice(0,6))
        })();
    },[projects])
    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Go through my projects and give your testimonial</span>
                            <h2 className="title">My Recent Projects</h2>
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {projects.map((project,id)=>(
                        <Projectcontainer key={"projcon"+id} project={project} id={id}/>
                    ))}
                </div>

                <div className="load-more">
                    <Link className="nav-link" to="/projects">Load more projects</Link>
                </div>
                {projects.map((project,id)=>(
                    <Modal key={"modal"+id} project={project} id={id}/>
                ))}
            </div>
        </div>
    )
}
