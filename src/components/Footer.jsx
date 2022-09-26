import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

export default function Footer() {
    const [curryear,setYear] = useState(0)
    useEffect(()=>{
        const currentYear = new Date().getFullYear();
        setYear(currentYear)
    },[])
    return (
        <div className="rn-footer-area rn-section-gap section-separator">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="footer-area text-center">
                            <div className="logo footer">
                                <Link className="nav-link" to="/" >
                                    <img src="./mylogo.png" alt="logo"/>
                                </Link>
                            </div>
                            <p className="description mt--30">© {curryear} <Link className="nav-link" to="/" > Sudip Das</Link>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
