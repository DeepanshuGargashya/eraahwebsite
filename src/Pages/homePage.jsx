import "../Components/Navbar/style.scss";
import Card1 from ".././Assets/card1.png";
import Card2 from "../Assets/card2.png";
import Card3 from "../Assets/card3.png";
import Trans1 from "../Assets/trans1.png";
import Trans4 from "../Assets/trans4.png";
import Hand from "../Assets/hand.png";

function homePage() {
  return (
    <div className="container-fluid px-0">
      <div className="container">
        <div className=" py-5 ">
          <h2 className="text-center heading py-5 mt-5">
            Entirety of your contribution goes to
            <span> serve the child</span>
          </h2>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <h3 class="card-title text-center px-4 py-4">
                You choose a teacher
              </h3>
              <div className="white-circle mx-auto">
                <img src={Card1} class="card-img-top  mx-auto" alt="..." />
              </div>
              <div class="card-body">
                <p class="card-text text-center px-4 py-3">
                  Innovative educator fostering creativity and critical thinking
                  in Indian classrooms. She teaches Art.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <h3 class="card-title text-center px-5 py-4">
                We track progress
              </h3>
              <div className="white-circle mx-auto">
                <img src={Card2} class="card-img-top  mx-auto" alt="..." />
              </div>
              <div class="card-body">
                <p class="card-text text-center px-4 py-3">
                  Innovative educator fostering creativity and critical thinking
                  in Indian classrooms. She teaches Art.
                </p>
              </div>
            </div>
          </div>
          <div className="col-lg-4 col-md-6 mb-4">
            <div class="card">
              <h3 class="card-title text-center px-4 py-4">
                The child thanks you
              </h3>
              <div className="white-circle mx-auto">
                <img src={Card3} class="card-img-top  mx-auto" alt="..." />
              </div>
              <div class="card-body">
                <p class="card-text text-center px-4 py-3">
                  Innovative educator fostering creativity and critical thinking
                  in Indian classrooms. She teaches Art.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <div className=" transparency"> */}
      <div className="d-flex justify-content-evenly transparency align-items-center flex-wrap px-0">
        
        <div className="trans-left col-sm-5 mx-0 px-0 my-5 ">
          <h2>Transparency & Efficiency</h2>
          <p className="my-4">
            We know that you care about how effectively your donation is being
            used. That's why we show you how every dollar was spent, how you
            made a difference, and how grateful the students and teachers are!
          </p>
          
        </div>
        <div className="col-sm-5 trans-right my-5">
          {/* <div className="row">
          <div className="col-sm-6 col-xs-12">
            <div className="content">
              <div className="circle mx-auto ">
                <img className="mx-auto" src={Trans1} alt="" />
              </div>
              <p className="text-center pt-1">100% Transparency</p>
            </div>
            
            </div>
            <div className="col-sm-6 col-xs-12">

            <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans1} alt="" />
              </div>
              <p className="text-center pt-1">100% Transparency</p>
            </div></div>
            </div> */}
            {/* <div className="col-sm-6">
            <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans4} alt="" />
              </div>
              <p className="text-center pt-1">Track Your Impact</p>
            </div>
            <div className="content">
              <div className="circle mx-auto ">
                <img className="mx-auto" src={Trans1} alt="" />
              </div>
              <p className="text-center pt-1">100% Transparency</p>
            </div></div> */}
            <div className="row">
              <div className="col-sm-6 col-xs-6">
              <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans4} alt="" />
              </div>
              <p className="text-center pt-1">Track Your Impact</p>
            </div>
              </div>
              <div className="col-sm-6 col-xs-6">
              <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans4} alt="" />
              </div>
              <p className="text-center pt-1">Track Your Impact</p>
            </div>
              </div>
            </div>
            <div className="row">
              <div className="col-sm-6 col-xs-6">
              <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans4} alt="" />
              </div>
              <p className="text-center pt-1">Track Your Impact</p>
            </div>
              </div>
              <div className="col-sm-6 col-xs-6">
              <div className="content">
              <div className="circle mx-auto">
                <img className="mx-auto" src={Trans4} alt="" />
              </div>
              <p className="text-center pt-1">Track Your Impact</p>
            </div>
              </div>
            </div>
          
        </div>
       
      </div>
      {/* </div> */}
      {/* <div className="container involved my-5 ">
        <div className="row">
          <div className="col-md-8 col-sm-6">
            <h3 className="text-white px-5 py-3">Get involved</h3>
            <div className="d-flex justify-content-around">
              <div className="first">
                <p className="text-center mb-0">Partner With Eraah</p>
              </div>
              <div className="first">
                <p className="text-center mb-0">Support a School</p>
              </div>
              <div className="first">
                <p className="text-center mb-0">Join Our Team</p>
              </div>
            </div>
          </div>
          <div className="col-md-4 col-sm-6 px-0 ">
            <img style={{ width: "100%" }} src={Hand} alt="" />
          </div>
        </div>
      </div> */}

      <div className="getstartedbox my-5">
        <div className="container involved">
          <div className="row1" style={{ paddingRight: "10px" }}>
            <div className="row">
              <div className="col-8"style={{padding:'20px 0px 20px 40px'}}>
                <h5 className="text-white mb-4"> Get involved</h5>
              <div className="row" >
              <div className="col-md-4 col-xs-12 px-1">
              <div className="first">
                <p className="text-center mb-0">Partner With Eraah</p>
              </div>
              </div>
              <div className="col-md-4 col-xs-12 px-1">
              <div className="first">
                <p className="text-center mb-0">Support a Teacher</p>
              </div>
              </div>
              <div className="col-md-4 col-xs-12 px-1">
              <div className="first">
                <p className="text-center mb-0">Join Our Team</p>
              </div>
              </div>
              
            </div>
              </div>
              <div className="col-4 involvedImage">
        <img src={Hand} width={'104%'} style={{position:'relative',right:'-4%', borderTopRightRadius: "6px"}} alt="" />
              </div>
            </div>
           
          </div>
        </div>
      </div>
    </div>
  );
}

export default homePage;
