import React from 'react'

export default function Modal(props) {
    return (
        <div className="modal fade" id={"exampleModal"+props.id} aria-labelledby="exampleModalLabel" tabIndex="-1" aria-hidden="true">
            <div className="modal-dialog modal-dialog-centered" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <button type="button" className="close" data-bs-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true"><svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" ><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg></span>
                        </button>
                    </div>
                    <div className="modal-body">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="portfolio-popup-thumbnail">
                                    <div className="image">
                                        <img className="w-100" src={props.project.Image_url+"?raw=true"} alt="slide"/>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="text-content">
                                    <h3>
                                        <span>Featured - {props.project.Domain}</span> {props.project.Name}.
                                    </h3>
                                    <p className="mb--30">{props.project.Description}</p>
                                    {/* <p>Consectetur adipisicing elit. Cupiditate distinctio assumenda. dolorum alias suscipit rerum maiores aliquam earum odit, nihil culpa quas iusto hic minus!</p> */}
                                    <div className="button-group mt--20">
                                        <a target="_blank" href={props.project.Project_url} className="rn-btn">
                                            <span>VIEW PROJECT</span>
                                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"  strokeLinejoin="round" ><polyline points="9 18 15 12 9 6"></polyline></svg>
                                        </a>
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
