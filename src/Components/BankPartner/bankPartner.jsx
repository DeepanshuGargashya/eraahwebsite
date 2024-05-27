import BecomePartner from '../../Assets/becomePartnerBackground.png'
import { NavLink, useNavigate } from 'react-router-dom'
import Baroda from '../../Assets/baroda.png'
import Hdfc from '../../Assets/hdfc.png'
import Icici from '../../Assets/icici.png'
import React, { useState } from 'react';
function BankPartner() {

    const arraydata = [
        {
            img: Baroda,
            title: 'Axis Bank Ltd',
            text: 'We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.',
            navigation: '/bankPartner',
        },
        {
            img: Hdfc,
            title: 'HDFC Bank',
            text: 'We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.',
            navigation: '/bankPartner',
        },
        {
            img: Icici,
            title: 'ICICI Bank',
            text: 'We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.',
            navigation: '/bankPartner',
        },
        {
            img: Icici,
            title: 'Bank of Baroda',
            text: 'We understand your lifestyle, and therefore, we offer a range of personal banking solutions created to deliver seamless, consistent and rewarding experiences at every touchpoint.',
            navigation: '/bankPartner',
        },
    ];
    return (
        <>
            <div className="container-fluid bankPartner px-0 mb-5" style={{ marginTop: '150px' }}>
                <div className="bankBanner">
                    <img style={{ width: '100%' }} src={BecomePartner} alt="" />
                    <div className="bankBannerContent ">
                        <h1 className='text-center text-white partnerText'>Meet Our Partners </h1>
                        <NavLink to={'/BankPartner'} style={{ textDecoration: 'none' }}><div href="#" class="btn btn-primary partnerButton mt-4 d-flex m-auto " style={{ width: 'fit-content', backgroundColor: '#FFC30D', border: 'none', padding: '10px 40px', textDecoration: 'none', color: 'white' }} >Become a partner</div></NavLink>
                    </div>
                </div>
            </div>
            <div className="container-fluid bankPartner">
                <div className="row mt-5 d-flex justify-content-center">
                    {
                        arraydata.map((value, index) => {
                            return (
                                <BankCards key={index} imgtag={value.img} title={value.title} text={value.text} navigation={value.navigation} />
                            )
                        })
                    }

                </div>

                <div className="grow mb-3" style={{ backgroundColor: '#EFF2F2', width: '100%' }}>
                    <h1 style={{ color: '#5628D2' }} className='mb-0'>Want to become partner?</h1>
                    <p className='mb-0' style={{ fontSize: "16px" }}>Get in touch with us!</p>
                    <span  >Leave your details below so we can talk about how being an Enterprise Partner can add to your success.</span>
                    <form className='mt-4'>
                        <div className="d-flex row row-cols-2">
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">First name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">Last name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">Company  name</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">Operating fIeld</label>
                                <input type="text" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">Email</label>
                                <input type="email" class="form-control" id="exampleFormControlInput1" />
                            </div>
                            <div class="mb-3 success">
                                <label for="exampleFormControlInput1" class="form-label">Contact No.</label>
                                <input type="number" class="form-control" id="exampleFormControlInput1" />
                            </div>
                        </div>
                        <div class="mb-3">
                            <label for="exampleFormControlTextarea1" class="form-label">How can you help us?</label>
                            <textarea style={{ width: '100%' }} class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                        </div>
                        <NavLink ><div href="#" class="btn btn-primary donationButton mt-4 " style={{ width: 'fit-content', backgroundColor: '#FFC30D', border: 'none', padding: '10px 40px', borderRadius: '5px' }} >SUBMIT</div></NavLink>
                    </form>
                </div>
            </div>
        </>
    )
}

export default BankPartner;

function BankCards({ imgtag, title, text, navigation }) {
    const navigate = useNavigate();
    return (
        <>
            <div class="col-lg-4 col-md-6 col-xs-12 colss">
                <div className="bankcards">
                    <img src={imgtag} class="card-img-top" alt="..." />

                    <div class="cardbody">
                        <h5 class="cardtitle">{title}</h5>
                        <p class="cardtext">{text}</p>
                        <div className="btns">
                            <button class="btn btn-primary purple" onClick={() => navigate(navigation)}>READ MORE</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}