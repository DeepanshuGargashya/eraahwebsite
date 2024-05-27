import TeamUpfront from '../../Assets/teamUpfront.png'
import ErrahLogoBlue from '../../Assets/eraahLogoBlue.png'
import { NavLink } from 'react-router-dom'
import AwesomeTeam from '../../Assets/awesomeTeam.png'
import Skill from '../../Assets/skilll.png'
import Work from '../../Assets/work.png'
import Future from '../../Assets/future.png'
import Oppurtunity from '../../Assets/oppurtunity.png'
import Right from '../../Assets/right.png'

function Team() {
    return (
        <>
            <div className="container-fluid team px-0">
                <div className="team-container">
                    <div className="teamBanner">
                        <img style={{ width: '100%' }} src={TeamUpfront} alt="" />
                    </div>
                    <div className="teamContent">
                        <img className='d-flex m-auto ' src={ErrahLogoBlue} alt="" />
                        <p className='mb-0 text-white text-center'>In publishing and graphic design, Lorem ipsum is a placeholder text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content. Lorem ipsum may be used as a placeholder before final copy is available</p>
                        <NavLink style={{ textDecoration: 'none' }}><div href="#" class="btn btn-primary donationButton mt-4 d-flex m-auto" style={{ width: 'fit-content', backgroundColor: '#FFC30D', border: 'none', padding: '10px 10px', fontWeight: '700' }} >Join the team</div></NavLink>

                    </div>
                </div>

                <div className="awesome d-flex justify-content-evenly flex-wrap">
                    <div className="col-lg-5 col-sm-10 mt-5">
                        <h3>Why you should join our
                            awesome team ?</h3>
                        <p>we want to feel like home when you are working at Eraah for that we have curated a great set of benefits for you.</p>
                        <img style={{ width: '100%' }} src={AwesomeTeam} alt="" />

                    </div>
                    <div className="col-lg-5 col-sm-10 d-flex mt-5">
                        <div className="row row-cols-2">


                            <div className="work-container">
                                <div className="work">
                                    <img src={Work} alt="" />
                                </div>
                                <h5>Team work</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="work-container">
                                <div className="work">
                                    <img src={Future} alt="" />
                                </div>
                                <h5>Secured future</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="work-container">
                                <div className="work">
                                    <img src={Oppurtunity} alt="" />
                                </div>
                                <h5>Learning opportunity</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div>
                            <div className="work-container">
                                <div className="work">
                                    <img src={Skill} alt="" />
                                </div>
                                <h5>Upgrade skills</h5>
                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                            </div></div>
                    </div>
                </div>

                <div className="openings px-3 py-4 mt-5">
                    <h3 className='text-center'>Career openings</h3>
                    <p className='text-center pb-4'>We’re always looking for creative, talented self-starters to join the JMC
                        family. Check out our open roles below and fill out an application.</p>
                    <div className="developerOpenings d-flex justify-content-center flex-wrap">
                        <div className="col-md-2">
                            <p>HT & Admin</p>
                            <p>Engineering (20)</p>
                            <p>Support</p>
                            <p>Design</p>
                            <p>Digital Marketing</p>
                        </div>
                        <div className="col-md-7 ms-3">
                            <div className="developer d-flex mb-3">
                                <h5 className='d-flex align-items-center px-4' style={{ width: '40%' }}>Wordpress Developer</h5>
                                <div className="experience px-3">
                                    <span className='text-center'>Experience</span>
                                    <p className='text-center mb-0'>2 Years</p>
                                </div>
                                <div className="Deadline px-4">
                                    <span className='text-center'>Deadline</span>
                                    <p className='text-center mb-0'>2021-05-08</p>
                                </div>
                                <img src={Right} alt="" />
                            </div>
                            <div className="developer d-flex mb-3">
                                <h5 className='d-flex align-items-center px-4' style={{ width: '40%' }}>Javascript</h5>
                                <div className="experience px-3">
                                    <span className='text-center'>Experience</span>
                                    <p className='text-center mb-0'>2 Years</p>
                                </div>
                                <div className="Deadline px-4">
                                    <span className='text-center'>Deadline</span>
                                    <p className='text-center mb-0'>2021-05-08</p>
                                </div>
                                <img src={Right} alt="" />
                            </div>
                            <div className="developer d-flex mb-3">
                                <h5 className='d-flex align-items-center px-4' style={{ width: '40%' }}> Apps Developer</h5>
                                <div className="experience px-3">
                                    <span className='text-center'>Experience</span>
                                    <p className='text-center mb-0'>2 Years</p>
                                </div>
                                <div className="Deadline px-4">
                                    <span className='text-center'>Deadline</span>
                                    <p className='text-center mb-0'>2021-05-08</p>
                                </div>
                                <img src={Right} alt="" />
                            </div>
                            <div className="developer d-flex mb-3">
                                <h5 className='d-flex align-items-center px-4' style={{ width: '40%' }}>IOS Developer</h5>
                                <div className="experience px-3">
                                    <span className='text-center'>Experience</span>
                                    <p className='text-center mb-0'>2 Years</p>
                                </div>
                                <div className="Deadline px-4">
                                    <span className='text-center'>Deadline</span>
                                    <p className='text-center mb-0'>2021-05-08</p>
                                </div>
                                <img src={Right} alt="" />
                            </div>
                            <div className="developer d-flex mb-3">
                                <h5 className='d-flex align-items-center px-4' style={{ width: '40%' }}>Node JS Developer</h5>
                                <div className="experience px-3">
                                    <span className='text-center'>Experience</span>
                                    <p className='text-center mb-0'>2 Years</p>
                                </div>
                                <div className="Deadline px-4">
                                    <span className='text-center'>Deadline</span>
                                    <p className='text-center mb-0'>2021-05-08</p>
                                </div>
                                <img src={Right} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Team