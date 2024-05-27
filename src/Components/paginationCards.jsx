import { Pagination } from "@mui/material";
import react, { useState } from "react";
import Pagination1 from "../Assets/pagination1.png";
import iphoneimg from "../Assets/iphoneimg.png";
import Save from "../Assets/save.png";
import { NavLink } from "react-router-dom";
import trusticon from '../Assets/trusticon.png'
import impact from '../Assets/impact.png'
import transaparency from '../Assets/transaparency.png'
import playstore from '../Assets/playstore.png'
import appStoreicon from '../Assets/appStoreicon.png'

function PaginationCard() {
  const [page, setPage] = useState(1);
  const arrayData = [
    {
      count: '12',
      name: 'Laxmi Prasad',
      text: 'Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.',

    },
    {
      count: '12',
      name: 'Laxmi Prasad',
      text: 'Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.',

    },
    {
      count: '12',
      name: 'Laxmi Prasad',
      text: 'Innovative educator fostering creativity and critical thinking in Indian classrooms. She teaches Art.',

    },
  ]
  const [checkedbookmark, setcheckedbookmark] = useState(Array(arrayData.length).fill(false));
  function scrollToUpward() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  const handlebookmark = (index) => {
    const newCheckedBookmarks = [...checkedbookmark];
    newCheckedBookmarks[index] = !newCheckedBookmarks[index];
    setcheckedbookmark(newCheckedBookmarks);
  }

  return (
    <>
      <div className="container blogcards my-4">
        <div className="row d-flex justify-content-center">
          {
            arrayData.map((value, index) => {
              return (
                <>
                  <Blogcard key={index} index={index} img={Pagination1} count={value.count}
                    name={value.name} text={value.text}
                    handlebookmark={() => handlebookmark(index)} checkedbookmark={checkedbookmark[index]} scrollToUpward={scrollToUpward} />
                </>
              )
            })}
        </div>
        <div className="customPagination d-inline-flex justify-content-center mt-3  mb-5 pb-3 pt-4 w-100">
          <div className="pagination-blogcard">
            <Pagination
              style={{ alignSelf: "center" }}
              count={10}
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
          {/* <div className="seemorebtn float-right">
            <h5>See More &nbsp;&nbsp;→</h5>
          </div> */}
        </div>
      </div>
      <div className="introtoPlatform pb-4">
        <div className="container">
          <div className="row heading">
            <h5>INTRODUCING OUR PLATFORM</h5>
            <h3>A donation app built for <span>transparency</span></h3>
          </div>
          <div className="row content">
            <div className="col-xl-7 col-lg-6 col-sm-12">
              <img src={iphoneimg} width={'100%'} alt="iphone_img" />
            </div>
            <div className="col-xl-5 col-lg-6 col-sm-12 texts">
              <div className="box">
                <div className="square">
                  <img src={trusticon} alt="icon" width={'100%'} />
                </div>
                <div className="textinside">
                  <h6>Trust</h6>
                  <p>The app employs robust encryption and security measures to protect user data, ensuring privacy and confidentiality are maintained at all times.</p>
                </div>
              </div>
              <div className="box">
                <div className="square">
                  <img src={impact} alt="icon" width={'100%'} />
                </div>
                <div className="textinside">
                  <h6>See Your Impact</h6>
                  <p>The app is designed with a user-friendly interface, ensuring effortless navigation and seamless utilisation of its features, thus enhancing overall user experience.</p>
                </div>
              </div>
              <div className="box">
                <div className="square">
                  <img src={transaparency} alt="icon" width={'100%'} />
                </div>
                <div className="textinside">
                  <h6>Transparency</h6>
                  <p>Users can conveniently make in-app purchases through secure payment methods, enhancing the app's functionality and expanding available features.</p>
                </div>
              </div>
              <div className="links">
                <div className="store d-flex">
                  <a href="" className="boxes me-4">
                    <img src={playstore} alt="playstore"  width={'25%'}/>
                    <h5>GET IT ON <br/> Google Play</h5>
                    </a>
                  <a href="" className="boxes">
                    <img src={appStoreicon} alt="appStoreicon"  width={'25%'}/>
                    <h5>GET IT ON <br/> App Store</h5>
                    </a>
                  {/* <a href=""><img src={appStoreicon} alt="appStoreicon"  width={'70%'}/></a> */}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default PaginationCard;

function Blogcard({ index, img, count, name, text, handlebookmark, checkedbookmark, scrollToUpward }) {
  return (
    <>
      <div class="col-lg-4 col-sm-6 mt-4 ">
        <div className="card-width">
          <img src={img} alt="" />
          <div className="Totalchildrentaught">
            <h5>Total children taught</h5>
            <h5 className="count">{count}</h5>
          </div>
          <div className="box">
            <h4>{name}</h4>
            <h6>{text}</h6>
            <div className="btnsbox">
              <div className="circle" onClick={() => handlebookmark()}>
                {
                  checkedbookmark === true ?
                    <span className="checked-bookmark">
                      <i class="fa fa-bookmark fa-lg" aria-hidden="true"></i>
                    </span>
                    :
                    <span className="unchecked-bookmark">
                      <i class="fa fa-bookmark-o fa-lg" aria-hidden="true"></i>
                    </span>
                }
              </div>
              <div className="btns">
                <NavLink
                  to={"/donate"}
                  style={{ textDecoration: "none" }}
                  onClick={scrollToUpward}
                >
                  <a class="btn btn-primary purple">Donate now</a>
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
