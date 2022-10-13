import React from 'react'
import { useState,useEffect } from 'react';
import Projectcontainer from './Projectcontainer';
import Modal from './Modal';
import TextField from '@mui/material/TextField';

export default function Projects() {
    const [projects,setProjects] = useState([]);
    const [domain,setDomain] = useState([]);
    const [search,setSearch] = useState("")
    const final_dom = new Set();
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://sheetpi.herokuapp.com/api/sheetdata/1FwUuZO2FrPdk-CTisPvp9AQTE3ogh778M0ilFb5JwAo');
            const raw = await response.json();
            var arr = []
            var dom = []
            for(var i in raw){
                arr.push(raw[i])
                dom.push(raw[i]["Domain"])
            }
            if(search===""){
                setProjects(arr)
            }else{
                var project = [];
                project =arr.filter((p,ind)=>{
                    return (p["Domain"].toLowerCase().includes(search.toLowerCase()) 
                    || p["Description"].toLowerCase().includes(search.toLowerCase()) 
                    || p["Heading"].toLowerCase().includes(search.toLowerCase())
                    || p["Name"].toLowerCase().includes(search.toLowerCase()));
                })
                if(project.length===0){
                    setProjects(null);
                }else{
                    setProjects(project)
                }
            }
            setDomain([...dom])
        })();
    },[domain,projects])
    for(var i = 0;i<domain.length;i++){
        final_dom.add(domain[i]);
    }
    const goSearch = (e)=>{
        e.preventDefault();
        setSearch(e.target.value);
    }
    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Visit my portfolio and keep your testimonial</span>
                            <h2 className="title">My All Projects</h2>
                            
                            <TextField className='searchbar' value={search} onChange={goSearch} fullWidth label="Search Project" InputLabelProps={{style: { color: '#c4cfde'},}} id="fullWidth" style={{marginTop:"2rem"}}/>
                            {/* {final_dom} */}
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    {projects===null?
                    <div className="section-title text-center" style={{marginTop:"4rem"}}>
                        <span className="subtitle">No project is like {search}</span>
                    </div>
                    :projects.map((project,id)=>(
                        <Projectcontainer project={project} id={id}/>
                    ))}
                </div>
                {projects===null?null:projects.map((project,id)=>(
                    <Modal project={project} id={id}/>
                ))}
            </div>
        </div>
    )
}
