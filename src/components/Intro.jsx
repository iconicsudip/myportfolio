import React from 'react'
import { useState,useEffect } from 'react'
export default function Intro() {
    const [text, setText] = useState("")
    const [forward,setForward] = useState(1);
    const [backward,setBackward] = useState(0);
    const [fullText, setFullText] = useState(["Coder","React Developer","Django Developer"])
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
                                        <p className="description">I use animation as a third dimension by which to simplify
                                            experiences and kuiding thro each and every interaction. I'm not adding
                                            motion
                                            just to spruce things up, but doing it in ways that.</p>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-lg-6 col-xl-6 col-md-6 col-sm-6 col-12">
                                        <div className="social-share-inner-left">
                                            <span className="title">find with me</span>
                                            <ul className="social-share d-flex liststyle">
                                                <li className="facebook"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-facebook"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
                                                </li>
                                                <li className="instagram"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-instagram"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg></a>
                                                </li>
                                                <li className="linkedin"><a href="/#"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-linkedin"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect x="2" y="9" width="4" height="12"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
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
