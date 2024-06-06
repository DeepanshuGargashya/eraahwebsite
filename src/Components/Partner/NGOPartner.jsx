import React, { useState, useLayoutEffect } from 'react'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import ngopartnerimg1 from '../../Assets/ngopartnerimg1.png';
import ngopartnerimg2 from '../../Assets/ngopartnerimg2.png';
import ngopartnerimg3 from '../../Assets/ngopartnerimg3.png';
import caraouselimage from '../../Assets/caraouselimage.png';
import caraouselimage2 from '../../Assets/caraouselimage2.png';
import caraouselimage3 from '../../Assets/caraouselimage3.png';
import staricon from '../../Assets/staricon.png';
import founderimg from '../../Assets/founderimg.png';
import { contactFormValidation } from '../../utils/Validation';
import { ContactForm } from '../../Access/ActionCreator';
import Loader from '../Loader';
const NGOPartner = () => {
    const [boxheight, setboxheight] = useState();
    const [reviewboxheight, setreviewboxheight] = useState();
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

    useLayoutEffect(() => {
        let box1 = document.getElementById('helpboxes1')?.clientHeight;
        let box2 = document.getElementById('helpboxes2')?.clientHeight;
        let reviewbox1 = document.getElementById('reviewbox1')?.clientHeight;
        let reviewbox2 = document.getElementById('reviewbox2')?.clientHeight;
        let reviewbox3 = document.getElementById('reviewbox3')?.clientHeight;
        if (box1 > box2) {
            setboxheight(box1)
        } else {
            setboxheight(box2)
        }
        const reviewboxmaxheight = Math.max(reviewbox1, reviewbox2, reviewbox3);
        setreviewboxheight(reviewboxmaxheight + 5);
    }, [])


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
                    setpopupMsg('Form Submitted Succesfully')
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
            <div className="NGOPartner">
                <div className="container-fluid banner-partners">
                    <div className="row">
                        <div className="col-xl-6 col-sm-12 px-0">
                            <div className="imgs">
                                <img src={ngopartnerimg1} alt="banner-image" width={'100%'} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-12 px-0">
                            <div className="texts">
                                <h4>Strength in Unity:<br /> Meet Our Valued Partners</h4>
                                <p>
                                    Our partners include governments, civil society organisations, faith communities, faith-based organisations, businesses, academia, and more</p>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="partners">
                    <div className="head">
                        <h5>Our Partnerships</h5>
                    </div>

                    <div className="container owlcaraousel">
                        <OwlCarousel className='owl-theme' loop dots={false} responsiveClass={true}
                            responsive={
                                {
                                    0: {
                                        items: 1,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    },
                                    600: {
                                        items: 2,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    },
                                    1000: {
                                        items: 3,
                                        dots: true,
                                        nav: false,
                                        loop: true,
                                        autoplay: true,
                                        autoplayTimeout: 3000,
                                    }
                                }
                            }>
                            <Cards image={caraouselimage} text={'CareR'} links={''} />
                            <Cards image={caraouselimage2} text={'Sikhaid'} links={''} />
                            <Cards image={caraouselimage3} text={'Asifa India'} links={''} />
                            <Cards image={caraouselimage} text={'CareR'} links={''} />
                            <Cards image={caraouselimage2} text={'Sikhaid'} links={''} />
                            <Cards image={caraouselimage3} text={'Asifa India'} links={''} />
                        </OwlCarousel>
                    </div>

                    <div className="btns d-flex justify-content-center">
                        <button className='submit-btn'>Sell All Partners</button>
                    </div>
                </div>

                <div className="howcanwehelp-Section">
                    <div className="container">
                        <div className="heads">
                            <h3>How we can help you</h3>
                            <p>Our entire team at Eraah is focused on creating a platform that is mutually<br /> beneficial to everyone. We work hard to ensure that you get the most out of<br /> our service, providing you accessible solutions to your problems.</p>
                        </div>
                        <div className="row helpboxes">
                            <div className="col-lg-6 col-sm-12">
                                <div className="box" id="helpboxes1" style={{ height: boxheight + 'px' }}>
                                    <div className="circular">
                                        <div className="circles">
                                            <img src={ngopartnerimg2} alt="image" width={'50%'} />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h6>Expand Your Reach </h6>
                                        <p>With just a few clicks you can save time and resources where it counts, helping your organization to meet its broader business goals. </p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="box" id="helpboxes2" style={{ height: boxheight + 'px' }}>
                                    <div className="circular">
                                        <div className="circles">
                                            <img src={ngopartnerimg3} alt="image" width={'50%'} />
                                        </div>
                                    </div>
                                    <div className="text">
                                        <h6>Boost your Fundraise</h6>
                                        <p>We can build and support community-centered services to provide opportunities for those who deserve it and empower them to be a better version of themselves.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="wordonEraah">
                    <div className="container">
                        <div className="head">
                            <h5>The word on Eraah</h5>
                        </div>
                        <div className="row reviews">
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="reviewbox" id='reviewbox1' style={{ height: reviewboxheight + 'px' }}>
                                    <h5>Eraah has completely transformed how I donate to causes I care about. With just a few taps, I can support multiple NGOs and track the impact of my contributions. It's incredibly convenient and makes giving back so much easier!</h5>

                                    <div className="reviewowner">
                                        <div className="cicular">
                                            <div className="circles">
                                                <img src="" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h6>CareR</h6>
                                            <h6 className='h6'>NGO</h6>
                                            <div className="favs">
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="reviewbox" id='reviewbox2' style={{ height: reviewboxheight + 'px' }}>
                                    <h5>Using Eraah has opened up so many opportunities for my students. The app connects us with donors who believe in the power of education. With their support,  we ensure that every child has the chance to succeed."</h5>

                                    <div className="reviewowner">
                                        <div className="cicular">
                                            <div className="circles">
                                                <img src="" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h6>Laila</h6>
                                            <h6 className='h6'>Teacher</h6>
                                            <div className="favs">
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12">
                                <div className="reviewbox" id='reviewbox3' style={{ height: reviewboxheight + 'px' }}>
                                    <h5>Eraah is a game-changer for charitable donations. The app's comprehensive list of NGOs and the ability to donate seamlessly to multiple organizations at once is fantastic. It’s rewarding to see the positive impact my donations are making</h5>

                                    <div className="reviewowner">
                                        <div className="cicular">
                                            <div className="circles">
                                                <img src="" alt="" width={'100%'} />
                                            </div>
                                        </div>
                                        <div className="text">
                                            <h6>Laila</h6>
                                            <h6 className='h6'>Teacher</h6>
                                            <div className="favs">
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                                <img src={staricon} alt="staricon" width={'10%'} />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="container-fluid founder-message">
                    <div className="row">
                        <div className="col-xl-6 col-sm-12 px-0" id="cols1">
                            <div className="texts" >
                                <h5>FOUNDER’S MESSAGE</h5>
                                <div className="box"></div>

                                <h3>Why trust Eraah?</h3>
                                <h6>We have always looked at social causes such as poverty alleviation, female empowerment, and education as key issues that were worth solving and I believe anyone can be part of the solution. </h6>
                                <h6 className="h6">Shrey Bansal <br /><span>
                                    Founder of Eraah</span></h6>
                            </div>
                        </div>
                        <div className="col-xl-6 col-sm-12 px-0" id="cols2">
                            <div className="imgs">
                                <img src={founderimg} alt="founder-image" width={'100%'} />
                            </div>
                        </div>
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
                    <div class="modal" tabindex="-1">
                        <div class="modal-dialog" style={{ display: 'block', top: '8%', marginRight: '0px' }}>
                            <div class="modal-content">
                                <div class="modal-header" style={{ borderBottom: '0px' }}>
                                    <p style={{ fontSize: '25px', marginBottom: '0px', backgroundColor: popupMsg === 'Form Submitted Succesfully' ? 'green' : 'red',color:'white' }}>{popupMsg}</p>
                                    <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={() => setPopupshow(false)}></button>
                                </div>

                            </div>
                        </div>
                    </div>
                    : ''}
        </>
    )
}
export default NGOPartner;

function Cards({ image, text, links }) {

    return (
        <>
            <div className="cardbox">
                <div className="cardss">
                    <div className="topsection">
                        <img src={image} alt="image" width={'100%'} />
                    </div>
                    <div className="bottomsection">
                        <h6>{text}</h6>
                        <a href={links}>Learn More</a>
                    </div>
                </div>
            </div>

        </>
    )
}
