import { Link } from "react-router-dom";
import ErrahLogo from "../Assets/errahFooter.png";
import InstaWhite from "../Assets/instaWhite.png";
import FbWhite from "../Assets/fbWhite.png";
import LinkedinWhite from "../Assets/linkedinWhite.png";
import TwitWhite from "../Assets/twitWhite.png";
import { NavLink } from "react-router-dom";

function Footer() {
  // const [color, setColor] = useState();

  function scrollToUpward(color) {
    if (color === "Home") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // setColor('Home')
    } else if (color === "About us") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // setColor('About us')
    }
    if (color === "Team") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // setColor('Team')
    }
    if (color === "Book A Free consultant") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // setColor('Book A Free consultant')
    }
  }
  return (
    <footer className="footer-area">
      <div className="container-fluid">
        <div className="d-flex align-items-center ">
          <img style={{ width: "10%" }} src={ErrahLogo} alt="" />
          <h3 className="text-white">Eraah</h3>
        </div>
        <div className="d-flex flex-wrap ">
          <div className="col-sm-3 footer d-flex justify-content-center">
            <div className="single-footer-widget">
              {/* <h4>Contact Us</h4> */}
              <ul className="list">
                <li>
                  <Link to={"/faq"} onClick={() => scrollToUpward("Team")}>
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link to={"/team"} onClick={() => scrollToUpward("Home")}>
                    Join us
                  </Link>
                </li>
                <li>
                  <Link to={"/mission"} onClick={() => scrollToUpward("Home")}>
                    Mission/Vision
                  </Link>
                </li>
                <li>
                  <Link to={"/gallery"} onClick={() => scrollToUpward("Home")}>
                    Gallery
                  </Link>
                </li>
                <li>
                  <Link to={"/partner"} onClick={() => scrollToUpward("Home")}>
                    Partner NGO
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/bankPartner"}
                    onClick={() => scrollToUpward("Team")}
                  >
                    Our Partners
                  </Link>
                </li>
                {/* <li><Link to={"/conditions"} onClick={()=> scrollToUpward('Team')}>Privacy(T&C)</Link></li> */}
                {/* <li><Link to={""}>Community</Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-3 footer d-flex justify-content-center">
            <div className="single-footer-widget">
              <ul className="list">
                <li className="mb-2">CONTACT US</li>
                <li>02 9281 9829</li>
                <li>shrey.bansal@errah.org</li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 footer d-flex justify-content-center">
            {/* <div className="single-footer-widget">
                            <ul className="list">
                                
                            <li className="mb-2">FOLLOW US</li>
                            <div className="d-flex ">
                                <div className="circleWhite me-2">
                                    <img src={InstaWhite} alt="" />
                                </div>
                                <div className="circleWhite  mx-2">
                                    <img src={FbWhite} alt="" />
                                </div>
                                <div className="circleWhite  mx-2">
                                    <img src={LinkedinWhite} alt="" />
                                </div>
                                <div className="circleWhite  mx-2">
                                    <img src={TwitWhite} alt="" />
                                </div>
                            </div>
                                
                            </ul>
                        </div> */}
          </div>
          <div className="col-sm-3 footer d-flex justify-content-center">
            <div className="single-footer-widget office ">
              {/* <h4 className="text-end">Our Office</h4> */}
              <ul className="list text-end">
                <li className="mb-2">OUR OFFICE</li>
                <li>B-38, Block M, Old DLF Colony, </li>
                <li>Sector 14, Gurugram, Haryana</li>
                <li>PIN : 122001</li>
              </ul>
            </div>
          </div>
        </div>
        <div className="horizontal-line text-white">
          <hr className="mt-0" />
        </div>
        <div className="copyright-area d-flex justify-content-between flex-wrap pb-3">
          <div className="col-sm-6 d-flex justify-content-center">
            <span>2024 © Eraah Pvt Limited</span>
          </div>
          <div className="policy-contentt col-sm-6 ">
            <NavLink
              className="text-center"
              to={"/policy"}
              style={{ textDecoration: "none" }}
            >
              <span className="mx-3 text-white">PRIVATE POLICY</span>
            </NavLink>
            <NavLink
              className="text-center"
              to={"/conditions"}
              style={{ textDecoration: "none" }}
            >
              <span className="mx-3 text-white">TERMS & CONDITIONS</span>
            </NavLink>
            {/* <span>TERMS & CONDITIONS</span> */}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
