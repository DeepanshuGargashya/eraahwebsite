import LogInImage from '../Assets/logIn.png'
import Google from '../Assets/google.png'
import Fb from '../Assets/fb.png'
import Twitter from '../Assets/twitter.png'
import googleLogo from '../Assets/googleLogo.png'
import facebookicon from '../Assets/facebookicon.png'
import twittericon from '../Assets/twittericon.png'
import googlecircularicon from '../Assets/googlecircularicon.png'
import facebookcircleimg from '../Assets/facebookcircleimg.png'
import twittericonimg from '../Assets/twittericonimg.png'
import { NavLink } from 'react-router-dom'
import React, { useState } from 'react'
function LogIn() {
    const [activebtn, setactivebtn] = useState('');



    const handleMouseEnter = (type) => {
        setactivebtn(type);

    };

    const handleMouseLeave = (type) => {
        setactivebtn('');

    };

    return (
        <>
            {/* <div className="container-fluid log-in d-flex justify-content-center px-0 flex-wrap">
            <div className="col-md-5">
                <img style={{width:'100%'}} src={LogInImage} alt="" />
            </div>
            <div className="col-md-7 mt-5 px-5 rightt d-flex flex-column justify-content-center mb-5 pb-5">
                <h5>Log in to Eraah</h5>

                <div className="twit d-flex justify-content-enter flex-wrap">
                <div className="button d-flex">
                    <img src={Google} alt="" />
                    <p className='mb-0'>Log in with your Google Account</p>
                </div>
                <div className="face">
                    <img src={Fb} alt="" />
                </div>
                <div className="face">
                    <img src={Twitter} alt="" />
                </div>
                </div>
                <p className='text-center'>or</p>
                <div class="mb-3 numberInput">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number*</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-check">
                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                    </div>
                    <NavLink style={{textDecoration:'none'}}><div className="buttonn text-center my-3 ">Get OTP</div></NavLink>
            </div>
        </div> */}

            <div className="Login-screen">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 px-0">
                            <div className="imgs">
                                <img src={LogInImage} alt="Image" width={'100%'} />
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12">
                            <div className="LoginOptions">
                                <h5>Log in to Eraah</h5>
                                <div className="SocialMediaLogin">
                                    <div className={`box ${activebtn === 'google' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('google')} onMouseLeave={() => handleMouseLeave('google')}>
                                        {
                                            activebtn === 'google' ?
                                                <h5 className='activetext'>
                                                    <img src={googlecircularicon} alt="Google" width={'75%'} />
                                                </h5>
                                                : <img src={googleLogo} alt="Google" width={'75%'} />
                                        }
                                    </div>

                                    <div className={`box ${activebtn === 'facebook' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('facebook')} onMouseLeave={() => handleMouseLeave('facebook')}>
                                        {
                                            activebtn === 'facebook' ?
                                                <h5 className='activetext'>
                                                    <img src={facebookcircleimg} alt="facebook" width={'75%'} />
                                                </h5>
                                                :
                                                <img src={facebookicon} alt="facebook" width={'75%'} />
                                        }
                                    </div>

                                    <div className={`box ${activebtn === 'twitter' ? 'active' : ''}`} onMouseEnter={() => handleMouseEnter('twitter')} onMouseLeave={() => handleMouseLeave('twitter')}>
                                        {
                                            activebtn === 'twitter' ?
                                                <h5 className='activetext'>
                                                    <img src={twittericonimg} alt="twitter" width={'75%'} />
                                                </h5>
                                                :
                                                <img src={twittericon} alt="twitter" width={'75%'} />
                                        }
                                    </div>

                                </div>

                                <div className='d-flex orsection'>
                                    <hr className='hrtag' />
                                    <p>Or</p>
                                    <hr className='hrtag' />
                                </div>
                                <div className="row mt-2">
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <div className="inputgrp">
                                            <label htmlFor="" className='labeltag'>Full Name</label>
                                            <input type="text" className='inputtag' placeholder='Enter Full Name'/>
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <div className="inputgrp">
                                            <label htmlFor="" className='labeltag'>Phone Number*</label>
                                            <input type="number" className='inputtag' placeholder='Enter Phone Number' required/>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-4">
                                        <div className="checkboxgrp">
                                            <input type="checkbox" id='checkbox' className='checkboxinput' />
                                            <label htmlFor="checkbox" className='checkboxlabel'>
                                            Creating an account means you are okay with our<span>Terms & Conditions</span>, and <span>Private Policy</span>
                                            </label>
                                        </div>
                                        <button className='submit-btn mt-5'>Get OTP</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}

export default LogIn