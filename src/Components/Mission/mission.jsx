import MissionKid from '../../Assets/missionKid.png'
import Hurray from '../../Assets/hurray.png'
import Mision from '../../Assets/mission.png'
import Vision from '../../Assets/vision.png'
import RightArrow from '../../Assets/rightArrow.png'
import Water from '../../Assets/water.png'
import Food from '../../Assets/food.png'
import Charity from '../../Assets/charity.png'
import missionbannerimg from '../../Assets/backgrouncolor.png'
import missiontabimage from '../../Assets/missiontabimage.png'
import eyeicon from '../../Assets/eyeicon.png'
// import missionbannerimg from '../../Assets/mission-banner-img.png'
import { NavLink, useNavigate } from 'react-router-dom'

function Mission() {
    const navigate = useNavigate();
    return (
        <>
            {/* <div className="container-fluid missionPage px-0">
                <img className='d-flex m-auto missionKid mb-4' src={MissionKid} alt="" />
                <div className="hurray" style={{ position: 'relative' }}>
                    <img className='hurrayImage' style={{ width: '100%', height: '80dvh' }} src={Hurray} alt="" />
                    <div className="upperContainer d-flex flex-column align-items-center">
                        <div className="d-flex justify-content-evenly">
                            <div className="mission" style={{ width: '40%' }}>
                                <div className="d-flex align-items-center">
                                    <img style={{ width: '25%' }} className='px-3 py-2' src={Mision} alt="" />
                                    <h2 className='ps-3'>Mission</h2>
                                </div>
                                <p>“Bringing transparency by making impact visible of every cent donated”</p>
                            </div>
                            <div className="mission" style={{ width: '40%' }}>
                                <div className="d-flex align-items-center">
                                    <img style={{ width: '25%' }} className='px-3 py-2' src={Vision} alt="" />
                                    <h2 className='ps-3'>Vision</h2>
                                </div>
                                <p>“100 million users” (1% plus of
                                    the world donating)</p>
                            </div>
                        </div>
                        <div className="volunteer mt-4" style={{ width: '48%' }}>
                            <h3 className='text-white text-center pt-4'>
                                “Each contribution matters”
                            </h3>
                            <div className="d-flex float-end pt-4 volContent">
                                <h5 className='text-white'>become volunteer</h5>
                                <img src={RightArrow} alt="" />
                            </div>
                        </div>
                        <h2 className='text-center mt-3' style={{ color: '#5628D2' }}>
                            “Re-Igniting the spirit of giving back”</h2>
                    </div>
                </div>

                <div className="d-flex justify-content-center align-itemss-center supporters flex-wrap">


                    <div className="col-md-3 col-sm-4 me-2 pt-3">
                        <h3 className='text-center'>100+</h3>
                        <p className='text-center'>Number of Supporters</p>
                    </div>
                    <div className="col-md-3 col-sm-4 me-2 pt-3">
                        <div className="verticalLine">
                            <h3 className='text-center'>10K+</h3>
                            <p className='text-center'>Volunteers Worldwide</p>
                        </div>
                    </div>
                    <div className="col-md-3 col-sm-4 me-2 pt-3">
                        <div className="verticalLine3">
                            <h3 className='text-center' >10L+</h3>
                            <p className='text-center' >We've Helped Raise</p>
                        </div>
                    </div>
                </div>

                <div className="causes d-flex flex-column " style={{ backgroundColor: '#EFF2F2' }}>
                    <h1 className='text-center pt-5'>Our Recent Causes</h1>
                    <div className="d-flex justify-content-center flex-wrap">
                        <div className="causesCard col-md-3 col-sm-3 mx-3 my-4">
                            <div className="water text-center mb-3">Water</div>
                            <div class="card  paginationLatest " >
                                <img src={Water} class="card-img-top" alt="..." />
                                <h5 class="card-title text-center mb-0" style={{ padding: '10px 10px 10px 10px', color: '#3A1700', backgroundColor: '#F3F2E7' }}>Bring together people who care about a cause</h5>
                                <div className="childrensPost" style={{ backgroundColor: '#F3F2E7' }}>
                                    <span>&#x20B9;4,373</span>
                                    <span className="count">&#x20B9;10,000 Goal</span>
                                </div>
                                <div class="card-body" style={{ backgroundColor: '#F3F2E7' }}>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <NavLink to={'/donate'} style={{ textDecoration: 'none' }}><a class="btn btn-primary donationButton  mt-4" >Make A Donation</a></NavLink>
                                </div>
                            </div>

                        </div>
                        <div className="causesCard col-md-3 col-sm-3 mx-3 my-4">
                            <div className="water text-center mb-3">Food</div>
                            <div class="card  paginationLatest " >
                                <img src={Food} class="card-img-top" alt="..." />
                                <h5 class="card-title text-center mb-0" style={{ padding: '10px 10px 10px 10px', color: '#3A1700', backgroundColor: '#F3F2E7' }}>Together people who care about a cause</h5>
                                <div className="childrensPost" style={{ backgroundColor: '#F3F2E7' }}>
                                    <span>&#x20B9;4,373</span>
                                    <span className="count">&#x20B9;10,000 Goal</span>
                                </div>
                                <div class="card-body" style={{ backgroundColor: '#F3F2E7' }}>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <NavLink to={'/donate'} style={{ textDecoration: 'none' }}><a class="btn btn-primary donationButton  mt-4" >Make A Donation</a></NavLink>
                                </div>
                            </div>

                        </div>
                        <div className="causesCard col-md-3 col-sm-3 mx-3 my-4">
                            <div className="water text-center mb-3">Charity</div>
                            <div class="card  paginationLatest " >
                                <img src={Water} class="card-img-top" alt="..." />
                                <h5 class="card-title text-center mb-0 pb-4" style={{ padding: '10px 10px 10px 10px', color: '#3A1700', backgroundColor: '#F3F2E7' }}>People who care about a cause</h5>
                                <div className="childrensPost" style={{ backgroundColor: '#F3F2E7' }}>
                                    <span>&#x20B9;4,373</span>
                                    <span className="count">&#x20B9;10,000 Goal</span>
                                </div>
                                <div class="card-body" style={{ backgroundColor: '#F3F2E7' }}>
                                    <div class="progress">
                                        <div class="progress-bar" role="progressbar" style={{ width: '25%' }} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                                    </div>
                                    <NavLink to={'/donate'} style={{ textDecoration: 'none' }}><a class="btn btn-primary donationButton  mt-4" >Make A Donation</a></NavLink>
                                </div>
                            </div>

                        </div>
                    </div>


                    <div className="px-5">
                        <div className="btn explore mt-5 mb-3 d-flex m-auto "  >Explore All</div>
                        <h5 style={{ color: '#3A170080' }} >It is about giving back to the community, and making the world a better place</h5>
                        <NavLink to={'/donate'}><a href="#" class="btn btn-primary donationButton mt-2 mb-5" style={{ width: 'fit-content', backgroundColor: '#FFC30D', border: 'none' }} >MAKE A DONATION</a></NavLink>
                    </div>
                </div>
            </div> */}
            <div className="Mission">
                <div className="container-fluid" style={{ marginTop: '70px' }}>
                    <div className="row mt-5 missionimgs" >
                        <div className="imgs">
                            <img src={missionbannerimg} class=" px-0" alt="" style={{ width: '100%' }} />
                            <div className="mission-content">
                                <h5>ABOUT US</h5>
                                <div className="box"></div>
                                <h1 className='mt-5'>Bringing transperancy and <br /> making impact visible of <span>every <br /> rupee donated</span></h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="container tabss">
                    <div className="row">
                        <div className="col-md-6 col-xs-12">
                            <div className="boxes text-center">
                                <div className="circle">
                                    <img src={missiontabimage} alt="missiontabimage" />
                                </div>
                                <p className='mt-1'>Mission</p>
                                <h5>Visible Outcomes</h5>
                                <p className='mt-1'>Ensuring Transparency for Every <br/> Donated Rupee</p>
                            </div>
                        </div>
                        <div className="col-md-6 col-xs-12">
                            <div className="boxes text-center">
                                <div className="circle">
                                    <img src={eyeicon} alt="missiontabimage" />
                                </div>
                                <p className='mt-1'>Vision</p>
                                <h5>100 million users</h5>
                                <p className='mt-1'>(1% plus of the world donating)</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Mission