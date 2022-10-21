import React from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

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
            // if(document.getElementsByClassName(target)[0].ariaExpanded==="true"){
            //     document.getElementsByClassName('navbar')[0].style.height = "24rem";
            //     document.getElementsByClassName('navbar')[0].style.transition = "0.5s";
            // }
            
        }else{
            document.getElementsByClassName('navbar')[0].style.height = "138px";
            document.getElementsByClassName('navbar')[0].style.transition = "0.4s";
        }
        
    }
    return (
        <header className="header" >
            <nav className="navbar navbar-expand-lg bg-light">
                <div className="container-fluid">
                    <div className="col-lg-2 col-6">
                        <div className="header-left">
                            <div className="logo">
                                    <Link className="nav-link" to="/" >
                                        <img src="./mylogo.png" alt="logo"/>
                                    </Link>
                            </div>
                        </div>
                    </div>
                    <button className="navbar-toggler" type="button" onClick={check} data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <Link className="nav-link" to="/" >Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/service" >Services</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/portfolio" >Portfolio</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/resume" >Resume</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/testimonial" >Testimonials</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/achievement" >Achievements</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact" >Contact</Link>
                        </li>
                    </ul>
                    </div>
                </div>
            </nav>
        </header>
    )
}
