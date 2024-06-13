import React, { useState, useEffect } from 'react'
import searchicon from '../Assets/searchicon.png'
import blogbannerimg from '../Assets/blogbannerimg.png'
import blogpagebannerimg from '../Assets/blogpage-bannerimg.png'
import blogpageimg1 from '../Assets/blogpageimg1.png'
import blogpageimg2 from '../Assets/blogpageimg2.png'
import blogpageimg3 from '../Assets/blogpageimg3.png'
import blogpageimg4 from '../Assets/blogpageimg4.png'
import blogpageimg5 from '../Assets/blogpageimg5.png'
import blogpageimg6 from '../Assets/blogpageimg6.png'
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { useNavigate } from 'react-router-dom'
import { getBlogs } from '../Access/ActionCreator'
const BlogPage = () => {
    const navigate = useNavigate();
    const [filteredBlog, setFilteredBlog] = useState([]);
    const [SearchBar, setSearchBar] = useState(true);
    const [searchQuery, setSearchQuery] = useState('');
    const [BlogsArray, setBlogsArray] = useState([]);
    const [activeBlog, setActiveBlog] = useState({});
    // const [activeBlog, setActiveBlog] = useState(
    //     {
    //         image: blogpageimg1,
    //         heading: 'Where NGOs Thrive: India\'s Top 5 States',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     }
    // );
    // const BlogsArray = [
    //     {
    //         image: blogpageimg1,
    //         heading: 'Where NGOs Thrive: India\'s Top 5 States',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     },
    //     {
    //         image: blogpageimg2,
    //         heading: 'How to determine if an NGO is legitimate: key indicators to look for',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     },
    //     {
    //         image: blogpageimg3,
    //         heading: 'Rooted Realities: Navigating Education Challenges in Rural India',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     },
    //     {
    //         image: blogpageimg1,
    //         heading: 'India\'s NGO Sector: Spotlight on Top 5 Important Areas and Emerging Advances',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     },
    //     {
    //         image: blogpageimg2,
    //         heading: 'Unlocking the Power of Carbon Offsetting: A Path to a Sustainable Future',
    //         WrittenBy: 'Owner',
    //         DateBy: 'May 27, 2024'
    //     },
    // ];

    useEffect(() => {
        getBlogs((callback) => {
            if (callback?.data?.error == false && callback?.data?.message == "success" && callback?.data?.data?.length > 0) {
                setActiveBlog(callback?.data?.data[0]);
                setBlogsArray(callback?.data?.data);
                filteration(callback?.data?.data, searchQuery);
                setSearchBar(true)
            } else {
                setSearchBar(false);
            }
        })
    }, [])

    const handleBlogs = (data) => {
        window.scrollTo({top:0,behavior:'smooth'})
        setActiveBlog(data)
    }


    useEffect(() => {
        filteration(BlogsArray, searchQuery)
    }, [searchQuery, BlogsArray])

    const filteration = (data, query) => {
        if (data.length > 0) {
            const filteredData = data.filter((item) =>
                item.title.toLowerCase().includes(query.toLowerCase())
            );
            if (searchQuery === "") {
                setFilteredBlog(filteredData);
                setActiveBlog(filteredData[0]);
            } else {
                setFilteredBlog(filteredData);
                setActiveBlog(filteredData[0])
            }
        }
    }

    const DateFormat = (dateString) => {
        if (dateString) {
            let datePart = dateString.split('T')[0];
            let parts = datePart.split('-');
            let year = parts[0];
            let month = parts[1];
            let day = parts[2];
            let formattedDate = day + '-' + month + '-' + year;
            return formattedDate;
        } else {
            return "";
        }
    }
    return (
        <>
            <div className="BlogPage">
                <div className="headerBlogPage">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                           {SearchBar ? <div class="input-group inputgrp mb-3 px-0">
                                <input type="text" class="form-control inputtag" placeholder="Search articles..." aria-label="Search articles..." aria-describedby="basic-addon2" value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)} />
                                <span class="input-group-text inputtext" id="basic-addon2"><img src={searchicon} alt="Search" width={'70%'} /></span>
                            </div> : 
                            <h3 className='text-center' style={{marginTop:'40px',fontSize:'40px'}}>No Blogs Found</h3>}
                            {activeBlog !== null && activeBlog?.title !== '' && activeBlog?.title !== null && activeBlog?.title !== undefined ?
                                <>
                                <div>
                                    <img src={activeBlog?.photoUrl || ''} alt="image" className='mt-5' width={'100%'} />
                                </div>
                                    <div className="blogtype mt-3">
                                        {/* <h5>Education</h5> */}
                                        <h3 className='mt-1'>{activeBlog?.title || ''}</h3>
                                        <h6>By {activeBlog?.author || ''}</h6>
                                        <p>{activeBlog?.updatedAt !== '' ? DateFormat(activeBlog?.updatedAt) : ''}</p>
                                        {
                                            activeBlog?.title !== '' && activeBlog?.title !== null && activeBlog?.title !== undefined ?
                                                <h4 onClick={() => navigate(`/blog/${encodeURIComponent(activeBlog.title)}`, { state: activeBlog })}>Read Now</h4>
                                                : ''}
                                    </div>
                                </> : ''
                            }
                        </div>
                    </div>
                </div>
                <div className="container owlcaraousel-blogpage">
                    {
                         filteredBlog && filteredBlog?.length > 0 && activeBlog !== undefined && activeBlog !== '' && activeBlog !== null ?
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
                                    items: filteredBlog?.length > 2 ? 2 : filteredBlog?.length,
                                    dots: true,
                                    nav: false,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                },
                                1000: {
                                    items: filteredBlog?.length > 3 ? 3 : filteredBlog?.length,
                                    dots: true,
                                    nav: false,
                                    loop: true,
                                    autoplay: true,
                                    autoplayTimeout: 3000,
                                }
                            }
                        }>
                          
                        {
                            filteredBlog?.map((value, index) => {
                                return (
                                    <Cards key={index} image={value?.photoUrl} text={value?.title} author={value?.author} date={value?.updatedAt !== '' ? DateFormat(value?.updatedAt) : ''} data={value} handleBlogs={handleBlogs} />
                                )
                            })
                                }
                    </OwlCarousel>
                    :
                    '' }

                </div>
                {/* <div className="categories">
                    <div className="container">
                        <h4>POPULAR CATEGORIES</h4>
                        <div className="row my-5">
                            <div className="col-lg-4 col-md-6 col-xs-12 p-4">
                                <div className="cards">
                                    <img src={blogpageimg4} alt="image" width={'100%'} />
                                    <div className="bottomsection text-center" style={{ background: 'linear-gradient(180deg, #C4D9EE 0%, rgba(78, 120, 162, 0) 100%)' }}>
                                        <h5>Education</h5>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12 p-4">
                                <div className="cards">
                                    <img src={blogpageimg5} alt="image" width={'100%'} />
                                    <div className="bottomsection text-center" style={{ background: 'linear-gradient(180deg, #CFC2B7 0%, rgba(68, 52, 39, 0.16) 100%)' }}>
                                        <h5>Animal</h5>
                                    </div>
                                </div>

                            </div>
                            <div className="col-lg-4 col-md-6 col-xs-12 p-4">
                                <div className="cards">
                                    <img src={blogpageimg6} alt="image" width={'100%'} />
                                    <div className="bottomsection text-center" style={{ background: 'linear-gradient(180deg, #6C8A09 0%, rgba(218, 234, 186, 0.28) 100%)' }}>
                                        <h5>Environment</h5>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div> */}

                <div className="formEmail">
                    <img src={blogpagebannerimg} alt="image" width={'100%'} />
                    <div className="forms w-100">
                        <div className="box">
                            <div className="boxed">
                                <h4 className='text-center'>Don’t miss our latest articles !</h4>
                                <p>Enter your email to recieve the most latest articles</p>
                                <input type="email" placeholder='Your Email goes here' className='inputtag' />
                            </div>
                            <button className='submitbtn'>Submit</button>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogPage;

function Cards({ image, text, date, author, data, handleBlogs }) {

    return (
        <>
            <div className="cardbox">
                <div className="cardss" style={{ cursor: 'pointer',boxShadow:'5px 5px 5px -4px #ffc30d',borderRadius:'6px',padding:'1px' }} onClick={() => handleBlogs(data)}>
                    <div className="topsection">
                        <div className="imgs">
                        <img src={image} alt="image" width={'100%'}/>
                        </div>
                    </div>
                    <div className="bottomsection">
                        <h6>{text.length > 30 ? text.substring(0, 30) + '...' : text}</h6>
                        <div className='d-flex justify-content-between mt-5'>
                            <p>{author}</p>
                            <p>{date}</p>
                        </div>
                    </div>
                </div>
            </div>

        </>
    )
}