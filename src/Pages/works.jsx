import React, { useState, useEffect } from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import HowItWorks from '../Pages/howItWorks'
import Map from '../Components/map'
import arrowRight from '../Assets/arrow-right.png';
import userverifiedicon from '../Assets/userverifiedicon.png';
import moneybag from '../Assets/moneybag.png';
import staricon from '../Assets/staricon.png';
import donatesectionimg from '../Assets/donate-section-img.png';
import student from '../Assets/student.png';
import instaicon from '../Assets/instaicon.png';
import facebookicon2 from '../Assets/facebookicon2.png';
import twitterLogo10 from '../Assets/twitterLogo10.png';
import whatsappicon2 from '../Assets/whatsappicon2.png';
import linkdinicon from '../Assets/linkdinicon.png';
import donateicon from '../Assets/donateicon.png';
import youtubeicon3 from '../Assets/youtubeicon3.png';
import pdficon from '../Assets/pdficon.png';
import works1 from '../Assets/works1.png';
import works2 from '../Assets/works2.png';
import works3 from '../Assets/works3.png';
import { useNavigate, useLocation } from 'react-router-dom';
import { GetTeacherData } from '../Access/ActionCreator';
import Loader from '../Components/Loader';
function Works() {
    const [donateActive, setdonateActive] = useState(false)
    const navigate = useNavigate();
    const location = useLocation();
    const [teacherData, setTeacherData] = useState([]);
    const [teacherId, setTeacherId] = useState('');
    const [loader, setLoader] = useState(false);
    const [LoginModal,setLoginModal] =useState(false);


    useEffect(() => {
        setLoader(true);
        if (location?.state?._id == undefined || location?.state?._id == null || location?.state?._id == '') {
            navigate('/');
        } else {

            setTeacherId(location?.state?._id)
            GetTeacherData(location?.state?._id, (callback) => {
                setLoader(false);
                if (callback && callback?.data?.message == "success" && callback?.data?.data) {
                    setTeacherData(callback?.data?.data)
                } else if (callback?.error == true) {
                    navigate('/')
                }
                else {
                    console.log(callback)
                }
            })
        }
    }, [])
    const handlePopupbtn=()=>{
        setLoginModal(false);
        navigate('/logIn')
    }
    return (
        <>
            {/* <HowItWorks/>
<Map/> */}
            {
                loader ?
                    <Loader />
                    : ''}
            <div className="Donate_teacher-section">
                <div className="container">
                    <div className="top-box d-flex justify-content-evenly flex-wrap">
                        <div className="subbox mt-3">
                            <div className="circle-top me-2">
                                <div className="circles">
                                    <img src={userverifiedicon} alt="userverifiedicon" width={'75%'} />
                                </div>
                            </div>
                            <div className="texts">
                                <h5>{teacherData?.attendance?.length > 0 ? teacherData?.attendance + '%' : '0%'}</h5>
                                <p>Teacher Attendance</p>
                            </div>
                        </div>
                        <div className="subbox mt-3">
                            <div className="circle-top me-2">
                                <div className="circles">
                                    <img src={moneybag} alt="moneybag" width={'75%'} />
                                </div>
                            </div>
                            <div className="texts">
                                <h5>₹78,999</h5>
                                <p>Money Needed</p>
                            </div>
                        </div>
                        <div className="subbox mt-3">
                            <button className='submit-btn' onClick={() => navigate('/payment')}>Donate Now <img src={arrowRight} alt="ArrowIcon" width={'20%'} style={{ marginTop: '-3px' }} /></button>
                        </div>
                    </div>
                    <div className="teacher-about-section">
                        <div className="row">
                            <div className="col-lg-7 col-sm-12">
                                <div className="info-box">
                                    <div className="top-section">
                                        <div className="leftbox">
                                            <h4>{teacherData?.name || ''}</h4>
                                            <h6>Affiliated with <a onClick={() => navigate(`/NGO/${encodeURIComponent(teacherData?.school?.schoolName || '')}`, { state: teacherData?.school?.schoolName })} style={{ cursor: 'pointer' }}>{teacherData?.school?.schoolName || ''}</a></h6>
                                        </div>
                                        <div className="rightbox">
                                            <div className="ratingbox">
                                                <div className="imgs text-center">
                                                    <img src={staricon} alt="staricon" width={'50%'} />&nbsp;
                                                </div>
                                                <h5>
                                                    4.5
                                                </h5>
                                            </div>
                                        </div>
                                    </div>
                                    <h6 className="h6 mt-3">
                                        Innovative educator fostering creativity and critical thinking in Indian classrooms. She is from Nagpur, and has a MA in English Literature from Calcutta University.
                                    </h6>
                                    <div className="tabs-section flex-wrap">
                                        {teacherData?.teachSubject && teacherData?.teachSubject?.length >0 ?
                                            <div className="tabs mt-2" style={{ backgroundColor: '#D2FCA8' }}>
                                                <h5>
                                                {teacherData?.teachSubject?.map((value,index)=>{
                                                    if (index !== teacherData.teachSubject.length - 1) {
                                                        return `${value?.subName}, `;
                                                    } else {
                                                        return `${value?.subName} Teacher`;
                                                    }
                                                })  }
                                                </h5>
                                                {/* <h5>{teacherData?.teachSubject?.subName} Teacher</h5> */}
                                            </div>
                                            : ''}
                                        {
                                            teacherData?.teachSclass && teacherData?.teachSclass?.length > 0 ?
                                                <div className="tabs mt-2" style={{ backgroundColor: '#FFDBF5' }}>
                                                    <h5>
                                                        {teacherData?.teachSclass?.map((value, index) => {
                                                            if (index !== teacherData.teachSclass.length - 1) {
                                                                return `${value.sclassName}, `;
                                                            } else {
                                                                return `${value.sclassName} Class`;
                                                            }
                                                        })}
                                                    </h5>
                                                </div>
                                                : ""
                                        }
                                        <div className="tabs mt-2" style={{ backgroundColor: '#BDE7FF' }}>
                                            <h5>3+ years of Experience</h5>
                                        </div>

                                    </div>

                                    <div className="imgss-banner mt-4">
                                        {/* <img src={teacherData?.photoUrl || donatesectionimg} alt="Teacher Image" width={'100%'} style={{height:'315px',objectFit:'contain'}}/> */}
                                        <img src={teacherData?.photoUrl || ''} alt="Teacher Image" width={'100%'} style={{height:'230px',objectFit:'contain'}}/>
                                    </div>
                                    <div className="numberofStudents d-flex justify-content-between mt-4">
                                        <h5>Students</h5>
                                        <h5 className='h5'>Children Taught &nbsp;<span>{teacherData?.studentsList?.length || 0}</span></h5>
                                    </div>
                                    <div className="studentsimage d-flex" style={{ overflowX: 'scroll' }}>
                                        {
                                            teacherData?.studentsList && teacherData?.studentsList?.length > 0 ?
                                                teacherData?.studentsList.map((value, index) => {
                                                    // if (index >= 5) {
                                                    //     return
                                                    // }
                                                    return (
                                                        <div className="tab1 text-center" key={index} style={{minWidth:'20%',filter:'blur(6px)',cursor:'pointer'}} onClick={()=>setLoginModal(true)}>
                                                            <img src={value.photoUrl || ''} alt="student" width={'85%'} style={{height:'100px',objectFit:'cover'}} />
                                                            <p>{value.name || ''}</p>
                                                        </div>
                                                    )
                                                })
                                                : ''}
                                         {/* <div className="tab1 text-center" >
                                            <img src={student} alt="student" width={'85%'} />
                                            <p>Karan Vir</p>
                                        </div>
                                       <div className="tab1 text-center">
                                            <img src={student} alt="student" width={'85%'} />
                                            <p>Karan Vir</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={student} alt="student" width={'85%'} />
                                            <p>Karan Vir</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={student} alt="student" width={'85%'} />
                                            <p>Karan Vir</p>
                                        </div>
                                        <div className="tab1 text-center">
                                            <img src={student} alt="student" width={'85%'} />
                                            <p>Karan Vir</p>
                                        </div> */}


                                    </div>

                                </div>
                            </div>
                            <div className="col-lg-5 col-sm-12">
                                <div className="contact-links">
                                    <div className="top-box text-center">
                                        <h5>Spread the word</h5>
                                        <h6>A chain reaction of support starts with 1 share</h6>

                                        <div className="linkstabs d-flex mt-4">
                                            <a className="tabs2 text-center" href='https://www.instagram.com/eraah_org?igsh=M3k3NzMyMmt6b20=' target="_blank" style={{textDecoration:'none'}}>
                                                <img src={instaicon} alt="instagram" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Instagram</h6>
                                            </a>
                                            <a className="tabs2 text-center" href='https://www.linkedin.com/company/eraah/' target="_blank" style={{textDecoration:'none'}}>
                                                <img src={linkdinicon} alt="Linkedin" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Linkedin</h6>
                                            </a>
                                            <a className="tabs2 text-center" href='https://x.com/eraah_org?s=21&t=78VDFA9U7opi0vJ_Df7MnQ' target="_blank" style={{textDecoration:'none'}}>
                                                <img src={twitterLogo10} alt="Twitter" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Twitter</h6>
                                            </a>
                                            <a className="tabs2 text-center" href='https://youtube.com/@eraah_org?si=TDb_DjRKMnPBsWrf' target="_blank" style={{textDecoration:'none'}}>
                                                <img src={youtubeicon3} alt="youtube" width={'50%'} />
                                                <h6 className='h6Name mt-2'>Youtube</h6>
                                            </a>
                                        </div>
                                    </div>
                                    <div className="bottom-box text-center">
                                        <h4>Support {teacherData?.name || ''}</h4>
                                        <div className="boxbottom">
                                            <div className="btnbox" onClick={() => (donateActive === true ? navigate('/payment') : '')}>
                                                <div className={`arrowbox ${donateActive === true ? 'activehover' : ''}`} onMouseEnter={() => setdonateActive(true)} onMouseLeave={() => setdonateActive(false)}>
                                                    <div className="imgss">
                                                        <img src={arrowRight} alt="arrowRight" width={'70%'} />
                                                    </div>
                                                </div>
                                                <div className="texts" onMouseEnter={() => setdonateActive(true)} onMouseLeave={() => setdonateActive(false)}>
                                                    <img src={donateicon} alt="donateicon" width={'50%'} />
                                                    <h5>Donate Now</h5>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="caraousels">
                    <div className="container owlcaraousel">
                        <h5>PROOF OF PROGRESS</h5>
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
                            {/* <Cards image={works1} text={'Teacher teaching in classroom'} /> */}
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            {/* <Cards image={works3} text={'Teacher teaching in classroom'} /> */}
                            {/* <Cards image={works1} text={'Teacher teaching in classroom'} /> */}
                            <Cards image={works2} text={'Reportcard1.pdf'} />
                            {/* <Cards image={works3} text={'Teacher teaching in classroom'} /> */}

                        </OwlCarousel>
                    </div>
                </div>

                <Map heading={'Support a Teacher near you!'} text={'Explore a map with requests from teachers across the country'} />
            </div>

            {
                LoginModal ?
                <>
                <div className="modal-background-blur"></div>
                <div class="modal" tabindex="-1" style={{display:'block',top:'20%'}}>
                <div class="modal-dialog w-25">
                  <div class="modal-content">
                    <div class="modal-header" style={{borderBottom:'none'}}>
                      <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>setLoginModal(false)}></button>
                    </div>
                    <div class="modal-body text-center">
                      <p style={{fontSize:'20px'}}>To Know More About us </p>
                      <button type="button" class="btn" style={{backgroundColor:'#6100ff',color:'#fff',padding:'5px 35px'}} onClick={()=>handlePopupbtn()}>Login</button>
                    </div>
                  </div>
                </div>
              </div>
          </> :'' }

        </>
    )
}

export default Works;

function Cards({ image, text }) {

    return (
        <>
            <div className="cardbox">
                <div className="cardss">
                    <div className="topsection">
                        <img src={image} alt="image" width={'100%'} height={'290px'} />
                    </div>
                    <div className="bottomsection">
                        <h6>{text}</h6>
                    </div>
                </div>
            </div>

        </>
    )
}