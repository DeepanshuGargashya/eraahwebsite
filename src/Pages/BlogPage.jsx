import React, { useState } from 'react'
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
const BlogPage = () => {
    const navigate = useNavigate();
    const [activeBlog, setActiveBlog] = useState(
        {
            image: blogpageimg1,
            heading: 'Where NGOs Thrive: India\'s Top 5 States',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        }
    );
    const BlogsArray = [
        {
            image: blogpageimg1,
            heading: 'Where NGOs Thrive: India\'s Top 5 States',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        },
        {
            image: blogpageimg2,
            heading: 'How to determine if an NGO is legitimate: key indicators to look for',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        },
        {
            image: blogpageimg3,
            heading: 'Rooted Realities: Navigating Education Challenges in Rural India',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        },
        {
            image: blogpageimg1,
            heading: 'India\'s NGO Sector: Spotlight on Top 5 Important Areas and Emerging Advances',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        },
        {
            image: blogpageimg2,
            heading: 'Unlocking the Power of Carbon Offsetting: A Path to a Sustainable Future',
            WrittenBy: 'Owner',
            DateBy: 'May 27, 2024'
        },
    ];
    const handleBlogs = (data) => {
        console.log("data",data)
        setActiveBlog(data)
    }
    return (
        <>
            <div className="BlogPage">
                <div className="headerBlogPage">
                    <div className="container">
                        <div className="row d-flex justify-content-center">
                            <div class="input-group inputgrp mb-3 px-0">
                                <input type="text" class="form-control inputtag" placeholder="Search articles..." aria-label="Search articles..." aria-describedby="basic-addon2" />
                                <span class="input-group-text inputtext" id="basic-addon2"><img src={searchicon} alt="Search" width={'70%'} /></span>
                            </div>

                           { console.log("activeBlog",activeBlog)}
                            {activeBlog !== null ? 
                                   <>
                                        <img src={activeBlog.image} alt="image" className='mt-5' />
                                        <div className="blogtype mt-3">
                                            <h5>Education</h5>
                                            <h3 className='mt-1'>{activeBlog.heading}</h3>
                                            <h6>By {activeBlog.WrittenBy}</h6>
                                            <p>{activeBlog.DateBy}</p>
                                            <h4 onClick={()=>navigate(`/blog/${encodeURIComponent(activeBlog.heading)}`,{state:activeBlog})}>Read Now</h4>
                                        </div>
                                        </>   :''
                                }
                        </div>
                    </div>
                </div>
                <div className="container owlcaraousel-blogpage">
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
                        {
                            BlogsArray.map((value, index) => {
                                return (
                                    <Cards key={index} image={value.image} text={value.heading} author={value.WrittenBy} date={value.DateBy} data={value} handleBlogs={handleBlogs} />
                                )
                            })
                        }
                    </OwlCarousel>

                </div>
                <div className="categories">
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
                </div>

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
                <div className="cardss" style={{ cursor: 'pointer' }} onClick={() => handleBlogs(data)}>
                    <div className="topsection">
                        <img src={image} alt="image" />
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