import LogInImage from '../Assets/logIn.png'
import Google from '../Assets/google.png'
import Fb from '../Assets/fb.png'
import Twitter from '../Assets/twitter.png'
import { NavLink } from 'react-router-dom'

function LogIn(){
    return(
        <>
        <div className="container-fluid log-in d-flex justify-content-center px-0 flex-wrap">
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
        </div>

        </>
    )
}

export default LogIn