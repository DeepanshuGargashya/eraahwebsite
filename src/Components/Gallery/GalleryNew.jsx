import React, { useState } from 'react';
import { Pagination } from "@mui/material";
import { useNavigate } from 'react-router-dom';
import galleryimg1 from '../../Assets/galleryimg1.png';
import galleryimg2 from '../../Assets/galleryimg2.png';
import galleryimg3 from '../../Assets/galleryimg3.png';
import galleryimg4 from '../../Assets/galleryimg4.png';
import galleryimg5 from '../../Assets/galleryimg5.png';
import galleryimg6 from '../../Assets/galleryimg6.png';
import galleryimg7 from '../../Assets/galleryimg7.png';
import galleryimg8 from '../../Assets/galleryimg8.png';
import galleryimg9 from '../../Assets/galleryimg9.png';
import arrowRight from '../../Assets/arrow-right.png'
export default function GalleryNew() {
    const [tabs, settabs] = useState('education');
    const [page, setPage] = useState(1);
const navigate = useNavigate();
    return (
        <>
            <div className="GalleryNew">
                <div className="container" style={{ paddingTop: '10px' }}>
                    <div className="head">
                        <h4>Gallery</h4>
                    </div>
                    <div className="tabs d-flex justify-content-center mt-5">
                        <h6 className={`${tabs === 'home' ? 'active' : ''}`} onClick={() => settabs('home')}>Home</h6>
                        <h6 className={`${tabs === 'education' ? 'active' : ''}`} onClick={() => settabs('education')}>Education</h6>
                        <h6 className={`${tabs === 'health' ? 'active' : ''}`} onClick={() => settabs('health')}>Health</h6>
                        <h6 className={`${tabs === 'animal' ? 'active' : ''}`} onClick={() => settabs('animal')}>Animal</h6>
                        <h6 className={`${tabs === 'oldAge' ? 'active' : ''}`} onClick={() => settabs('oldAge')}>Old Age</h6>
                    </div>
                    <div className="imagessection">
                        <div className="row">
                            <div className="col-md-6 col-xs-12 mt-2 colss" style={{ paddingRight: '6px' }}>
                                <img src={galleryimg1} width={'100%'} alt="image" className='mb-2' style={{height:'35%'}} />
                                <div className="subcol d-flex">
                                    <div className="leftimg me-2">
                                        <img src={galleryimg2} width={'100%'} alt="image" className='d-block mb-2' />
                                        <img src={galleryimg3} width={'100%'} alt="image" className='d-block' />
                                    </div>
                                    <div className="rightimg">
                                        <img src={galleryimg4} width={'100%'} alt="image" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-6 col-xs-12 mt-2 colss" style={{ paddingLeft: '6px' }}>
                                <div className="topimg d-flex mb-2">
                                    <img src={galleryimg5} alt="image" width={'50%'} className="me-2" />
                                    <img src={galleryimg6} alt="image" width={'50%'} />
                                </div>
                                <img src={galleryimg7} alt="image" width={'100%'} />
                                <div className="topimg d-flex my-2">
                                    <img src={galleryimg8} alt="image" width={'50%'} className="me-2" />
                                    <img src={galleryimg9} alt="image" width={'50%'} />
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="customPagination d-inline-flex justify-content-center mt-3  mb-5 pb-3 pt-4 w-100">
                        <div className="pagination-blogcard">
                            <Pagination
                                style={{ alignSelf: "center" }}
                                count={5}
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
                        <h5>Inspired by these stories? You can be a part <br/>of this transformation. Help us empower<br/> children with quality education and make a<br/> tangible impact</h5>
                        <button className='submit-btn' onClick={()=>navigate('/donate')}>Donate Now <img src={arrowRight} alt="ArrowIcon" width={'15%'} style={{ marginTop: '-5px' }} /></button>
                    </div>
                </div>
                
            </div>
        </>
    )
}
