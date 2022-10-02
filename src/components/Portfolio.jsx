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
            const response = await fetch('https://api.sheety.co/0a0bae84b3af272e4383b28667f60cdf/portfolioProjectsList/sheet1');
            const raw = await response.json();
            setProjects(raw.sheet1.splice(0,6))
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

                <div className="load-more">
                    <Link className="nav-link" to="/projects">Load more projects</Link>
                </div>
                {projects.map((project,id)=>(
                    <Modal project={project} id={id}/>
                ))}
            </div>
        </div>
    )
}
