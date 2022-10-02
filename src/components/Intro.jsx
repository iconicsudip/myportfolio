import React from 'react'
import { useState,useEffect } from 'react'
export default function Intro() {
    const [text, setText] = useState("")
    const [forward,setForward] = useState(1);
    const [backward,setBackward] = useState(0);
    const [fullText, setFullText] = useState(["Coder","SAAS Developer","React Developer","Django Developer"])
    const [index, setIndex] = useState(0)
    const [pos,setPos] = useState(0);
    const [count,setCount] = useState(0);
    useEffect(() => {
        const time = setTimeout(() => {
            if(index===fullText.length){
                setIndex(0);
            }
            setCount(0);
            if(index<fullText.length){
                if(pos ===0){
                    if(count===0 && backward){
                        setCount(1);
                        setIndex(index+1);
                    }
                    setForward(1);
                    setBackward(0);
                }
                if(pos === fullText[index].length){
                    setForward(0);
                    setBackward(1);
                }
                if(pos>0 && backward){
                    setText(text.slice(0, -1))
                    setPos(pos - 1)
                }
                if (pos < fullText[index].length && forward) {
                    setText(text + fullText[index][pos])
                    setPos(pos + 1)
                }
                
            }
        }, 160)
        return () => {
            clearTimeout(time);
        };
    }, [index,pos,backward,forward])
  return (
    <div id="home" className="rn-slider-area">
            <div className="slide slider-style-1">
                <div className="container">
                    <div className="row">
                        <div className="order-2 col-lg-7 mt_md--50">
                            <div className="content">
                                <div className="inner">
                                    <span className="subtitle">Welcome to my world</span>
                                    <h1 className="title">Hi, I'm <span>Sudip Das</span><br/>
                                        <span className="header-caption" id="page-top">
                                            <span className="cd-headline clip is-full-width">
                                                <span>a </span>
                                                <span className="cd-words-wrapper" >
                                                    <b className="is-visible">{text}</b>
                                                </span>
                                            </span>
                                        </span>
                                    </h1>

                                    <div>
                                        <p className="description">I use Django , React to develope software as a service type of applications to improve user's daily life.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        <div className="social-share-inner-left">
                                            <span className="title">find with me</span>
                                            <ul className="social-share d-flex liststyle">
                                                {/* <li className="facebook"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                                </li> */}
                                                <li className="instagram"><a href="https://github.com/iconicsudip" target="_blank">
                                                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512"><path d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"/></svg></a>
                                                </li>
                                                <li className="linkedin"><a href="https://www.linkedin.com/in/sudipdas80/" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="order-1 col-lg-5 thumb">
                            <div className="thumbnail">
                                <div className="inner">
                                    <img src="./myimg.png" alt="Personal Portfolio Images"/>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </div>
  )
}
