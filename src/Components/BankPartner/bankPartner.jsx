import BecomePartner from '../../Assets/becomePartnerBackground.png'
import { NavLink } from 'react-router-dom'
import Baroda from '../../Assets/baroda.png'
import Hdfc from '../../Assets/hdfc.png'
import Icici from '../../Assets/icici.png'

function BankPartner(){
    return(
        <>
        <div className="container-fluid px-0 bankPartner mb-5">
            <div className="bankBanner">
            <img style={{width:'100%'}} src={BecomePartner} alt="" />
            <div className="bankBannerContent ">
            <h1 className='text-center text-white partnerText'>Meet Our Partners </h1>
            <NavLink  to={'/BankPartner'} style={{textDecoration:'none'}}><div href="#" class="btn btn-primary partnerButton mt-4 d-flex m-auto " style={{width:'fit-content',backgroundColor:'#FFC30D',border:'none',padding:'10px 40px',textDecoration:'none',color:'white'}} >Become a partner</div></NavLink>
            </div>
            </div>

            <div className="row d-flex justify-content-center mt-5 px-0">
            <div class="card col-md-3 col-sm-5 mx-4 paginationCard mb-5" >
            <img src={Baroda} class="card-img-top" alt="..."/>
           
            <div class="card-body">

                <h5 class="card-title">Axis Bank Ltd</h5>
                <p class="card-text">We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.</p>
                <div className="childrens">
                  
                <a href="#" class="btn btn-primary purple">READ MORE</a>
                </div>
            </div>
            </div>
            <div class="card col-md-3 col-sm-5 mx-4 paginationCard mb-5" >
            <img src={Hdfc} class="card-img-top" alt="..."/>
            <div class="card-body">

                <h5 class="card-title">HDFC Bank</h5>
                <p class="card-text">We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.</p>
                <div className="childrens">
                  
                <a href="#" class="btn btn-primary purple">READ MORE</a>
                </div>
            </div>
            </div>
            <div class="card col-md-3 col-sm-5 mx-4 paginationCard mb-5" >
            <img src={Icici} class="card-img-top" alt="..."/>
            
            <div class="card-body">

                <h5 class="card-title">ICICI Bank</h5>
                <p class="card-text">We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.</p>
                <div className="childrens">
                  
                <a href="#" class="btn btn-primary purple">READ MORE</a>
                </div>
            </div>
            </div>
            <div class="card col-md-3 col-sm-5 mx-4 paginationCard mb-5" >
            <img src={Icici} class="card-img-top" alt="..."/>
            
            <div class="card-body">

                <h5 class="card-title">Bank of Baroda</h5>
                <p class="card-text">We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.</p>
                <div className="childrens">
                  
                <a href="#" class="btn btn-primary purple">READ MORE</a>
                </div>
            </div>
            </div>
           
            </div>

            <div className="grow" style={{backgroundColor:'#EFF2F2',width:'100%'}}>
                    <h1 style={{color:'#5628D2'}} className='mb-0'>Want to become partner?</h1>
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
                    <label for="exampleFormControlInput1" class="form-label">Company  name</label>
                    <input type="email" class="form-control" id="exampleFormControlInput1" />
                    </div>
                    <div class="mb-3 success">
                    <label for="exampleFormControlInput1" class="form-label">Operating fIeld</label>
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
                    <label for="exampleFormControlTextarea1" class="form-label">How can you help us?</label>
                    <textarea style={{width:'100%'}} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    <NavLink ><div href="#" class="btn btn-primary donationButton mt-4 " style={{width:'fit-content',backgroundColor:'#FFC30D',border:'none',padding:'10px 40px'}} >SUBMIT</div></NavLink>
                    </form>
                </div>

                

            

        </div>
        </>
    )
}

export default BankPartner