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
                document.getElementsByClassName('navbar')[0].style.height = "340px";
                document.getElementsByClassName('navbar')[0].style.transition = "0.5s";
            }
            
        }else{
            document.getElementsByClassName('navbar')[0].style.height = "138px";
            document.getElementsByClassName('navbar')[0].style.transition = "1s";
        }
        
    }
  return (
    <header className="header" >
        <nav className="navbar navbar-expand-lg bg-light">
            <div className="container-fluid">
                <div className="col-lg-2 col-6">
                    <div className="header-left">
                        <div className="logo">
                            <a href="">
                                <img src="./mylogo.png" alt="logo"/>
                            </a>
                        </div>
                    </div>
                </div>
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
