import React from 'react'
import { useEffect } from 'react';
import { useState } from 'react';

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
                                <a href="index.html">
                                    <img src="./mylogo.png" alt="logo"/>
                                </a>
                            </div>
                            <p className="description mt--30">© {curryear} 
                                <a  href="">Sudip Das</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
