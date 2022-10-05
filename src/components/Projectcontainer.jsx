import React from 'react'

export default function Projectcontainer(props) {
    return (
        <div data-aos="fade-up" data-aos-once="true" className="col-lg-6 col-xl-4 col-md-6 col-12 mt--50 mt_md--30 mt_sm--30 aos-init aos-animate">
            <div className="rn-portfolio"  data-bs-toggle="modal" data-bs-target={"#exampleModal"+props.id}>
                <div className="inner">
                    <div className="thumbnail">
                        <a >
                            <img src={props.project.Image_url}/>
                        </a>
                    </div>
                    <div className="content">
                        <div className="category-info">
                            <div className="category-list">
                                <a >{props.project.Domain}</a>
                            </div>
                        </div>
                        <h4 className="title"><a >{props.project.Heading}<i className="feather-arrow-up-right"></i></a></h4>
                    </div>
                </div>
            </div>
        </div>
    )
}
