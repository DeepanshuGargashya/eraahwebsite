import React,{ useState,useLayoutEffect } from 'react'
import Kid from '../Assets/kid.png'
import Calender from '../Assets/calender.png'
import Folder from '../Assets/folder.png'
import Clock from '../Assets/clock.png'
import Carousel from '../Components/donateCarousal'
import Category1 from '../Assets/category1.png'
import Category2 from '../Assets/category2.png'
import Category3 from '../Assets/category3.png'
import Latest1 from '../Assets/latest1.png'
import PaginationLatest from '../Components/paginationLatest'
import Cutie from '../Assets/cutie.png'
import { NavLink } from 'react-router-dom'

function Donate() {
    const [variablefontSize,setvariablefontSize] =useState();
    useLayoutEffect(()=>{
        window.innerWidth > 1200 ? setvariablefontSize(30) : setvariablefontSize(20)
    },[])
    return (
        <>
            <div className="container donate mb-5">
                <div className="row">
                    <div className="searchBar d-flex justify-content-center px-0 mb-5">
                        <input class="form-control" type="search" placeholder="Search articles..." aria-label="Search" style={{ paddingLeft: '40px' }} />
                        {/* <i class="search-icon fas fa-search"></i> */}
                    </div>
                    <div className="kidImage" style={{ position: 'relative',marginBottom:'100px' }}>
                        <img style={{ width: '100%' }} src={Kid} alt="" />
                        <div className="row">
                            <div className="col-lg-6 col-sm-8  donate-banner-card">

                            <button type="button" class="btn btn-primary">
                                Education
                            </button>
                            <h2 className='mt-1' style={{fontSize:variablefontSize + 'px'}}>How online study in COVID has effected lives of children with no access to Internet?
                            </h2>
                            <div className="d-flex justify-content-between flex-wrap">
                                <div className="calender d-flex align-items-center mt-2 ">
                                    <img src={Calender} alt="" />
                                    <p className='ps-2 m-0'>Jan 11, 2024</p>
                                </div>
                                <div className="calender d-flex align-items-center me-3 mt-2 ">
                                    <img src={Folder} alt="" />
                                    <p className='ps-2 m-0'>Education</p>
                                </div>
                                <div className="calender d-flex align-items-center mt-2 ">
                                    <img src={Clock} alt="" />
                                    <p className='ps-2 m-0'>5 min read</p>
                                </div>

                            </div>
                            </div>

                        </div>
                        <div className="kidContainer  d-none">
                            <button type="button" class="btn btn-primary">
                                Education
                            </button>
                            <h2>How online study in COVID has effected lives of children with no access to Internet?
                            </h2>
                            <div className="d-flex justify-content-between flex-wrap">
                                <div className="calender d-flex align-items-center mt-2 ">
                                    <img src={Calender} alt="" />
                                    <p className='ps-2 m-0'>Jan 11, 2024</p>
                                </div>
                                <div className="calender d-flex align-items-center me-3 mt-2 ">
                                    <img src={Folder} alt="" />
                                    <p className='ps-2 m-0'>Education</p>
                                </div>
                                <div className="calender d-flex align-items-center mt-2 ">
                                    <img src={Clock} alt="" />
                                    <p className='ps-2 m-0'>5 min read</p>
                                </div>

                            </div>

                        </div>
                    </div>

                </div>
                {/* <div className="container">rdtfghbjnjgfcszasxcgvhbjnk </div> */}
            </div>

            {/* <div className="container" style={{ marginTop: '22dvh' }}> */}
                {/* <Carousel items={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 12]} active={0} /> */}
            {/* </div> */}
            <div className="container categories row d-flex justify-content-center m-auto ">
                <h3 className='mb-4'>Popular Categories</h3>
                <div class="card col-md-3 col-sm-4 mx-4 paginationCard mt-3 " >
                    <img src={Category1} class="card-img-top" alt="..." />
                    <div class="card-body">
                        <p class="card-title text-center">Education</p>
                    </div>
                </div>
                <div class="card col-md-3 col-sm-4 mx-4  paginationCard mt-3" >
                    <img src={Category2} class="card-img-top" alt="..." />
                    <div class="card-body animal">
                        <p class="card-title text-center">Animal</p>
                    </div>
                </div>
                <div class="card col-md-3 col-sm-4 mx-4  paginationCard mt-3" >
                    <img src={Category3} class="card-img-top" alt="..." />
                    <div class="card-body environment">
                        <p class="card-title text-center">Environment</p>
                    </div>
                </div>
            </div>

            <div className="container-fluid pb-5" style={{ backgroundColor: 'rgba(239, 242, 242, 1)' }}>
                <PaginationLatest />
            </div>

            <div className="container-fluid articles px-0 d-flex flex-wrap justify-content-center">
                <div className="col-md-5">
                    <img style={{ width: '100%' }} src={Cutie} alt="" />
                </div>
                <div className="col-md-7 px-0">
                    <div className="articleForm">
                        <h4 className='text-center'>Don’t miss our latest articles !</h4>
                        <p className='text-center'>Enter your email to recieve the most latest articles</p>
                        <div class="input-group mb-3">
                            {/* <span class="input-group-text" id="basic-addon1">@</span> */}
                            <input type="text" class="form-control" placeholder="Your email goes here" aria-label="Username" aria-describedby="basic-addon1" style={{ borderRadius: '6px', backgroundColor: 'rgba(0, 0, 0, 0.09)' }} />
                        </div>
                        <NavLink > <button type="button" class="btn btn-dark" style={{ backgroundColor: 'rgba(255, 195, 13, 1)', color: 'white', border: 'none', width: '100%' }}>Submit</button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Donate