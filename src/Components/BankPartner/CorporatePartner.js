import React, { useState } from 'react'
import BecomePartner from '../../Assets/becomePartnerBackground.png'
import partners from '../../Assets/partners.png'
import { contactFormValidation } from '../../utils/Validation';
import { ContactForm } from '../../Access/ActionCreator';
import Loader from '../Loader';
export default function CorporatePartner() {
    const [message, setmessage] = useState('');
    const [Data, setData] = useState({
        fName: '',
        lName: '',
        ngoName: '',
        ngoAIM: '',
        email: '',
        contactus: '',
        sectionofsociety: '',
        helpu: '',
    });
    const [loader, setLoader] = useState(false);
    const [popupMsg, setpopupMsg] = useState('');
    const [popupshow, setPopupshow] = useState(false);

    const handlechange = (e) => {
        const { name, value } = e.target;
        if (name === 'contactus' && value.length > 10) {
            return;
        }
        setData({
            ...Data,
            [name]: value
        });
    };

    const handlenext = () => {
        let validationMsg = contactFormValidation(Data)
        if (validationMsg?.status) {
            setmessage(validationMsg)
            let obj = {
                firstName: Data?.fName,
                lastName: Data?.lName,
                ngoName: Data?.ngoName,
                ngoAim: Data?.ngoAIM,
                sections: Data?.sectionofsociety,
                description: Data?.helpu,
                email: Data?.email,
                phone: Data?.contactus
            }
            setLoader(true);
            ContactForm(obj, (response) => {
                setLoader(false)
                if (response == 'success') {
                    setPopupshow(true);
                    setpopupMsg('Form Submitted Succesfully');
                    setData({
                        fName: '',
                        lName: '',
                        ngoName: '',
                        ngoAIM: '',
                        email: '',
                        contactus: '',
                        sectionofsociety: '',
                        helpu: '',
                    });
                } else {
                    setPopupshow(true);
                    setpopupMsg('Error: Please Try Again later!')
                }
            })
        } else {
            setmessage(validationMsg)
        }

    }
    return (
        <>
            {
                loader ?
                    <Loader />
                    : ''
            }
            <div className="corporatePartner">
                <div className="container-fluid bankPartner px-0 mb-4" style={{ marginTop: '70px' }}>
                    <div className="bankBanner">
                        <img style={{ width: '100%' }} src={BecomePartner} alt="" />
                        <div className="corporateBannerContent text-center text-white w-100">
                            <h5>CORPORATE PARTNERS</h5>
                            <div className="box"></div>
                            <h1 className='partnerText'>Good partners make all the <br /> difference in the world</h1>

                        </div>
                    </div>
                </div>
                <div className="container">
                    <div className="heading">
                        <h5>Select Partners</h5>
                        <img src={partners} alt="partners" width={'100%'} style={{ margin: '20px 0px 20px 0px' }} />
                        <button className='submit-btn' style={{ marginBottom: '50px' }}>See All Partners</button>
                    </div>
                </div>

                <div className="contact-form">
                    <div className="container forms">
                        <h3>Want to become a partner?</h3>
                        <h5>Get in touch with us!</h5>
                        <p>Leave your details below so we can talk about how being an Enterprise Partner can add to your success.</p>
                        <div className="row mt-2">
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>First Name</label>
                                <input type="text" name="fName" className='inputtag' value={Data.fName} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'fName' ? message.msg : ""}</p>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>Last Name</label>
                                <input type="text" name="lName" className='inputtag' value={Data.lName} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'lName' ? message.msg : ""}</p>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>NGO name</label>
                                <input type="text" name="ngoName" className='inputtag' value={Data.ngoName} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'ngoName' ? message.msg : ""}</p>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>NGO AIM</label>
                                <input type="text" name="ngoAIM" className='inputtag' value={Data.ngoAIM} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'ngoAIM' ? message.msg : ""}</p>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>Email</label>
                                <input type="email" name="email" className='inputtag' value={Data.email} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'email' ? message.msg : ""}</p>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2">
                                <label className='labeltag'>Contact No.</label>
                                <input type="number" name="contactus" className='inputtag' value={Data.contactus} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'contactus' ? message.msg : ""}</p>
                            </div>
                            <div className="col-xs-12 mt-2">
                                <label className='labeltag'>What are sections of society you help?</label>
                                <input type="text" name="sectionofsociety" className='inputtag' value={Data.sectionofsociety} onChange={(e) => handlechange(e)} />
                                <p className='error-msg text-danger'>{message.field === 'sectionofsociety' ? message.msg : ""}</p>
                            </div>
                            <div className="col-xs-12 mt-2">
                                <label className='labeltag'>How can we help you?</label>
                                <textarea name="helpu" cols="30" rows="5" className='inputtag' value={Data.helpu} onChange={(e) => handlechange(e)} ></textarea>
                                <p className='error-msg text-danger'>{message.field === 'helpu' ? message.msg : ""}</p>
                            </div>
                        </div>
                        <div className="btns mt-3">
                            <button className='submit-btn' onClick={(e) => handlenext(e)} style={{ padding: '10px 55px' }}>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
            {
                popupshow ?
                    <div class="modal" tabindex="-1" style={{ display: 'block' }}>
                        <div class="modal-dialog" style={{ display: 'block', top: '8%', marginRight: '0px' }}>
                            <div class="modal-content">
                                <div class="modal-header" style={{ borderBottom: '0px', backgroundColor: popupMsg === 'Form Submitted Succesfully' ? 'green' : 'red' }}>
                                    <p style={{ fontSize: '25px', marginBottom: '0px', color: 'white' }}>{popupMsg}</p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setPopupshow(false)}></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    : ''}
        </>
    )
}
