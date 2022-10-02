import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import TestiBody from "./TestiBody";
import { useEffect,useState } from "react";
export default function Testimonials() {
    const [testimonials,setTestimonials] = useState([]);
    const [name,setName] = useState('');
    const [designation,setDesignation] = useState('');
    const [email,setEmail] = useState('');
    const [message,setMessage] = useState('');

    const handleSubmit = async (e)=>{
        e.preventDefault();
        const data = {
            Brief:message,
            Designation:designation,
            Email:email,
            Name:name,
        }
        const response = await fetch('https://sheet.best/api/sheets/82ff2daa-61f5-420d-9748-75ea028d642a',{
            method:'POST',
            credentials:'same-origin',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        setName('');
        setDesignation('');
        setEmail('');
        setMessage('');
    }
    useEffect(()=>{
        (async ()=>{
            const response = await fetch('https://api.sheety.co/0a0bae84b3af272e4383b28667f60cdf/portfolioTestimonialsList/sheet1');
            const raw = await response.json();
            if(raw.status===200){
              setTestimonials(raw.sheet1)
            }else{
              alert("Testimonials are currently not available")
            }
        })();
    },[testimonials])
  
  return (
    <div
      className="rn-testimonial-area rn-section-gap section-separator"
      id="testimonial"
    >
      <div className="container">
        <div className="row">
          <div className="col-lg-12">
            <div className="section-title text-center">
              <span className="subtitle">What Everyone Say</span>
              <h2 className="title">Testimonial</h2>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-lg-12">
            <Carousel
              showArrows={true}
              infiniteLoop={true}
              showThumbs={false}
              showStatus={false}
              autoPlay={true}
              interval={3000}
            >
              {testimonials.map((testi,id)=>(
                  <TestiBody testi={testi} id={id}/>
              ))}
            </Carousel>
          </div>

          <div className="load-more">
              <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target={"#testimonialform"}>
                <h4 style={{"fontSize":"16px"}} className="title"><a >Give me feedback<i className="feather-arrow-up-right"></i></a></h4>
              </div>
          </div>


          <div className="modal fade" id={"testimonialform"} aria-labelledby="testimonialform" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                        </button>
                    </div>
                    <div className="modal-body align-items-center">
                        <div className="rn-contact-area rn-section-gap" id="feedback">
                            <div className="container">
                                <div className="row align-items-center">
                                    <div className="col-lg-12">
                                        <div className="section-title text-center">
                                            <span className="subtitle">Feedback</span>
                                            <h2 className="title">Give Me Feedback</h2>
                                        </div>
                                    </div>
                                </div>

                                <div className="row mt--50 mt_md--40 mt_sm--40 mt-contact-sm " style={{"justifyContent":"center"}}>
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
                                                            <label htmlFor="contact-phone">Designation</label>
                                                            <input autoComplete='off' className="form-control" onChange={(e)=>{setDesignation(e.target.value)}} value={designation}  id="contact-phone" type="text"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label htmlFor="contact-phone">Email</label>
                                                            <input autoComplete='off' className="form-control" onChange={(e)=>{setEmail(e.target.value)}} value={email}  id="contact-phone" type="email"/>
                                                        </div>
                                                    </div>
                                                    <div className="col-lg-12">
                                                        <div className="form-group">
                                                            <label htmlFor="contact-message">Give feedback about me/my works</label>
                                                            <textarea autoComplete='off' onChange={(e)=>{setMessage(e.target.value)}} value={message} id="contact-message" cols="30" rows="10"></textarea>
                                                        </div>
                                                    </div>

                                                    <div className="col-lg-12">
                                                        <button type='submit' id="submit" className="rn-btn">
                                                            <span>SEND FEEDBACK</span>
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
                    </div>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
