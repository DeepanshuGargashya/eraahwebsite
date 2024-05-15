import React,{useState} from 'react'
// import BannerImage from '../Assets/blog.png'
import ArrowRight from '../Assets/arrowRight.png'
import { NavLink } from 'react-router-dom'
// import BannerImage from '../Assets/blogg.jpg'
import BannerImage from '../Assets/blogg.png'
function BlogBanner() {
    const [filter,setfilter] = useState(false);
    return (
        <>
            <div className="container-fluid" style={{marginTop:'75px'}}>
                <div className="row mt-5 banner" >
                    <img src={BannerImage} class={filter === true ? 'filterimage px-0' : 'px-0'} alt="" />
                    <div className="banner-content">
                        <h1 className='mb-0'>Positive change starts </h1>
                        <h1>with <span>your action</span></h1>
                        <p>Join us in making a difference that truly matters</p>
                        <NavLink to={'/donate'} style={{ textDecoration: 'none' }}><button className="button" onMouseEnter={()=>setfilter(true)} onMouseLeave={()=>setfilter(false)}>
                            <span class="button-text">Donate now</span>
                            <img src={ArrowRight} alt="" />
                        </button></NavLink>
                    </div>
                </div>
            </div>
        </>
    )
}
export default BlogBanner