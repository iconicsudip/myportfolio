import React from 'react'

export default function Services() {
    return (
        <div className="rn-service-area rn-section-gap section-separator" id="service">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-left aos-init aos-animate" data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true">
                            <span className="subtitle">My Services</span>
                            <h2 className="title">What I Do</h2>
                        </div>
                    </div>
                </div>
                <div className="row row--25 mt_md--10 mt_sm--10">
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-menu"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Django Web Development</h4>
                                    <p className="description">I love to develope django projects with dedications</p>
                                    <i className="read-more-button fa">&#xf061;</i>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-tv"><rect x="2" y="7" width="20" height="15" rx="2" ry="2"></rect><polyline points="17 2 12 7 7 2"></polyline></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">Coding</h4>
                                    <p className="description">I love to do coding to develope my problem solving skills</p>
                                    <i className="read-more-button fa">&#xf061;</i>
                                </div>
                            </div>
                            <a className="over-link" href="/#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-book-open"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title">React Web Development</h4>
                                    <p className="description">I love to develope react projects with efficiently</p>
                                    <i className="read-more-button fa">&#xf061;</i>
                                </div>
                            </div>
                            <a className="over-link" href="/#"></a>
                        </div>
                    </div>
                    
                    {/* <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-twitch"><path d="M21 2H3v16h5v4l4-4h5l4-4V2zm-10 9V7m5 4V7"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="/#">Mobile App</a></h4>
                                    <p className="description">There are many variations of passages of Lorem Ipsum
                                        available, but the majority.
                                    </p>
                                    <a className="read-more-button" href="/#"><i className="fa">&#xf061;</i></a>
                                </div>
                            </div>
                            <a className="over-link" href="/#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-wifi"><path d="M5 12.55a11 11 0 0 1 14.08 0"></path><path d="M1.42 9a16 16 0 0 1 21.16 0"></path><path d="M8.53 16.11a6 6 0 0 1 6.95 0"></path><line x1="12" y1="20" x2="12.01" y2="20"></line></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="/#">CEO Marketing</a></h4>
                                    <p className="description">always free from repetition,
                                        injected humour, or non-characteristic words etc.</p>
                                    <a className="read-more-button" href="/#"><i className="fa">&#xf061;</i></a>
                                </div>
                            </div>
                            <a className="over-link" href="/#"></a>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-duration="500" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-sm-12 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-service">
                            <div className="inner">
                                <div className="icon">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="feather feather-slack"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"></path><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"></path><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"></path><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"></path><path d="M14 14.5c0-.83.67-1.5 1.5-1.5h5c.83 0 1.5.67 1.5 1.5s-.67 1.5-1.5 1.5h-5c-.83 0-1.5-.67-1.5-1.5z"></path><path d="M15.5 19H14v1.5c0 .83.67 1.5 1.5 1.5s1.5-.67 1.5-1.5-.67-1.5-1.5-1.5z"></path><path d="M10 9.5C10 8.67 9.33 8 8.5 8h-5C2.67 8 2 8.67 2 9.5S2.67 11 3.5 11h5c.83 0 1.5-.67 1.5-1.5z"></path><path d="M8.5 5H10V3.5C10 2.67 9.33 2 8.5 2S7 2.67 7 3.5 7.67 5 8.5 5z"></path></svg>
                                </div>
                                <div className="content">
                                    <h4 className="title"><a href="/#">Personal Portfolio April</a></h4>
                                    <p className="description"> It uses a dictionary of over 200 Latin words, combined with
                                        a handful of model sentence.</p>
                                    <a className="read-more-button" href="/#"><i className="fa">&#xf061;</i></a>
                                </div>
                            </div>
                            <a className="over-link" href="/#"></a>
                        </div>
                    </div> */}
                </div>
            </div>
        </div>
    )
}
