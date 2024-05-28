import React, { useState } from 'react'
import callicon from '../Assets/callicon.png'
import emailicon from '../Assets/emailicon.png'
import locationicon from '../Assets/locationicon.png';
import {contactFormValidation} from '../utils/Validation';

export default function ContactUs() {
    const [message,setmessage] = useState('');
    const [Data, setData] = useState({
        fName: '',
        lName: '',
        ngoName: '',
        ngoAIM: '',
        email: '',
        contactus:'',
        sectionofsociety:'',
        helpu:'',
    });

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
        let validationMsg= contactFormValidation(Data)
        if(validationMsg?.status){
            setmessage(validationMsg)
     }else{
        setmessage(validationMsg)
        }
     
 }
    return (
        <>
            <div className="contactus">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-5 col-sm-12 mt-4">
                            <div className="box">
                                <h2>Contact us</h2>
                                <h6 className='mt-3'>Not sure what you need? The team at Eraah will be happy to assist you with any of your queries.</h6>

                                <div className="subbox">
                                    <div className="datas d-flex">
                                        <img src={callicon} alt="call" width={'8%'} />
                                        <h5>+91 9958828233</h5>
                                    </div>
                                    <div className="datas d-flex">
                                        <img src={emailicon} alt="emailicon" width={'8%'} />
                                        <h5>shrey.bansal@eraah.org</h5>
                                    </div>
                                    <div className="datas d-flex">
                                        <img src={locationicon} alt="locationicon" width={'8%'} />
                                        <h5>B-38, Block M, Old DLF Colony,<br /> Sector 14, Gurugram, Haryana</h5>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-7 col-sm-12 mt-4">
                            <div className="contactform">
                                <h3>Let’s get in touch!</h3>
                                <p className='mt-1'>Leave your details below so we can talk about how being an Enterprise Partner can add to your success.</p>
                                <div className="row mt-2">
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>First Name</label>
                                        <input type="text" name="fName" className='inputtag' value={Data.fName} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'fName' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>Last Name</label>
                                        <input type="text" name="lName" className='inputtag' value={Data.lName} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'lName' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>NGO name</label>
                                        <input type="text" name="ngoName" className='inputtag' value={Data.ngoName} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'ngoName' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>NGO AIM</label>
                                        <input type="text" name="ngoAIM" className='inputtag' value={Data.ngoAIM} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'ngoAIM' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>Email</label>
                                        <input type="email" name="email" className='inputtag' value={Data.email} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'email' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-md-6 col-xs-12 mt-2">
                                        <label className='labeltag'>Contact us</label>
                                        <input type="number" name="contactus" className='inputtag' value={Data.contactus} onChange={(e)=>handlechange(e)}/>
                                        <p className='error-msg text-danger'>{message.field === 'contactus' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-xs-12 mt-2">
                                        <label className='labeltag'>What are sections of society you help?</label>
                                        <input type="text" name="sectionofsociety" className='inputtag' value={Data.sectionofsociety} onChange={(e)=>handlechange(e)} />
                                        <p className='error-msg text-danger'>{message.field === 'sectionofsociety' ? message.msg : ""}</p>
                                    </div>
                                    <div className="col-xs-12 mt-2">
                                        <label className='labeltag'>How can we help you?</label>
                                        <textarea name="helpu" cols="30" rows="3" className='inputtag' value={Data.helpu} onChange={(e)=>handlechange(e)} ></textarea>
                                        <p className='error-msg text-danger'>{message.field === 'helpu' ? message.msg : ""}</p>
                                    </div>
                                </div>
                                <div className="btns mt-3">
                                    <button className='submit-btn' onClick={(e)=>handlenext(e)}>Submit</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
