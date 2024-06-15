import { Link } from "react-router-dom";
import ErrahLogo from "../Assets/Eraah-footer-logo.png";
// import ErrahLogo from "../Assets/errahFooter.png";
import InstaWhite from "../Assets/instaWhite.png";
import FbWhite from "../Assets/fbWhite.png";
import LinkedinWhite from "../Assets/linkedinWhite.png";
import TwitWhite from "../Assets/twitWhite.png";
import instagramlogo from "../Assets/instagramlogo.png";
import Facebooklogo from "../Assets/Facebooklogo.png";
import LinkedInlogo from "../Assets/LinkedInlogo.png";
import Twitterlogo from "../Assets/Twitterlogo.png";
import youtubeicon from "../Assets/youtubeicon.png";
import { useNavigate } from "react-router-dom";
import { NavLink } from "react-router-dom";

function Footer() {
  // const [color, setColor] = useState();
const navigate = useNavigate();
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
    if (color === "Homepages") {
      window.scrollTo({ top: 0, behavior: "smooth" });
      // setColor('Book A Free consultant')
    }
  }
  return (
    <footer className="footer-area">
      <div className="container" style={{ marginTop: '15px' }}>
        <div className="d-flex align-items-center">
          <img style={{ width: "4%", marginRight: '5px' }} className="Eraahfooter-logo" src={ErrahLogo} alt="" />
          <h3 className="text-white logotext">Eraah</h3>
        </div>
        <div className="d-flex flex-wrap" style={{ marginTop: '40px' }}>
          <div className="col-sm-3 footer d-flex">
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
                    Mission And Vision
                  </Link>
                </li>
                {/* <li>
                  <Link to={"/gallery"} onClick={() => scrollToUpward("Home")}>
                    Gallery
                  </Link>
                </li> */}
                <li>
                  <Link to={"/partnerNGO"} onClick={() => scrollToUpward("Home")}>
                    Partner NGOS
                  </Link>
                </li>
                <li>
                  <Link
                    to={"/CorporatePartner"}
                    // to={"/bankPartner"}
                    onClick={() => scrollToUpward("Team")}
                  >
                    Corporate Partner
                  </Link>
                </li>
                <li>
                  <Link
 to={"/policy"}
 onClick={() => scrollToUpward("Team")}

                  >
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link
 to={"/conditions"}
 onClick={() => scrollToUpward("Team")}

                  >
                    Terms & Conditions
                  </Link>
                </li>
                {/* <li><Link to={"/conditions"} onClick={()=> scrollToUpward('Team')}>Privacy(T&C)</Link></li> */}
                {/* <li><Link to={""}>Community</Link></li> */}
              </ul>
            </div>
          </div>
          <div className="col-sm-3 footer d-flex">
            <div className="single-footer-widget">
              <ul className="list">
                <li className="mb-2" onClick={()=>navigate('/contactus')} style={{cursor:'pointer'}}>CONTACT US</li>
                <li><a href="tel:9958828233" style={{ fontSize: '14.5px' }}>+91 9958828233</a></li>
                <li><a href="mailto:shrey.bansal@eraah.org" style={{ fontSize: '14.5px' }}>shrey.bansal@eraah.org</a></li>
              </ul>
            </div>
          </div>
          <div className="col-sm-3 footer d-flex">
            <div className="single-footer-widget">
              <ul className="list">

                <li className="mb-2">FOLLOW US</li>
                <div className="d-flex">
                  <a href="https://www.instagram.com/eraah_org?igsh=M3k3NzMyMmt6b20=" target="_blank" className="circleWhite mx-2 mt-2">
                    <img src={instagramlogo} alt="insta logo" width={'90%'} style={{marginTop:'1px',marginLeft:'1px'}}/>
                  </a>
                  {/* <a className="circleWhite  mx-2 mt-2">
                    <img src={Facebooklogo} alt="fb logo" width={'90%'} style={{marginLeft:'2px'}} />
                  </a> */}
                  <a href="https://www.linkedin.com/company/eraah/" target="_blank" className="circleWhite  mx-2 mt-2">
                    <img src={LinkedInlogo} alt="linkidin logo" width={'90%'} style={{marginLeft:'2px'}} />
                  </a>
                  <a href="https://x.com/eraah_org?s=21&t=78VDFA9U7opi0vJ_Df7MnQ" target="_blank" className="circleWhite  mx-2 mt-2">
                    <img src={Twitterlogo} alt="twitter logo" width={'90%'} style={{marginLeft:'2px'}}/>
                  </a>
                  <a href="https://youtube.com/@eraah_org?si=TDb_DjRKMnPBsWrf" target="_blank" className="circleWhite  mx-2 mt-2">
                    <img src={youtubeicon} alt="youtube logo" width={'90%'} style={{marginLeft:'1px',marginTop:'1px'}}/>
                  </a>
                </div>
                {/* <li><span>2024 © Eraah Pvt Limited</span></li> */}

              </ul>
            </div>
          </div>
          <div className="col-sm-3 footer d-flex">
            <div className="single-footer-widget office ">
              {/* <h4 className="text-end">Our Office</h4> */}
              <ul className="list">
                <li className="mb-2">OUR OFFICE</li>
                <li>B-38, Block M, Old DLF Colony, </li>
                <li>Sector 14, Gurugram, Haryana</li>
                <li>PIN : 122001</li>
              </ul>
            </div>
          </div>
        </div>
        {/* <div className="horizontal-line text-white">
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
              <span className="mx-3 text-white">PRIVACY POLICY</span>
            </NavLink>
            <NavLink
              className="text-center"
              to={"/conditions"}
              style={{ textDecoration: "none" }}
            >
              <span className="mx-3 text-white">TERMS & CONDITIONS</span>
            </NavLink>
          </div>
        </div> */}
      </div>
    </footer>
  );
}

export default Footer;
