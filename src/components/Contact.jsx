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
                                    <a href="https://github.com/iconicsudip" target="_blank">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                                    <a href="https://www.linkedin.com/in/sudipdas80/" target="_blank"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
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
