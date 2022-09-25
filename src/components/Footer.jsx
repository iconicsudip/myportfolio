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
        <div class="rn-footer-area rn-section-gap section-separator">
            <div class="container">
                <div class="row">
                    <div class="col-lg-12">
                        <div class="footer-area text-center">
                            <div class="logo footer">
                                <a href="index.html">
                                    <img src="./mylogo.png" alt="logo"/>
                                </a>
                            </div>
                            <p class="description mt--30">© {curryear} 
                                <a  href="">Sudip Das</a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
