import React from 'react';
import {BrowserRouter,Link} from 'react-router-dom'
export default function Portfolio() {
    return (
        <div className="rn-portfolio-area rn-section-gap section-separator" id="portfolio">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12">
                        <div className="section-title text-center">
                            <span className="subtitle">Visit my portfolio and keep your feedback</span>
                            <h2 className="title">My Portfolio</h2>
                        </div>
                    </div>
                </div>

                <div className="row row--25 mt--10 mt_md--10 mt_sm--10">
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal1">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="assets/images/portfolio/portfolio-01.jpg" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Development</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        600</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >The services provide for design <i className="feather-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal2">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="./demotask.png" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Application</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        750</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >Mobile app landing design &amp; app
                                            maintain<i class="bi bi-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="assets/images/portfolio/portfolio-03.jpg" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Photoshop</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        630</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >Logo design creativity &amp; Application
                                            <i class="bi bi-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="100" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="assets/images/portfolio/portfolio-04.jpg" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Figma</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        360</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >Mobile app landing design &amp;
                                            Services<i class="bi bi-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="300" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="assets/images/portfolio/portfolio-05.jpg" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Web Design</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        280</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >Design for tecnology &amp; services<i class="bi bi-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="fade-up" data-aos-delay="500" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
                        <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target="#exampleModal">
                            <div className="inner">
                                <div className="thumbnail">
                                    <a >
                                        <img src="assets/images/portfolio/portfolio-06.jpg" alt="Personal Portfolio Images"/>
                                    </a>
                                </div>
                                <div className="content">
                                    <div className="category-info">
                                        <div className="category-list">
                                            <a >Web Design</a>
                                        </div>
                                        <div className="meta">
                                            <span><a ><i className="feather-heart"></i></a>
                                        690</span>
                                        </div>
                                    </div>
                                    <h4 className="title"><a >App for tecnology &amp; services<i class="bi bi-arrow-up-right"></i></a></h4>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="load-more">
                    <BrowserRouter>
                        <Link className="nav-link" to="/projects">Load more projects</Link>
                    </BrowserRouter>
                </div>

                {/* Modal incomplete */}


                <div className="modal fade" id="exampleModal1" aria-labelledby="exampleModalLabel" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row align-items-center">

                                    <div className="col-lg-6">
                                        <div className="portfolio-popup-thumbnail">
                                            <div className="image">
                                                <img className="w-100" src="assets/images/portfolio/portfolio-04.jpg" alt="slide"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="text-content">
                                            <h3>
                                                <span>Featured - Design</span> App Design Development.
                                            </h3>
                                            <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                                            <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                                            <div className="button-group mt--20">
                                                <a href="#" className="rn-btn thumbs-icon">
                                                    <span>LIKE THIS</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                </a>
                                                <a href="#" className="rn-btn">
                                                    <span>VIEW PROJECT</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </a>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal fade" id="exampleModal2" aria-labelledby="exampleModalLabel" tabIndex="-1" aria-hidden="true">
                    <div className="modal-dialog modal-dialog-centered" role="document">
                        <div className="modal-content">
                            <div className="modal-header">
                                <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-x"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                                </button>
                            </div>
                            <div className="modal-body">
                                <div className="row align-items-center">

                                    <div className="col-lg-6">
                                        <div className="portfolio-popup-thumbnail">
                                            <div className="image">
                                                <img className="w-100" src="./demotask.png" alt="slide"/>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="col-lg-6">
                                        <div className="text-content">
                                            <h3>
                                                <span>Featured - Design</span> App Design Development2.
                                            </h3>
                                            <p className="mb--30">Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate distinctio assumenda explicabo veniam temporibus eligendi.</p>
                                            <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p>
                                            <div className="button-group mt--20">
                                                <a href="#" className="rn-btn thumbs-icon">
                                                    <span>LIKE THIS</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-thumbs-up"><path d="M14 9V5a3 3 0 0 0-3-3l-4 9v11h11.28a2 2 0 0 0 2-1.7l1.38-9a2 2 0 0 0-2-2.3zM7 22H4a2 2 0 0 1-2-2v-7a2 2 0 0 1 2-2h3"></path></svg>
                                                </a>
                                                <a href="#" className="rn-btn">
                                                    <span>VIEW PROJECT</span>
                                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" class="feather feather-chevron-right"><polyline points="9 18 15 12 9 6"></polyline></svg>
                                                </a>
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
    )
}
