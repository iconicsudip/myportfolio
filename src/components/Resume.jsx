import React from 'react'

export default function Resume() {
    return (
        <div className="rn-resume-area rn-section-gap section-separator" id="resume">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            {/* <span className="subtitle">7+ Years of Experience</span> */}
                            <span className="subtitle">Fresher</span>
                            <h2 className="title">My Resume</h2>
                        </div>
                    </div>
                </div>
                <div className="row mt--45">
                    <div className="col-lg-12">
                        <ul className="rn-nav-list nav nav-tabs" id="myTabs" role="tablist">
                            <li className="nav-item">
                                <a className="nav-link active" id="professional-tab" data-bs-toggle="tab" href="#professional" role="tab" aria-controls="professional" aria-selected="true">Skills</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" id="experience-tab" data-bs-toggle="tab" href="#experience" role="tab" aria-controls="experience" aria-selected="false">experience</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link " id="education-tab" data-bs-toggle="tab" href="#education" role="tab" aria-controls="education" aria-selected="false">education</a>
                            </li>
                        </ul>

                        <div className="rn-nav-content tab-content" id="myTabContents">
                            <div className="tab-pane fade active show" id="professional" role="tabpanel" aria-labelledby="professional-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row row--40">
                                        <div className="col-lg-6 col-md-6 col-12">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Technical Skill</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">C</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"90%"}} data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar"  aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">C++</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"70%"}} data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">JAVA(OOPS)</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"80%"}} data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">PYTHON</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"80%"}} data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">SQL</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"70%"}} data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" aria-valuenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-12 mt_sm--60">
                                            <div className="progress-wrapper">
                                                <div className="content">
                                                    <span className="subtitle">Features</span>
                                                    <h4 className="maintitle">Development Skill</h4>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">HTML</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"90%"}} data-wow-duration="0.5s" data-wow-delay=".3s" role="progressbar" luenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">90%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">CSS</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"80%"}} data-wow-duration="0.6s" data-wow-delay=".4s" role="progressbar" luenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">JAVASCRIPT</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"60%"}} data-wow-duration="0.7s" data-wow-delay=".5s" role="progressbar" luenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">60%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">DJANGO</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"80%"}} data-wow-duration="0.8s" data-wow-delay=".6s" role="progressbar" luenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">80%</span></div>
                                                        </div>
                                                    </div>
                                                    <div className="progress-charts">
                                                        <h6 className="heading heading-h6">React</h6>
                                                        <div className="progress">
                                                            <div className="progress-bar wow fadeInLeft" style={{"width":"70%"}} data-wow-duration="0.9s" data-wow-delay=".7s" role="progressbar" luenow="85" aria-valuemin="0" aria-valuemax="100"><span className="percent-label">70%</span></div>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="experience" role="tabpanel" aria-labelledby="experience-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            {/* <div className="content">
                                                <span className="subtitle">2007 - 2010</span>
                                                <h4 className="maintitle">Job Experience</h4>
                                                <div className="experience-list">
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Web Development</h4>
                                                                    <span>BSE In CSE (2004 - 2008)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.70/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Contrary to popular belief. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>The Personal Portfolio Mystery</h4>
                                                                    <span>Job at Rainbow-Themes (2008 - 2016)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>4.95/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Generate Lorem Ipsum which looks. Ut
                                                                tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>Diploma in Computer Science</h4>
                                                                    <span>Works at Plugin Development (2016 -
                                                                2020)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>5.00/5</span>
                                                                </div>
                                                            </div>
                                                            <p className="description">Maecenas finibus nec sem ut
                                                                imperdiet. Ut tincidunt est ac dolor aliquam sodales.
                                                                Phasellus sed mauris hendrerit, laoreet sem in, lobortis
                                                                mauris hendrerit ante.</p>
                                                        </div>
                                                    </div>

                                                </div>
                                            </div> */}
                                            <h4 style={{"textAlign":"center"}}>Currently i don't have any job experience</h4>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="education" role="tabpanel" aria-labelledby="education-tab">
                                <div className="personal-experience-inner mt--40">
                                    <div className="row">
                                        <div className="col-md-12 col-12">
                                            <div className="content">
                                                <span className="subtitle">2016 - 2023</span>
                                                <h4 className="maintitle">Education Quality</h4>
                                                <div className="experience-list">
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>B.Tech in Computer Science and Engineering</h4>
                                                                    <span>Government College of Engineering and Textile Technology, Serampore (2019 - 2023)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>9.39/10</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4> PCMB (Physics, Chemistry, Math, Biology)</h4>
                                                                    <span>Uttarpara Govt. High School (2017 - 2019)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>78.6/100%</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
                                                        </div>
                                                    </div>
                                                    <div className="resume-single-list">
                                                        <div className="inner">
                                                            <div className="heading">
                                                                <div className="title">
                                                                    <h4>All subject</h4>
                                                                    <span>Uttarpara Govt. High School (2016 - 2017)</span>
                                                                </div>
                                                                <div className="date-of-time">
                                                                    <span>84.28/100%</span>
                                                                </div>
                                                            </div>
                                                            <p className="description"></p>
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
                    <div class="load-more"><a class="nav-link" href="https://drive.google.com/file/d/1WmOBfBvtA1zoJdC2wukwmj7KrkFuH3yN/view" target="_blank">Download my CV</a></div>
                </div>
            </div>
        </div>
    )
}
