import React, { useState, useEffect, useLayoutEffect } from 'react';
import { Pagination } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import galleryimg1 from '../../Assets/galleryimg1.png';
import galleryimg4 from '../../Assets/galleryimg4.png';
import galleryimg5 from '../../Assets/galleryimg5.png';
import galleryimg7 from '../../Assets/galleryimg7.png';
import galleryimg9 from '../../Assets/galleryimg9.png';
import arrowRight from '../../Assets/arrow-right.png'
import galleryimage10 from '../../Assets/GalleryImages/galleryimage10.jpg'
import galleryimage11 from '../../Assets/GalleryImages/galleryimage11.jpg'
import galleryimage14 from '../../Assets/galleryimage14.jpg'
import galleryimg16 from '../../Assets/GalleryImages/galleryimg16.jpg';
import { getGalleryImages } from '../../Access/ActionCreator';
import Loader from '../Loader';
export default function GalleryNew() {
    const itemsPerPage = 9;
    const [tabs, settabs] = useState('home');
    const [mobileView, setMobileView] = useState(false);
    const [loader, setloader] = useState(false);
    const [Imagedata, setImageData] = useState([]);
    const [page, setPage] = useState(1);
    const [topHeight, settopHeight] = useState('296');
    const [bottomHeight, setbottomHeight] = useState('586');
    const [img7height, setimg7height] = useState('310')
    const [img6height, setimg6height] = useState();
    const [img4height, setimg4height] = useState();
    const [pageCount, setpageCount] = useState();
    const [displayedData, setDisplayedData] = useState([]);

    const navigate = useNavigate();
    useEffect(() => {
        setloader(true)
        getGalleryImages({ ngoId: '' }, (callback) => {
            setloader(false)
            if (callback && callback?.message == 'success' && callback?.data?.length > 0) {
                setImageData(callback?.data)
                setpageCount(Math.ceil(callback.data?.length / itemsPerPage));
                setDisplayedData(callback.data?.slice((page - 1) * itemsPerPage, page * itemsPerPage))
                heightfunction();
            }
        })
    }, [])

    useLayoutEffect(() => {
        heightfunction();
    }, [])

    const handletabs = (type) => {
        // setloader(true);
        // setTimeout(() => {
        //     setloader(false);
        // }, 1000)
        settabs(type)
    }

    const heightfunction = () => {
        let winWidth = window.innerWidth;
        if (winWidth > 576) {
            setMobileView(false)
        } else {
            setMobileView(true)
        }
        let rightcol = document.getElementById('rightcol')?.clientHeight;
        let img1 = document.getElementById('image1')?.clientHeight;
        let img2 = document.getElementById('image2')?.clientHeight;
        let img3 = document.getElementById('image3')?.clientHeight;
        let img4 = document.getElementById('image4')?.clientHeight;
        let img7 = document.getElementById('image7')?.clientHeight;
        let rowimage1 = document.getElementById('rowimage1')?.clientHeight;
        let rowimage2 = document.getElementById('rowimage2')?.clientHeight;
        setimg4height(img4)
        if (img1 > img2 && img1 > img3) {
            settopHeight(img1)
        } else if (img2 > img3) {
            settopHeight(img2)
        } else {
            settopHeight(img3)
        }
        if (rowimage1 < rowimage2) {
            setbottomHeight(rowimage1)
        } else {
            setbottomHeight(rowimage2)
        }

        if (((img7 / Number(bottomHeight)) * 100) > 52) {
            setimg7height(Number(bottomHeight) / 2)
        } else {
            setimg7height(img7 < 310 ? 310 : img7)
        }
        let heightimg6 = rightcol - img1;
        setimg6height(winWidth > 1200 ? heightimg6 - 100 : heightimg6 - 98);
    }
    return (
        <>
            {
                loader ?
                    <Loader />
                    : ''}
            <div className="GalleryNew">
                <div className="container" style={{ paddingTop: '10px' }}>
                    <div className="head">
                        <h4>Gallery</h4>
                    </div>
                    <div className="tabs d-flex justify-content-center mt-5">
                        <h6 className={`${tabs === 'home' ? 'active' : ''}`} onClick={() => handletabs('home')}>Home</h6>
                        <h6 className={`${tabs === 'education' ? 'active' : ''}`} onClick={() => handletabs('education')}>Education</h6>
                        <h6 className={`${tabs === 'health' ? 'active' : ''}`} onClick={() => handletabs('health')}>Health</h6>
                        <h6 className={`${tabs === 'animal' ? 'active' : ''}`} onClick={() => handletabs('animal')}>Animal</h6>
                        <h6 className={`${tabs === 'oldAge' ? 'active' : ''}`} onClick={() => handletabs('oldAge')}>Old Age</h6>
                    </div>
                    <div className="imagessection">
                        <div className="row">
                            <div className="col-lg-6 col-xs-12 mt-2 colss" style={{ paddingRight: '6px', paddingLeft: '6px' }} >
                                <div className="box w-100" id="image1" style={{ height: mobileView ? 'auto' : topHeight + 'px' }}>
                                    <img src={displayedData[0]?.picUrl || galleryimg1} width={'100%'} alt="image" style={{ height: '100%' }} />
                                </div>
                                <div className="row mt-2" id="rowimage1">
                                    <div className="col-6" style={{ paddingRight: '6px' }}>
                                        <div className='box w-100' style={{ height: mobileView ? 'auto' : img4height + 'px' }} id="image4">
                                            <img src={displayedData[1]?.picUrl || galleryimage14} width={'100%'} alt="image" className='d-block' style={{ height: '100%' }} />
                                        </div>
                                        <div className='box w-100 mt-2' style={{ height: mobileView ? 'auto' : (img6height - img4height - 8) + 'px' }}>
                                            <img src={displayedData[2]?.picUrl || galleryimg16} width={'100%'} alt="image" className='d-block' style={{ height: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="col-6 rightimg" style={{ paddingLeft: '6px' }}>
                                        <div className="box w-100" style={{ height: mobileView ? 'auto' : img6height + 'px' }}>
                                            <img src={displayedData[3]?.picUrl || galleryimg4} width={'100%'} alt="image" style={{ height: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 col-xs-12 mt-2 colss" style={{ paddingLeft: '6px', paddingRight: '6px' }} id="rightcol">
                                <div className="row">
                                    <div className="col-6" style={{ paddingRight: '6px' }}>
                                        <div className="box w-100" id="image2" style={{ height: mobileView ? 'auto' : (topHeight - 32) + 'px' }}>
                                            <img src={displayedData[4]?.picUrl || galleryimg5} alt="image" width={'100%'} style={{ height: '100%' }} />
                                        </div>
                                    </div>
                                    <div className="col-6" style={{ paddingLeft: '6px' }}>
                                        <div className="box w-100" id="image3" style={{ height: mobileView ? 'auto' : (topHeight - 32) + 'px' }}>
                                            <img src={displayedData[5]?.picUrl || galleryimage10} alt="image" width={'100%'} style={{ height: '100%' }} />
                                        </div>
                                    </div>
                                </div>
                                <div className="row mt-2" id="rowimage2">
                                    <div className="box w-100" id="image7">
                                        <img src={displayedData[6]?.picUrl || galleryimg7} alt="image" width={'100%'} style={{ height: mobileView ? 'auto' : img7height + 'px' }} />
                                    </div>
                                    <div className="col-6 mt-2" style={{ paddingRight: '6px' }} >
                                        <div className="box  w-100" id="image8" >
                                            <img src={displayedData[7]?.picUrl || galleryimage11} alt="image" width={'100%'} style={{ height: mobileView ? 'auto' : (bottomHeight - img7height) + 'px' }} />
                                        </div>
                                    </div>
                                    <div className="col-6 mt-2" style={{ paddingLeft: '6px' }}>
                                        <div className="box  w-100" id="image9" >
                                            <img src={displayedData[8]?.picUrl || galleryimg9} alt="image" width={'100%'} style={{ height: mobileView ? 'auto' : (bottomHeight - img7height) + 'px' }} />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* <div className="imagessection">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 mt-2 colss" style={{ paddingRight: '6px' }}>
                                <img src={galleryimg1} width={'100%'} alt="image" className='mb-2' style={{height:'35%'}} />
                                <div className="subcol d-flex">
                                    <div className="leftimg me-2">
                                        <img src={galleryimage14} width={'100%'} alt="image" className='d-block mb-2' height={'28%'} />
                                        <img src={galleryimg16} width={'100%'} alt="image" className='d-block' />
                                    </div>
                                    <div className="rightimg">
                                        <img src={galleryimg4} width={'100%'} alt="image" height={'73%'} />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2 colss" style={{ paddingLeft: '6px' }}>
                                <div className="topimg d-flex mb-2">
                                    <img src={galleryimg5} alt="image" width={'50%'} className="me-2" />
                                    <img src={galleryimage10} alt="image" width={'50%'} />
                                </div>
                                <img src={galleryimg7} alt="image" width={'100%'} />
                                <div className="topimg d-flex my-2">
                                    <img src={galleryimage11} alt="image" width={'50%'} className="me-2" />
                                    <img src={galleryimg9} alt="image" width={'50%'} />
                                </div>
                            </div>
                        </div>
                    </div> */}

                    <div className="customPagination d-inline-flex justify-content-center mt-3  mb-5 pb-3 pt-4 w-100">
                        <div className="pagination-blogcard">
                            <Pagination
                                style={{ alignSelf: "center" }}
                                count={pageCount}
                                color="secondary"
                                shape="circle"
                                onChange={(event, value) => {
                                    console.log(value);
                                    setPage(value);
                                }}
                                defaultValue={1}
                                page={page}
                            />
                        </div>
                    </div>
                </div>

                <div className="donateSection">
                    <div className="heads text-center">
                        <h5>Inspired by these stories? You can be a part <br />of this transformation. Help us empower<br /> children with quality education and make a<br /> tangible impact</h5>
                        <button className='submit-btn' onClick={() => navigate('/donate')}>Donate Now <img src={arrowRight} alt="ArrowIcon" width={'15%'} style={{ marginTop: '-5px' }} /></button>
                    </div>
                </div>

            </div>
        </>
    )
}
