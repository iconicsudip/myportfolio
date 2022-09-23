import React from 'react';
import { useEffect } from 'react';

export default function Header(props) {
    useEffect(()=>{
        if(props.scrollVal >= 50){
            document.getElementsByClassName('navbar')[0].classList.add('topnavbar');
        }else{
            document.getElementsByClassName('navbar')[0].classList.remove('topnavbar');
        }
    },[props.scrollVal])

    const check = (e)=>{
        var target;
        if(e.target.className==="navbar-toggler-icon"){
            target = e.target.parentElement.className
        }else{
            target = e.target.className
        }
        if(target === "navbar-toggler"){
            if(document.getElementsByClassName(target)[0].ariaExpanded==="true"){
                console.log(target)
                document.getElementsByClassName('navbar')[0].style.height = "300px";
            }
            
        }else{
            document.getElementsByClassName('navbar')[0].style.height = "103px";
        }
        
    }
  return (
    <header>
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" onClick={check} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNavDropdown">
                <ul className="navbar-nav">
                    <li className="nav-item">
                    <a className="nav-link" href="#home">Home</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#service">Services</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#portfolio">Portfolio</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#resume">Resume</a>
                    </li>
                    <li className="nav-item">
                    <a className="nav-link" href="#contact">Contact</a>
                    </li>
                </ul>
                </div>
            </div>
        </nav>
    </header>
  )
}
