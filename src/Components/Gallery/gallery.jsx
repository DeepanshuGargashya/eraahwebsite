import Blur1 from '../../Assets/blur1.png'
import Gallery1 from '../../Assets/gallery1.png'
import Gallery2 from '../../Assets/gallery2.png'
import Gallery3 from '../../Assets/gallery3.png'
import Gallery4 from '../../Assets/gallery4.png'
import Gallery5 from '../../Assets/gallery5.png'
import { Pagination } from '@mui/material'
import { useState } from 'react'
import { NavLink } from 'react-router-dom'
import Chotu1 from '../../Assets/chotu1.png'
import Chotu2 from '../../Assets/chotu2.png'
import Video1 from '../../Assets/video1.MOV'
import Video2 from '../../Assets/video2.MOV'
import Gallery6 from '../../Assets/galleryy1.jpg'
import Gallery7 from '../../Assets/galleryy2.jpg'
import Gallery8 from '../../Assets/gallery3.jpg'
import Gallery9 from '../../Assets/gallery4.jpg'
import Gallery10 from '../../Assets/gallery5.jpg'
import Gallery11 from '../../Assets/gallery6.jpg'
import Gallery12 from '../../Assets/gallery7.jpg'
import Gallery13 from '../../Assets/gallery8.jpg'
import Gallery14 from '../../Assets/gallery9.jpg'
import Gallery15 from '../../Assets/gallery10.jpg'
import Gallery16 from '../../Assets/gallery11.jpg'
// import Gallery17 from '../../Assets/gallery12'

function Gallery(){
    
    const[page,setPage] = useState(1)
    return(
<>
<div className="container-fluid gallery px-0">
    <h1>Eraah Gallery</h1>
    <img className='blur' src={Blur1} alt="" />
    <div className="d-flex justify-content-center pt-5 flex-wrap">
        <p className='mx-3 pointer' >Home</p>
        <p className='mx-3 pointer' > Education</p>
        <p className='mx-3 pointer'  >Health</p>
        <p className='mx-3 pointer'  >Animal</p>
        <p className='mx-3 pointer'  >Old age</p>
    </div>
    {/* <img className='px-5 pt-5' style={{width:'100%'}} src={Gallery1} alt="" /> */}
    <div className="d-flex px-0 justify-content-around">

    <img style={{width:"20%"}} src={Gallery6} alt="" />
    <img style={{width:"20%"}} src={Gallery7} alt="" />
    <img style={{width:"20%"}} src={Gallery8} alt="" />
    <img style={{width:"20%"}} src={Gallery9} alt="" />
    </div>
    <div className="d-flex px-0 justify-content-around mt-4">

    <img style={{width:"20%"}} src={Gallery10} alt="" />
    <img style={{width:"20%"}} src={Gallery11} alt="" />
    <img style={{width:"20%"}} src={Gallery12} alt="" />
    <img style={{width:"20%"}} src={Gallery13} alt="" />
        
    </div>
    <div className="d-flex px-0 justify-content-around mt-4">

    <img style={{width:"20%"}} src={Gallery14} alt="" />
    <img style={{width:"20%"}} src={Gallery15} alt="" />
    <img style={{width:"20%"}} src={Gallery16} alt="" />
    <img style={{width:"20%"}} src={Gallery13} alt="" />
        
    </div>
        <div className="container d-flex justify-content-around flex-wrap">
        <video width="320" height="240" autoPlay controls>
  <source src={Video1} type="video/mp4" />
  Your browser does not support the video tag.
        </video>
        <video width="320" height="240" autoPlay controls>
  <source src={Video2} type="video/mp4" />
  Your browser does not support the video tag.
        </video>
        <video width="320" height="240" autoPlay controls>
  <source src={Video2} type="video/mp4" />
  Your browser does not support the video tag.
        </video></div>
    <div className="smilesContainer mt-5" style={{position:'relative'}}>

    <img className='' style={{width:'100%'}} src={Gallery2} alt="" />
    <div className="smiles text-center">1000+ Smiles</div>
    </div>

    {/* <div className="paginationGallery">
        <div className="d-flex col-12">
            <img style={{width:'100%'}} src={Gallery3} alt="" />
            <img style={{width:'100%'}} src={Gallery4} alt="" />
            <img style={{width:'100%'}} src={Gallery5} alt="" />
        </div>
        <div className="d-inline-flex justify-content-between mb-5 p-3 w-100">

              <div className="">
                <Pagination
                  style={{ alignSelf: "center" }}
                  count={10}
                  color="primary"
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
    </div> */}

    <div className="chotuContainer d-flex mt-5">
      <div className="chotu1Con">
        <img className='d-flex m-auto ' style={{width:'80%'}} src={Chotu1} alt="" />
        <div className="chotuImage">
          <h5 className='text-white'>Chotu can go to school now</h5>
        </div>
      </div>
      <div className="chotu1Con">
        <img className='d-flex m-auto ' style={{width:'80%'}} src={Chotu2} alt="" />
        <div className="chotuImage">
          <h5 className='text-white'>Chotu can go to school now</h5>
        </div>
      </div>
    </div>



    <p className='text-center helppUS mt-5'>Help us add more smiles in this gallery !</p>
    <NavLink  to={'/donate'} style={{textDecoration:'none'}}><div class="btn btn-primary donationButton mt-4 d-flex m-auto mb-4 " style={{width:'fit-content',backgroundColor:'#FFC30D',border:'none',borderRadius:'20px',textDecoration:'none'}} >MAKE A DONATION</div></NavLink>

</div>

   
</>
    )
}

export default Gallery