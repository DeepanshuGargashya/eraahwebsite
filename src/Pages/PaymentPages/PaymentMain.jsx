import React, { useState,useLayoutEffect } from 'react'
import paymentimg1 from '../../Assets/paymentimg1.png';
import eraahlogo from '../../Assets/Eraah-official-logo.png';
import upiimage from '../../Assets/upiimage.jpg';
import visaimage from '../../Assets/visaimage.png';
import mastercardimage from '../../Assets/mastercardimage.jpg';
import rupayimage from '../../Assets/rupayimage.png';
import { PaymentValidations } from '../../utils/Validation';
export default function PaymentMain() {
    const [formheight, setformheight] = useState(50);
    const [pageType, setPageType] = useState('firstPage')
    const [OTP, setOTP] = useState('');
    const [OTPmsg, setOTPmsg] = useState('');
    const [message, setmessage] = useState('');
    const [, updateState] = React.useState();
    const forceUpdate = React.useCallback(() => updateState({}), []);
    const [paymentData, setPaymentData] = useState({
        name: '',
        email: '',
        phoneNumber: '',
        panNumber: '',
        address: '',
        monthlyAmount: 0,
        monthlyChildrenCount: 0,
        yearlyAmount: 0,
        yearlyChildrenCount: 0,
        remarks: '',
    })

    useLayoutEffect(()=>{
let element = document.getElementById('formcol')?.clientHeight;
if(window.innerWidth <440){
    setformheight(element/3.5)
}
else{
    setformheight(50)
}
    },[])

    const handleHandlers = () => {
        const obj = Object.assign({}, paymentData);
        obj.pageType = pageType;
        if (pageType === 'firstPage') {
            let validationMsg = PaymentValidations(obj)
            setmessage(validationMsg)
            if (validationMsg?.status) {
                setPageType('secondPage')
            } else {
                setPageType('firstPage');
            }
        }

        else if (pageType === 'secondPage') {
            let OTPVerified = true;
            if (OTPVerified === true) {
                setOTPmsg("OTP Verified Successfully")
                setTimeout(() => {
                    setPageType('thirdPage')
                }, 1000)
            }
            else {
                setOTPmsg("Enter Valid OTP")
                setPageType('secondPage')
            }
        }

    }
    const OTPHandler = (e) => {
        if (e.target.value?.length > 6) {
            return
        } else {
            setOTP(e.target.value)
        }
    }
    const handleEdit = () => {
        setPageType('firstPage')
    }

    const handlechildrenCount = (fieldType, inputType) => {
        setPaymentData(prev => {
            const updatedData = { ...prev };
            if (fieldType === 'monthly') {
                if (inputType === '+') {
                    updatedData.monthlyChildrenCount += 1;
                }
                if (inputType === '-' && updatedData.monthlyChildrenCount > 0) {
                    updatedData.monthlyChildrenCount -= 1;
                }
            }
            if (fieldType === 'yearly') {
                if (inputType === '+') {
                    updatedData.yearlyChildrenCount += 1;
                }
                if (inputType === '-' && updatedData.yearlyChildrenCount > 0) {
                    updatedData.yearlyChildrenCount -= 1;
                }
            }
            return updatedData;
        });
    }

    const inputFieldHanlder = (e) => {
        const { name, value } = e.target;
        if (name === 'phoneNumber' && value.length > 10) {
            return;
        }
        setPaymentData({
            ...paymentData,
            [name]: value
        });
    }

    const handlePayment = () => {
        const obj = Object.assign({}, paymentData);
        obj.pageType = pageType;
        if (pageType === 'thirdPage') {
            let validationMsg = PaymentValidations(obj)
            setmessage(validationMsg)
            if (validationMsg?.status) {
            } else {
                setPageType('thirdPage');
            }
        }

    }
    return (
        <>
            <div className="PaymentMain">
                <div className="container-fluid">
                    <div className="row">
                        <div className="col-xl-6 col-md-4 col-sm-12 positioncol1">
                            <div className="imgss">
                                <img src={paymentimg1} alt="payment-image" width={'80%'} />
                            </div>
                        </div>
                        <div className="col-xl-6 col-md-8 col-sm-10  leftcols positioncol2" id="formcol">
                            <div className="rightcol">
                                <div className="heading text-end">
                                    <img src={eraahlogo} alt="eraahlogo" width={'20%'} />
                                </div>
                                <div className="formss">
                                    <div className="form-box">
                                        <h5>Payment Details</h5>
                                        <div className="box"></div>

                                        <div className="row form-grp">
                                            <div className="col-sm-3 col-xs-12">
                                                <label className='label-tag'>Name</label>
                                            </div>
                                            <div className="col-sm-9 col-xs-12">
                                                <input type="text" className='input-tag' value={paymentData.name} name="name" placeholder='Enter Full Name' disabled={pageType !== 'firstPage'} onChange={(e) => inputFieldHanlder(e)} />
                                                <p className='error-msg text-danger'>{message.field === 'name' ? message.msg : ""}</p>
                                            </div>
                                        </div>
                                        <div className="row form-grp">
                                            <div className="col-sm-3 col-xs-12">
                                                <label className='label-tag'>Email</label>
                                            </div>
                                            <div className="col-sm-9 col-xs-12">
                                                <input type="email" className='input-tag' value={paymentData.email} name="email" placeholder='Enter Email Here' disabled={pageType !== 'firstPage'} onChange={(e) => inputFieldHanlder(e)} />
                                                <p className='error-msg text-danger'>{message.field === 'email' ? message.msg : ""}</p>
                                            </div>
                                        </div>
                                        <div className="row form-grp">
                                            <div className="col-sm-3 col-xs-12">
                                                <label className='label-tag'>Phone</label>
                                            </div>
                                            <div className="col-sm-9 col-xs-12">
                                                <input type="number" className='input-tag' value={paymentData.phoneNumber} name="phoneNumber" placeholder='Enter Number Here' disabled={pageType !== 'firstPage'} onChange={(e) => inputFieldHanlder(e)} />
                                                <p className='error-msg text-danger'>{message.field === 'phoneNumber' ? message.msg : ""}</p>
                                            </div>
                                        </div>
                                        <div className="row form-grp">
                                            <div className="col-sm-3 col-xs-12">
                                                <label className='label-tag'>PAN Number</label>
                                            </div>
                                            <div className="col-sm-9 col-xs-12">
                                                <input type="text" className='input-tag' value={paymentData.panNumber} name="panNumber" placeholder='Enter PAN Number' disabled={pageType !== 'firstPage'} onChange={(e) => inputFieldHanlder(e)} />
                                                <p className='error-msg text-danger'>{message.field === 'panNumber' ? message.msg : ""}</p>
                                            </div>
                                        </div>
                                        <div className="row form-grp">
                                            <div className="col-sm-3 col-xs-12">
                                                <label className='label-tag'>Address</label>
                                            </div>
                                            <div className="col-sm-9 col-xs-12">
                                                <textarea type="text" className='input-tag textarea' value={paymentData.address} name="address" placeholder='Enter Address Here' rows={1} disabled={pageType !== 'firstPage'} onChange={(e) => inputFieldHanlder(e)} />
                                                <p className='error-msg text-danger'>{message.field === 'address' ? message.msg : ""}</p>
                                                {
                                                    pageType === 'firstPage' ?
                                                        <h5>Please specify address as linked with PAN number</h5>
                                                        : ''}
                                                {
                                                    pageType === 'secondPage' ?
                                                        <div className="resend text-end">
                                                            <h6 className='d-inline' style={{ color: '#5628D2', cursor: 'pointer' }} onClick={() => handleEdit()}>Edit</h6>
                                                        </div>
                                                        : ''}
                                            </div>
                                        </div>
                                        {
                                            pageType === 'secondPage' ?
                                                <div className="form-grp otp-grp">
                                                    <label className='label-tag'>Enter OTP sent to your email</label>
                                                    <input type="number" value={OTP} className='input-tag' onChange={(e) => OTPHandler(e)} />
                                                    <div className="d-dlex justify-content-between">
                                                        <p className={`error-msg d-inline ${OTPmsg === 'OTP Verified Successfully' ? 'text-success' : 'text-danger'} `}>{OTPmsg}</p>
                                                        <h6 className='d-inline float-end'>Resend OTP</h6>
                                                    </div>

                                                </div>
                                                : ''}

                                        {pageType === 'firstPage' || pageType === 'secondPage' ?
                                            <div className="btns text-center" style={{ marginTop: '30px' }}>
                                                <button className='submit-btn2' onClick={() => handleHandlers()} style={{ marginBottom: '40px' }}>Confirm</button>
                                            </div> : ''}
                                        {
                                            pageType === 'thirdPage' ?
                                                <>
                                                    <div className="row form-grp" style={{ marginTop: '55px' }}>
                                                        <div className="col-sm-3 col-xs-12">
                                                            <label className='label-tag mt-0'>Sponsor a Child education with monthly contribution <br />(Optional)</label>
                                                        </div>
                                                        <div className="col-sm-9 col-xs-12">
                                                            <div class="input-group span-input-grp mb-3">
                                                                <span class="input-group-text span-text " id="basic-addon1">₹</span>
                                                                <input type="number" class="form-control inputtag ps-0" name='monthlyAmount' value={paymentData.monthlyAmount} min={0} aria-describedby="basic-addon1" onChange={(e) => inputFieldHanlder(e)} />
                                                                <div className='NoofchildrenBtns'>
                                                                    <button className='btnchildren' onClick={() => handlechildrenCount('monthly', '-')}>-</button>
                                                                    <input type="number" min={0} className="inputchildren" name='monthlyChildrenCount' onChange={(e) => inputFieldHanlder(e)} value={paymentData.monthlyChildrenCount} />
                                                                    <button className='btnchildren' onClick={() => handlechildrenCount('monthly', '+')}>+</button>
                                                                </div>
                                                            </div>
                                                            <p className='error-msg text-danger'>{message.field === 'monthlyAmount' ? message.msg : ""}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row form-grp">
                                                        <div className="col-sm-3 col-xs-12">
                                                            <label className='label-tag mt-0'>Sponsor a Child education with yearly contribution <br />(Optional)</label>
                                                        </div>
                                                        <div className="col-sm-9 col-xs-12">
                                                            <div class="input-group span-input-grp mb-3">
                                                                <span class="input-group-text span-text " id="basic-addon1">₹</span>
                                                                <input type="number" name='yearlyAmount' value={paymentData.yearlyAmount} class="form-control inputtag ps-0" aria-describedby="basic-addon1" min={0} onChange={(e) => inputFieldHanlder(e)} />
                                                                <div className='NoofchildrenBtns'>
                                                                    <button className='btnchildren' onClick={() => handlechildrenCount('yearly', '-')}>-</button>
                                                                    <input type="number" min={0} className="inputchildren" name='yearlyChildrenCount' onChange={(e) => inputFieldHanlder(e)} value={paymentData.yearlyChildrenCount} />
                                                                    <button className='btnchildren' onClick={() => handlechildrenCount('yearly', '+')}>+</button>
                                                                </div>
                                                            </div>
                                                            <p className='error-msg text-danger'>{message.field === 'yearlyAmount' ? message.msg : ""}</p>
                                                        </div>
                                                    </div>
                                                    <div className="row form-grp">
                                                        <div className="col-sm-3 col-xs-12">
                                                            <label className='label-tag mt-0'>Remarks<br />(Optional)</label>
                                                        </div>
                                                        <div className="col-sm-9 col-xs-12">
                                                            <textarea type="text" className='input-tag textarea' placeholder='Enter Remarks Here' rows={1} value={paymentData.remarks} name="remarks" onChange={(e) => inputFieldHanlder(e)} />
                                                        </div>
                                                    </div>
                                                </>
                                                : ''}


                                    </div>
                                    {
                                        pageType === 'thirdPage' ?
                                            <div className="row payamount">
                                                <div className="col-sm-8 col-xs-12 pe-0 leftcols">
                                                    <div className="imgss">
                                                        <img src={upiimage} alt="upiimage" width={'20%'} />
                                                        <img src={visaimage} alt="visaimage" width={'20%'} />
                                                        <img src={mastercardimage} alt="mastercardimage" width={'20%'} />
                                                        <img src={rupayimage} alt="rupayimage" width={'30%'} />
                                                    </div>
                                                </div>
                                                <div className="col-sm-4 col-xs-12 ps-0 rightcols">
                                                    <div className="amount" onClick={() => handlePayment()}>
                                                        <h5>Pay ₹ {Number(paymentData.monthlyAmount * paymentData.monthlyChildrenCount) + Number(paymentData.yearlyAmount * paymentData.yearlyChildrenCount)}</h5>
                                                    </div>
                                                </div>
                                            </div>
                                            : ''
                                    }
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="bottom-text" style={{marginTop:formheight+'px'}}>
                        <h4>You can help kids worldwide build a strong foundation for their future</h4>
                        <p>Imagine life without the ability to read or do basic math. For 56% of elementary-aged children around the world who don’t meet minimum reading proficiency standards, the future can look bleak.<br/>Together, we can do more than just get kids in the classroom — we can empower them for a brighter future. Equipped with literacy and essential life skills, they can grow into adults who earn higher wages, educate their own children, and have a voice in their community.</p>
                    </div>
                </div>
            </div>
        </>
    )
}
