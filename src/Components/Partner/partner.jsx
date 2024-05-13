import PartnerUpfront from '../../Assets/partnerUpfront.png'
import { NavLink } from 'react-router-dom'
import Reach from '../../Assets/reach.png'
import Fundraise from '../../Assets/fundraise.png'
import Aged from '../../Assets/aged.png'
import Founder from '../../Assets/founder.png'
import YellowRight from '../../Assets/yellowRight.png'
import YellowLeft from '../../Assets/yellowLeft.png'

function Partner(){
    return (
        <>
        <div className="container-fluid partner px-0">
            {/* <h1 className='text-center'>Partner NGOs</h1>
            <div className="partnerImage">
                <img className='d-flex m-auto' style={{width:'70%'}} src={PartnerUpfront} alt="" />
            </div>
            <h2 className='text-center px-5 my-5'>If your NGO specializes in providing any type of help to those in need, then you’ve come to the right place.</h2> */}

            <div className="eraahHelp d-flex justify-content-around flex-wrap" style={{backgroundColor:'#5628D2',padding:'20px'}}>
                <div className="col-md-6 mt-4">
                    <h3 className='text-white mb-5'>How Eraah can help your NGO. </h3>
                    <p className='text-white my-5'>Our entire team at Eraah is focused on creating a platform that is mutually beneficial to everyone. We work hard to ensure that you get the most out of our service, providing you accessible solutions to your problems.</p>
                    <NavLink  to={'/donate'}><div class="btn btn-primary donationButton mt-2 " style={{width:'fit-content',backgroundColor:'#FFC30D',border:'none'}} >MAKE A DONATION</div></NavLink>
                </div>
                <div className="col-md-4 mt-4">
                    <div className="d-flex">
                        <img style={{height:'50px'}} src={Reach} alt="" />
                        <div className="flex-column px-3">
                            <h2 className='text-white'>Expand Your Reach </h2>
                            <p className='text-white'>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals. </p>
                        </div>
                    </div>
                    <div className="d-flex mt-4">
                        <img style={{height:'50px'}} src={Fundraise} alt="" />
                        <div className="flex-column px-3">
                            <h2 className='text-white'>Boost Your Fundraise </h2>
                            <p className='text-white'>We can build and support community-centered services to provide opportunities for those who deserve it and empower them to be a better version of themselves.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="ngo d-flex flex-wrap justify-content-evenly mb-5">
                <div className="col-sm-6 mb-3">
                <img style={{width:'100%'}} src={Aged} alt="" />
                </div>
                <div className="col-sm-5 d-flex align-items-center mb-3">

                <h2 className='d-flex align-items-center text-center' style={{color:'#FFC30D'}}>Many have already experienced how partnering with eraah  has helped in growing their NGO.</h2>
                </div>
            </div>


            <div className="trust mt-5" style={{backgroundColor:'#EFF2F2'}}>
            <div className="trusttt d-flex justify-content-center pt-4 pb-3" >
                <div className="founder col-1 me-3">
                    <img className='d-flex m-auto' style={{width:'50%'}} src={Founder} alt="" />
                    <h5 className='text-center mb-0 '>Shrey</h5>
                    <p className='text-center'>Founder of Eraah</p>
                </div>
                <div className="why col-6 ms-4">
                <h4 >Why trust Eraah?</h4>
                <h5>We have always looked at social causes such as poverty alleviation, female empowerment, and education as key issues that were worth solving and I believe anyone can be part of the solution. </h5>
                </div>
            </div>
                <div className="grow">
                    <h2 className='mb-0'>Ready to grow your NGO?</h2>
                    <p className='mb-0' style={{fontSize:"16px"}}>Get in touch with us!</p>
                    <span  >Leave your details below so we can talk about how being an Enterprise Partner can add to your success.</span>
                    <form className='mt-4'>
                        <div className="d-flex row row-cols-2">
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">First name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">Last name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">NGO name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">NGO AIM</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">Email</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">Contact No.</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlInput1" class="form-label">What are sections of society you help?</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3">
                    <label for="exampleFormControlTextarea1" class="form-label">How can we help you?</label>
                    <textarea style={{width:'100%'}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <NavLink ><div href="#" class="btn btn-primary donationButton mt-4 " style={{width:'fit-content',backgroundColor:'#FFC30D',border:'none',padding:'10px 40px'}} >SUBMIT</div></NavLink>
                    </form>
                </div>
                
                <img  className="yellowLeftRight" style={{width:'12%'}} src={YellowLeft} alt="" />
                
                <img  className="yellowRightLeft" style={{width:'12%'}} src={YellowRight} alt="" />
                </div>



            
        </div>
        </>
    )
}

export default Partner