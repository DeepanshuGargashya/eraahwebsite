import LogInImage from '../Assets/logIn.png'
import Google from '../Assets/google.png'
import Fb from '../Assets/fb.png'
import Twitter from '../Assets/twitter.png'

function SignUp(){
    return(
        <>
        <div className="container-fluid log-in d-flex justify-content-center px-0 flex-wrap">
            <div className="col-md-5">
                <img style={{width:'100%'}} src={LogInImage} alt="" />
            </div>
            <div className="col-md-7 rightt px-5 d-flex flex-column justify-content-center mt-5">
                <h5>Sign Up to Eraah</h5>

                <div className="twit d-flex justify-content-enter flex-wrap">
                <div className="button d-flex">
                    <img src={Google} alt="" />
                    <p className='mb-0'>Sign in with your Google Account</p>
                </div>
                <div className="face">
                    <img src={Fb} alt="" />
                </div>
                <div className="face">
                    <img src={Twitter} alt="" />
                </div>
                </div>
                <p className='text-center'>or</p>
                <div className="d-flex  justify-content-between flex-wrap">

                <div class="mb-3 numberInputt">
                    <label for="exampleFormControlInput1" class="form-label">Full Name</label>
                    <input style={{width:'100%'}} type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                <div class="mb-3 numberInputt">
                    <label for="exampleFormControlInput1" class="form-label">Phone Number*</label>
                    <input style={{width:'100%'}} type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                </div>
                <div class="mb-3 numberInput">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input style={{width:'100%'}} type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="form-check">
                    <input  class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                    <label class="form-check-label" for="flexCheckDefault">
                        Remember me
                    </label>
                    </div>
                    <div className="buttonn text-center my-3 ">Get OTP</div>
            </div>
        </div>

        </>
    )
}

export default SignUp