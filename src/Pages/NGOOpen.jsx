import React, { useState,useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import Map from '../Components/map'
import arrowRight from '../Assets/arrow-right.png';
import ngoopenimg1 from '../Assets/ngoopenimg1.png';
import ngoopenimg2 from '../Assets/ngoopenimg2.png';
import ngoopenimg3 from '../Assets/ngoopenimg3.png';
import staricon from '../Assets/staricon.png';
import donatesectionimg2 from '../Assets/donatesectionimg2.png';
import team1 from '../Assets/team1.png';
import team2 from '../Assets/team2.png';
import team3 from '../Assets/team3.png';
import team4 from '../Assets/team4.png';
import student from '../Assets/student.png';
import instaicon from '../Assets/instaicon.png';
import facebookicon2 from '../Assets/facebookicon2.png';
import whatsappicon2 from '../Assets/whatsappicon2.png';
import linkdinicon from '../Assets/linkdinicon.png';
import pdficon from '../Assets/pdficon.png';
import teacher1 from '../Assets/teacher1.png';
import teacher2 from '../Assets/teacher2.png';
import teacher3 from '../Assets/teacher3.png';
import works1 from '../Assets/works1.png';
import works2 from '../Assets/works2.png';
import works3 from '../Assets/works3.png';
import { useLocation,useNavigate } from 'react-router-dom';
function NGOOpen() {
    const [donateActive, setdonateActive] = useState(false);
    const [ngoName,setNgoName] =useState('');
    const navigate = useNavigate();
    const location = useLocation();
    useEffect(()=>{
        setNgoName(location.state)
    },[])
    return (
        <>
            <div className="Donate_teacher-section NGO-Open">
                <div className="container">
                    <div className="top-box d-flex justify-content-evenly flex-wrap">
                        <div className="subbox mt-3">
                            <div className="circle-top me-2">
                                <div className="circles">
                                    <img src={ngoopenimg1} alt="ngoopenimg1" width={'75%'} />
                                </div>
                            </div>
                            <div className="texts">
                                <h5>780</h5>
                                <p>Students Supported</p>
                            </div>
                        </div>
                        <div className="subbox mt-3">
                            <div className="circle-top me-2">
                                <div className="circles">
                                    <img src={ngoopenimg2} alt="ngoopenimg2" width={'75%'} />
                                </div>
                            </div>
                            <div className="texts">
                                <h5>128</h5>
                                <p>Teachers Supported</p>
                            </div>
                        </div>
                        <div className="subbox mt-3">
                            <div className="circle-top me-2">
                                <div className="circles">
                                    <img src={ngoopenimg3} alt="ngoopenimg3" width={'75%'} />
                                </div>
                            </div>
                            <div className="texts">
                                <h5>564</h5>
                                <p>Children Educated</p>
                            </div>
                        </div>

                    </div>
                    <div className="teacher-about-section">
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                <div className="info-box">
                                    <div className="top-section">
                                        <div className="leftbox">
                                            <h4>YouInYou Foundation</h4>
                                            <h6>Based in<strong> Gurugram, Haryana</strong></h6>
                                        </div>
                                        <div className="rightbox">
                                            <div className="ratingbox">
                                                <div className="imgs text-center">
                                                    <img src={staricon} alt="staricon" width={'50%'} />&nbsp;
                                                </div>
                                                <h5>
                                                    4.7
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="h6 pe-4 mt-3">
                                        At YouInYou, we believe that every person has the innate willingness to do some good for people and society at large. We call upon those do-gooders to support us on our journey to power 10,000 young scholars by the year 2026.
                                    </h6>
                                    <h5 className='my-4'>Photo Gallery</h5>
                                    <div className="imgss-banner mt-4">
                                        <div id="carouselExampleControls" class="carousel slide px-0" data-bs-ride="carousel">
                                            <div class="carousel-inner px-0">
                                                <div class="carousel-item active">
                                                    <img src={donatesectionimg2} class="image-blurs d-block" alt="image 1" width={'100%'} />
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
                                    </div>
                                    <div className="numberofStudents d-flex justify-content-between mt-4">
                                        <h5>Our Team</h5>
                                        <h5 className='h5'>See All</h5>
                                    </div>
                                    <div className="studentsimage d-flex">
                                        <div className="tab1 text-center">
                                            <img src={team1} alt="team1" width={'85%'} />
                                            <p>Lameen Abdul-Malik</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={team2} alt="team2" width={'85%'} />
                                            <p>Nishant Rao</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={team3} alt="team3" width={'85%'} />
                                            <p>Nupur Garg</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={team4} alt="team4" width={'85%'} />
                                            <p>Pankaj Bansal</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={team4} alt="team4" width={'85%'} />
                                            <p>Pankaj Bansal</p>
                                        </div>

                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <div className="contact-links">
                                    <div className="top-box text-center">
                                        <h5>Spread the word</h5>
                                        <h6>A chain reaction of support starts with 1 share</h6>

                                        <div className="linkstabs d-flex mt-4">
                                            <div className="tabs2 text-center">
                                                <img src={instaicon} alt="instagram" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Instagram</h6>
                                            </div>
                                            <div className="tabs2 text-center">
                                                <img src={facebookicon2} alt="Facebook" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Facebook</h6>
                                            </div>
                                            <div className="tabs2 text-center">
                                                <img src={whatsappicon2} alt="Whatsapp" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Whatsapp</h6>
                                            </div>
                                            <div className="tabs2 text-center">
                                                <img src={linkdinicon} alt="Linkedin" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Linkedin</h6>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="bottom-box text-center">
                                        <h4>Sponsor Our Teachers</h4>
                                        <div className="boxbottom-caraousel">
                                            <OwlCarousel className='owl-theme' loop dots={false} responsiveClass={true}
                                                responsive={
                                                    {
                                                        0: {
                                                            items: 1,
                                                            dots: true,
                                                            nav: false,
                                                            loop: true,
                                                            autoplay: true,
                                                            autoplayTimeout: 3000,
                                                        },
                                                        600: {
                                                            items: 2,
                                                            dots: true,
                                                            nav: false,
                                                            loop: true,
                                                            autoplay: true,
                                                            autoplayTimeout: 3000,
                                                        },
                                                        1000: {
                                                            items: 3,
                                                            dots: true,
                                                            nav: false,
                                                            loop: true,
                                                            autoplay: true,
                                                            autoplayTimeout: 3000,
                                                        }
                                                    }
                                                }>
                                                <Cards2 image={teacher1} text={'Radhika Shetye'} />
                                                <Cards2 image={teacher2} text={'Gurpreet Singh'} />
                                                <Cards2 image={teacher3} text={'Neeraj Das'} />
                                                <Cards2 image={teacher1} text={'Radhika Shetye'} />
                                                <Cards2 image={teacher2} text={'Gurpreet Singh'} />
                                                <Cards2 image={teacher3} text={'Neeraj Das'} />
                                            </OwlCarousel>
                                        </div>
                                        <button className='submit-btn mt-3' onClick={()=>navigate('/donate')}>Donate Now  <img src={arrowRight} alt="ArrowIcon" width={'20%'} style={{ marginTop: '-3px' }} /></button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caraousels">
                    <div className="container owlcaraousel">
                        <h5>AUDITED FINANCIAL STATEMENTS</h5>
                        <OwlCarousel className='owl-theme' loop dots={false} responsiveClass={true}
                            responsive={
                                {
                                    0: {
                                        items: 1,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    },
                                    600: {
                                        items: 2,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    },
                                    1000: {
                                        items: 3,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    }
                                }
                            }>
                            <Cards image={works1} text={'Teacher teaching in classroom'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works3} text={'Teacher teaching in classroom'} />
                           <Cards image={works1} text={'Teacher teaching in classroom'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works3} text={'Teacher teaching in classroom'} />
                        </OwlCarousel>
                    </div>
                </div>

                <Map heading={'Support an NGO near you!'} text={'Explore a map with requests from NGOs across the country'} />
            </div>
        </>
    )
}
export default NGOOpen;

function Cards({ image, text }) {

    return (
        <>
            <div className="cardbox">
                <div className="cardss">
                    <div className="topsection">
                        <img src={image} alt="image" width={'100%'} height={'290px'}/>
                    </div>
                    <div className="bottomsection">
                        <h6>{text}</h6>
                    </div>
                </div>
            </div>

        </>
    )
}

function Cards2({ image, text }) {

    return (
        <>
            <div className="cardbox">
                <div className="cardss">
                    <div className="topsection">
                        <div className="imgss-circle" style={{margin:'0px auto'}}>
                            <img src={image} alt="image" width={'15%'} />
                        </div>
                    </div>
                    <div className="bottomsection">
                        <h6>{text}</h6>
                    </div>
                </div>
            </div>

        </>
    )
}