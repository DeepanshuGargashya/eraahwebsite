import First from '../Assets/first.png'
import Money from '../Assets/money.png'
import ArrowRight from '../Assets/arrowRight.png'
import Laxmi from '../Assets/laxmi.png'
import Square from '../Assets/square.png'
import Insta from '../Assets/insta.png'
import Facebook from '../Assets/facebook.png'
import Whatsapp from '../Assets/whatsapp.png'
import Linkedin from '../Assets/linkedin.png'
import CopyLink from '../Assets/copylink.png'
import GooglePay from '../Assets/googlePay.png'
import { NavLink } from 'react-router-dom'

function HowItWorks(){
    return (
        
<> 
       {/* <div className="container-fluid"> */}
       
    <div className="container " >
        <div className="row d-flex justify-content-around first-heading mb-3 mx-3  ">
        <div className="first-part  py-3 col-md-4 m-auto">
        <div className="d-flex justify-content-center align-items-center">
            <img src={First} alt="" />
            <div className="text px-3">
                <h4>231</h4>
                <p>Total Donors</p>
            </div>
        </div></div>
        <div className="first-part py-3 col-md-4">
        <div className="d-flex justify-content-center align-items-center">
            <img src={Money} alt="" />
            <div className="text px-3">
                <h4>₹78,999</h4>
                <p>Money Needed</p>
            </div>
        </div></div>
        <div className="first-part py-4 col-md-4">
            <button class="button d-flex justify-content-center m-auto">
            <span class="button-text">Donate now</span>
            <img src={ArrowRight} alt="" />
            </button>

        </div>
        </div>    

        <div className="row  mx-3">
            <div className="col-md-6 mt-5">
                <h1>Laxmi Prasad</h1>
                <p>Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.</p>
                <img className='laxmi' src={Laxmi} alt="" />
                <div className="row students py-2 ">
                    <span className='col fw-bolder'>Laxmi’s students</span>
                    <p className='col text-end'>Children Taught  :12</p>

                </div>
                <div className="row images">
                    <img src={Square} alt="" />
                    <img src={Square} alt="" />
                    <img src={Square} alt="" />
                    <img src={Square} alt="" />
                </div>

            </div>
            <div className="col-md-6">
                <div className="boost mt-5">
                    <h3 className='text-center'>Give Laxmi a boost!</h3>
                    <p className='text-center'>A chain reaction of support starts with 1 share</p>
                    <div className="row d-flex justify-content-center">

                        <div className="insta">
                        <img className='m-auto' src={Insta} alt="" />
                        <p className='text-center'>Instagram</p>
                        </div>
                        <div className="insta">
                        <img className='m-auto' src={Facebook} alt="" />
                        <p className='text-center'>Facebook</p>
                        </div>
                        <div className="insta">
                        <img className='m-auto' src={Whatsapp} alt="" />
                        <p className='text-center'>WhatsApp</p>
                        </div>
                        <div className="insta">
                        <img className='m-auto' src={Linkedin} alt="" />
                        <p className='text-center'>LinkedIn</p>
                        </div>

                    </div>
                    <div className="d-flex">
                    <input class="form-control me-2" type="search" placeholder="eraah.org....." aria-label="Search"/>
                    <div className="copy-link">
                        <img className='m-auto' src={CopyLink} alt="" />
                        <span>Copy Link</span>
                    </div>

                    </div>
                </div>
                <div className="sign-in">
                    <p className='text-center'>Sign in to Pay</p>
                    <div className="d-flex justify-content-center">
                    <img className='mx-3' src={GooglePay} alt="" />
                    <img className='mx-3' src={Facebook} alt="" />
                    </div>
                    <p className='text-center'>Or</p>
                    <input type="text" class="form-control mb-4 email" placeholder="Enter email" aria-label="Username" aria-describedby="basic-addon1"/>
                    <input type="text" class="form-control mb-3 email" placeholder="Enter password" aria-label="Username" aria-describedby="basic-addon1"/>
                    <div className="text-center">
                    <button type="button" class="btn btn-outline-primary login mx-2 my-2">Log in</button>
                    <NavLink to={'/signUp'}><button type="button" class="btn btn-outline-primary create mx-2 my-2">Create an Account</button></NavLink>
                    </div>


                </div>
            </div>
        </div>
    </div>


{/* </div> */}

</>
    )
}

export default HowItWorks