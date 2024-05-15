import { Pagination } from "@mui/material";
import { useState } from "react";
import Pagination1 from "../Assets/pagination1.png";
import Save from "../Assets/save.png";
import { NavLink } from "react-router-dom";
// import Pagination1 from '../Assets/laxmi.jpg'

function PaginationCard() {
  const [page, setPage] = useState(1);
  function scrollToUpward() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }
  return (
    <>
      <div className="container blogcards my-4">
        <div className="row d-flex justify-content-center">
          <div class="card col-lg-3 col-sm-6 mx-4 mt-4 card-width  paginationCard ">
            <img src={Pagination1} class="card-img-top" alt="..." />
            <div className="childrens">
              <span>Total children taught</span>
              <span className="count">12</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Laxmi Prasad</h5>
              <p class="card-text">
                Innovative educator fostering creativity and critical thinking
                in Indian classrooms. She teaches Art.
              </p>
              <div className="childrenss d-flex justify-content-between">
                <img src={Save} alt="" />
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
          <div class="card col-lg-3 col-sm-6 mx-4 mt-4 card-width  paginationCard ">
            <img src={Pagination1} class="card-img-top" alt="..." />
            <div className="childrens">
              <span>Total children taught</span>
              <span className="count">12</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Laxmi Prasad</h5>
              <p class="card-text">
                Innovative educator fostering creativity and critical thinking
                in Indian classrooms. She teaches Art.
              </p>
              <div className="childrenss  d-flex justify-content-between">
                <img src={Save} alt="" />
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
          <div class="card col-lg-3 col-sm-6 mx-4 mt-4 card-width paginationCard ">
            <img src={Pagination1} class="card-img-top" alt="..." />
            <div className="childrens">
              <span>Total children taught</span>
              <span className="count">12</span>
            </div>
            <div class="card-body">
              <h5 class="card-title">Laxmi Prasad</h5>
              <p class="card-text">
                Innovative educator fostering creativity and critical thinking
                in Indian classrooms. She teaches Art.
              </p>
              <div className="childrenss d-flex justify-content-between">
                <img src={Save} alt="" />
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
          {/* <Blogcard img={Pagination1} /> */}
        </div>
      </div>
      <div className="d-inline-flex justify-content-between mb-5 p-3 w-100">
        {/* <div className="d-inline-flex  pt-2">
                <p className="mt-1">
                  <b>Go to page :</b>{" "}
                </p>
                <p className="mx-2 my-0">
                  <select className="page-box" name="pageNumber" id="">
                    <option value="number">1</option>
                  </select>
                </p>
                <p className="mt-1">
                  <b>of 10</b>
                </p>
              </div> */}
        {/* <div className="">
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
              </div> */}
      </div>
    </>
  );
}

export default PaginationCard;

function Blogcard({ img }) {
  return (
    <>
      <div class="col-lg-3 col-sm-6 mx-4 mt-4 card-width">
          <img src={img} alt="" />
          <div className="Totalchildrentaught">
            <h5>Total children taught</h5>
            <h5 className="count">12</h5>
          </div>
      </div>
    </>
  )
}
