import React,{useState ,useLayoutEffect} from 'react'
import joinusbackimg from '../../Assets/joinus-backimg.png';
import AwesomeTeam from '../../Assets/awesomeTeam.png'
import usericon from '../../Assets/usericon.png'
import joinusimg2 from '../../Assets/joinusimg2.png'
import joinusimg3 from '../../Assets/joinusimg3.png'
import joinusimg4 from '../../Assets/joinusimg4.png'
import rightarrow from '../../Assets/right-arrow.png'
import { FaArrowRightLong } from "react-icons/fa6";
export default function TeamNew() {
    const [careertab,setcareertab] = useState('HTAdmin');
    const [mobilecareershow,setmobilecareershow] = useState(false)
    const jobarray=[
        {
            jobTitle:'Wordpress Developer',
            experience:'2 Years',
            deadline:'2021-05-08',
            jobAvailablenow: true,
        },
        {
            jobTitle:'Javascript',
            experience:'1 Years',
            deadline:'2021-05-08',
            jobAvailablenow: false,
        },
        {
            jobTitle:'Apps Developer',
            experience:'3 Years',
            deadline:'2021-05-08',
            jobAvailablenow: true,
        },
        {
            jobTitle:'IOS Developer',
            experience:'2 Years',
            deadline:'2021-05-08',
            jobAvailablenow: false,
        },
        {
            jobTitle:'Node JS Developer',
            experience:'3 Years',
            deadline:'2021-05-08',
            jobAvailablenow: true,
        },
    ];
    useLayoutEffect(()=>{
let widths= window.innerWidth;
console.log("widthswidths",widths);
if(widths < 576){
    setmobilecareershow(true);
}else{
    setmobilecareershow(false);
}
    },[])
    return (
        <>
            <div className="Joinus-section">
                <div className="container-fluid" style={{ marginTop: '70px' }}>
                    <div className="row mt-5 joinusimgs" >
                        <div className="imgs">
                            <img src={joinusbackimg} class=" px-0" alt="" style={{ width: '100%' }} />
                            <div className="joinus-content">
                                <h5>CAREERS</h5>
                                <div className="box"></div>
                                <h1 className='mt-5'>Join Our Team: Make a<br /> Difference with Your <br />Career</h1>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="whyjoin">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-6 col-sm-12">
                                <div className="box">
                                    <h3>Why you should join our
                                        awesome team ?</h3>
                                    <p>we want to feel like home when you are working at Eraah for that we have curated a great set of benefits for you.</p>
                                    <img style={{ width: '65%' }} src={AwesomeTeam} alt="image" className='mt-3' />
                                </div>
                            </div>
                            <div className="col-lg-6 col-sm-12">
                                <div className="rightbox">
                                    <div className="row">
                                        <div className="col-md-6 col-xs-12">
                                            <div className="insidebox">
                                                <div className="square" style={{ backgroundColor: 'rgba(231, 242, 255, 1)' }}>
                                                    <img src={usericon} alt="usericon" width={'50%'} />
                                                </div>
                                                <h5>Team work</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="insidebox">
                                                <div className="square" style={{ backgroundColor: 'rgba(241, 247, 232, 1)' }}>
                                                    <img src={joinusimg2} alt="icon" width={'50%'} />
                                                </div>
                                                <h5>Secured future</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="insidebox">
                                                <div className="square" style={{ backgroundColor: 'rgba(239, 242, 245, 1)' }}>
                                                    <img src={joinusimg3} alt="icon" width={'50%'} />
                                                </div>
                                                <h5>Learning opportunity</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                            </div>
                                        </div>
                                        <div className="col-md-6 col-xs-12">
                                            <div className="insidebox">
                                                <div className="square" style={{ backgroundColor: 'rgba(255, 238, 237, 1)' }}>
                                                    <img src={joinusimg4} alt="icon" width={'50%'} />
                                                </div>
                                                <h5>Upgrade skills</h5>
                                                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="careers">
                    <div className="container">
                        <div className="heading">
                            <h4>Career openings</h4>
                            <p className='mt-4'>We’re always looking for creative, talented self-starters to join the JMC
                                family. Check<br /> out our open roles below and fill out an application.</p>
                        </div>
                        <div className={`row career ${mobilecareershow === true ? 'd-none' : ''}`}>
                            <div className="col-xl-2 col-md-3">
                                <div className="tabs">
                                    <h5 className={careertab === 'HTAdmin' ? 'active' :''} onClick={()=>setcareertab('HTAdmin')}>HT & Admin</h5>
                                    <h5 className={careertab === 'Engineering' ? 'active' :''} onClick={()=>setcareertab('Engineering')}>Engineering (20)</h5>
                                    <h5 className={careertab === 'Support' ? 'active' :''} onClick={()=>setcareertab('Support')}>Support</h5>
                                    <h5 className={careertab === 'DEsign' ? 'active' :''} onClick={()=>setcareertab('Design')}>Design</h5>
                                    <h5 className={careertab === 'Digital Marketing' ? 'active' :''} onClick={()=>setcareertab('Digital Marketing')}>Digital Marketing</h5>
                                </div>
                            </div>
                            <div className="col-xl-7 col-lg-8 col-md-9">
                                <div className="diff-career">
                                    {
                                        jobarray.map((value,index)=>{
                                            return(
                                    <div className="box d-flex" key={index}>
                                        <h5 className='h5name'>{value.jobTitle?.length > 19 ? value.jobTitle.substring(0,19):value.jobTitle}</h5>
                                        <div className="exp">
                                            <p>Experience</p>
                                            <h5>{value.experience}</h5>
                                        </div>
                                        <div className="Deadline">
                                            <p>Deadline</p>
                                            <h5>{value.deadline}</h5>
                                        </div>
                                        <span className={value.jobAvailablenow === true ? '' : 'inactive'}>
                                        <FaArrowRightLong />
                                        </span>
                                    </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                        <div className={`row career ${mobilecareershow === false ? 'd-none' : ''}`}>
                            <div className="col-12">
                                <div className="tabs">
                                    <h5 className={careertab === 'HTAdmin' ? 'active' :''} onClick={()=>setcareertab('HTAdmin')}>HT & Admin</h5>
                                    <h5 className={careertab === 'Engineering' ? 'active' :''} onClick={()=>setcareertab('Engineering')}>Engineering (20)</h5>
                                    <h5 className={careertab === 'Support' ? 'active' :''} onClick={()=>setcareertab('Support')}>Support</h5>
                                    <h5 className={careertab === 'Design' ? 'active' :''} onClick={()=>setcareertab('Design')}>Design</h5>
                                    <h5 className={careertab === 'Digital Marketing' ? 'active' :''} onClick={()=>setcareertab('Digital Marketing')}>Digital Marketing</h5>
                                </div>
                            </div>
                            <div className="col-12">
                                <div className="diff-career">
                                    {
                                        jobarray.map((value,index)=>{
                                            return(
                                    <div className="box" key={index}>
                                        <h5 className='h5name'>{value.jobTitle?.length > 19 ? value.jobTitle.substring(0,19):value.jobTitle}</h5>
                                        <div className='d-flex justify-content-between mt-4'>
                                            
                                        <div className="exp">
                                            <p>Experience</p>
                                            <h5>{value.experience}</h5>
                                        </div>
                                        <div className="Deadline">
                                            <p>Deadline</p>
                                            <h5>{value.deadline}</h5>
                                        </div>
                                        <span className={value.jobAvailablenow === true ? '' : 'inactive'}>
                                        <FaArrowRightLong />
                                        </span>
                                        </div>
                                    </div>
                                            )
                                        })
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                
            </div>
        </>
    )
}
