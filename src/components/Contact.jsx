import React from 'react'
import { useState } from 'react'
import IconAlerts from "./IconAlerts";

export default function Contact() {
    const [name,setName] = useState('');
    const [number,setNumber] = useState('');
    const [email,setEmail] = useState('');
    const [subject,setSubject] = useState('');
    const [message,setMessage] = useState('');
    const [alert,setAlert] = useState('');
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if(name==="" || number==="" || email==="" || subject==="" || message===""){
            setAlert(<IconAlerts type="error" data="Fill all the informations"/>);
        }else{
            const data = {
                Name:name,
                Number:number,
                Email:email,
                Subject:subject,
                Message:message
            }
            const response = await fetch('https://sheet.best/api/sheets/70b3c579-003e-4514-9896-98891132e39f',{
                method:'POST',
                credentials:'same-origin',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            setAlert(<IconAlerts type="success" data="Contact details submitted"/>);
            setName('');
            setNumber('');
            setEmail('');
            setSubject('');
            setMessage('');
        }
        const myTimeout = setTimeout(()=>{
            setAlert('');
        }, 5000);
    }
    return (
        <div className="rn-contact-area rn-section-gap section-separator" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Contact</span>
                            <h2 className="title">Contact With Me</h2>
                        </div>
                    </div>
                </div>

                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm">
                    <div className="col-lg-5">
                        <div className="contact-about-area">
                            <div className="thumbnail">
                                <img src="./contact.jpg"/>
                            </div>
                            <div className="title-area">
                                <h4 className="title">Sudip Das</h4>
                                <span>Web Developer</span>
                            </div>
                            <div className="description">
                                <p>I am available for work. Connect with me via linkedin or email.
                                </p>
                                {/* <span className="phone">Phone: <a href="tel:01941043264">+91-9073383828</a></span> */}
                                <span className="mail">Email: <a href="mailto:admin@example.com">das366966@gmail.com</a></span>
                            </div>
                            <div className="social-area">
                                <div className="name">FIND WITH ME</div>
                                <div className="social-icone">
                                    <a href="https://github.com/iconicsudip" target="_blank"><iconify-icon icon="akar-icons:github-fill" width="24" height="24" style={{"color": "#c4cfde"}}></iconify-icon></a>
                                    <a href="https://www.linkedin.com/in/sudipdas80/" target='_blank'><iconify-icon icon="eva:linkedin-outline" width="24" height="24" style={{"color": "#c4cfde"}}></iconify-icon></a>
                                    <a href="https://leetcode.com/coderdip/" target='_blank'><iconify-icon icon="simple-icons:leetcode" width="24" height="24" style={{"color": "#c4cfde"}}></iconify-icon></a>
                                    {/* <a href="#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    {alert}
                    <div data-aos-delay="600" className="col-lg-7 contact-input">
                        <div className="contact-form-wrapper">
                            <div className="introduce">
                                <form autoComplete='off' onSubmit={handleSubmit} className="rnt-contact-form rwt-dynamic-form row" id="contact-form" >
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-name">Your Name</label>
                                            <input autoComplete='off' className="form-control form-control-lg"  onChange={(e)=>{setName(e.target.value)}} value={name} id="contact-name" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-6">
                                        <div className="form-group">
                                            <label htmlFor="contact-phone">Phone Number</label>
                                            <input autoComplete='off' className="form-control" onChange={(e)=>{setNumber(e.target.value)}} value={number}  id="contact-phone" type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-email">Email</label>
                                            <input autoComplete='off' className="form-control form-control-sm" onChange={(e)=>{setEmail(e.target.value)}} value={email} id="contact-email" type="email"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="subject">subject</label>
                                            <input autoComplete='off' className="form-control form-control-sm" id="subject" onChange={(e)=>{setSubject(e.target.value)}} value={subject} type="text"/>
                                        </div>
                                    </div>
                                    <div className="col-lg-12">
                                        <div className="form-group">
                                            <label htmlFor="contact-message">Your Message</label>
                                            <textarea autoComplete='off' onChange={(e)=>{setMessage(e.target.value)}} value={message} id="contact-message" cols="30" rows="10"></textarea>
                                        </div>
                                    </div>

                                    <div className="col-lg-12">
                                        <button type='submit' id="submit" className="rn-btn">
                                            <span>SEND MESSAGE</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-arrow-right"><line x1="5" y1="12" x2="19" y2="12"></line><polyline points="12 5 19 12 12 19"></polyline></svg>
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
