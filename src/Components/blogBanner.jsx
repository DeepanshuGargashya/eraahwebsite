import React, { useState } from 'react'
// import BannerImage from '../Assets/blog.png'
import ArrowRight from '../Assets/arrowRight.png'
import { NavLink, useNavigate } from 'react-router-dom'
// import BannerImage from '../Assets/blogg.jpg'
import BannerImage from '../Assets/blogg.png'
import bannercaraousel1 from '../Assets/bannercaraousel1.jpeg'
import bannercaraousel2 from '../Assets/bannercaraousel2.jpeg'
import bannercaraousel3 from '../Assets/bannercaraousel3.jpeg'
import bannercaraousel4 from '../Assets/bannercaraousel4.jpeg'
function BlogBanner() {
    const navigate = useNavigate();
    return (
        <>
            <div className="container-fluid" style={{ marginTop: '70px' }}>
                <div className="row mt-5 banner" >
                    <div id="carouselExampleControls" class="carousel slide px-0" data-bs-ride="carousel">
                        <div class="carousel-inner px-0">
                            <div class="carousel-item active">
                                <img src={bannercaraousel1} class="image-blurs d-block" alt="image 1" width={'100%'} />
                            </div>
                            <div class="carousel-item">
                                <img src={bannercaraousel2} class="image-blurs d-block" alt="image 2" width={'100%'} />
                            </div>
                            <div class="carousel-item">
                                <img src={bannercaraousel3} class="image-blurs d-block" alt="image 3" width={'100%'} />
                            </div>
                            <div class="carousel-item">
                                <img src={bannercaraousel4} class="image-blurs d-block" alt="image 4" width={'100%'} />
                            </div>
                        </div>
                        <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
                            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Previous</span>
                        </button>
                        <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
                            <span class="carousel-control-next-icon" aria-hidden="true"></span>
                            <span class="visually-hidden">Next</span>
                        </button>
                    </div>
                    {/* <img src={BannerImage} class=" px-0" alt="" /> */}
                    <div className="banner-content">
                        <h1 className='mb-0 text-center'>Positive change starts <br /> with <span>your action</span></h1>
                        <p className='text-center mt-1'>Join us in making a difference that truly matters</p>

                        <div className="btns ">

                            <button className="button mx-auto" onClick={() => navigate('/donate')}>
                                <span class="button-text">Donate now</span>
                                <img src={ArrowRight} alt="" />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogBanner