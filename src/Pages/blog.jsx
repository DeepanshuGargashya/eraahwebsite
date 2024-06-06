import { useState } from "react";
import BlogBanner from "../Components/blogBanner";
import PaginationCard from "../Components/paginationCards";
import Phone from "../Assets/phone.png";
import Data from "../Assets/data.png";
import Payment from "../Assets/payment.png";
import Easy from "../Assets/easy.png";
import GooglePlay from "../Assets/googlePlay.png";
import AppStore from "../Assets/appStore.png";

function Blog() {
  const [color, changeColor] = useState("All");

  const setTabValue = (tab) => {
    changeColor(tab);
  };
  return (
    <>
      <BlogBanner />
      {/* <div className="container">
        <div className="row support-teachers mt-5 mb-2">
          <h2 className="text-center">
            Support our <span>teachers</span>
          </h2>
         
          <input
            class="form-control me-2 my-3 px-4"
            type="search"
            placeholder="Find donations..."
            aria-label="Search"
          />
        </div>
        <div className="row search-tags">
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "All"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : { backgroundColor: "rgba(244, 244, 244, 1)", color: "black" }
            }
            onClick={() => setTabValue("All")}
          >
            <span
              className="text-center"
              style={
                color === "All"
                  ? {  color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("All")}
            >
              All
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-2 text-center"
            style={
              color === "Disaster"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : { backgroundColor: "rgba(244, 244, 244, 1)", color: "black" }
            }
            onClick={() => setTabValue("Disaster")}
          >
            <span
              style={
                color === "Disaster"
                  ? { color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Disaster")}
            >
              Disaster
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Children"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : { backgroundColor: "rgba(244, 244, 244, 1)", color: "black" }
            }
            onClick={() => setTabValue("Children")}
          >
            <span
              style={
                color === "Children"
                  ? { color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Children")}
            >
              Children
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "FoodCrisis"
                ? {
                    backgroundColor: "rgba(255, 195, 13, 1)",
                    color: "white",
                    width: "fit-content",
                  }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                    width: "fit-content",
                  }
            }
            onClick={() => setTabValue("FoodCrisis")}
          >
            <span
              style={
                color === "FoodCrisis"
                  ? {  color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("FoodCrisis")}
            >
              Food Crisis
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Health"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                  }
            }
            onClick={() => setTabValue("Health")}
          >
            <span
              style={
                color === "Health"
                  ? {color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Health")}
            >
              Health
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Education"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                  }
            }
            onClick={() => setTabValue("Education")}
          >
            <span
              style={
                color === "Education"
                  ? {  color: "white" }
                  : {
                     
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Education")}
            >
              Education
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Homeless"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                  }
            }
            onClick={() => setTabValue("Homeless")}
          >
            <span
              style={
                color === "Homeless"
                  ? {  color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Homeless")}
            >
              Homeless
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Animal"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                  }
            }
            onClick={() => setTabValue("Animal")}
          >
            <span
              style={
                color === "Animal"
                  ? {  color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Animal")}
            >
              Animal
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "Pandemic"
                ? { backgroundColor: "rgba(255, 195, 13, 1)", color: "white" }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                  }
            }
            onClick={() => setTabValue("Pandemic")}
          >
            <span
              style={
                color === "Pandemic"
                  ? {  color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("Pandemic")}
            >
              Pandemic
            </span>
          </div>
          <div
            className="all col-lg-1 col-md-2 col-sm-3 text-center"
            style={
              color === "WarCrisis"
                ? {
                    backgroundColor: "rgba(255, 195, 13, 1)",
                    color: "white",
                    width: "fit-content",
                  }
                : {
                    backgroundColor: "rgba(244, 244, 244, 1)",
                    color: "rgba(97, 97, 97, 1)",
                    width: "fit-content",
                  }
            }
            onClick={() => setTabValue("WarCrisis")}
          >
            <span
              style={
                color === "WarCrisis"
                  ? { color: "white" }
                  : {
                      color: "rgba(97, 97, 97, 1)",
                    }
              }
              onClick={() => setTabValue("WarCrisis")}
            >
              War Crisis
            </span>
          </div>
        </div>
      </div> */}
      <PaginationCard />
      {/* <div className="container app">
            <div className="row">
                <p className='text-center'>INTRODUCING OUR PLATFORM</p>
                <h2 className='text-center'>A donation app built for <span> transparency </span></h2>
                <div className="col-md-6 d-flex align-items-center">
                    <img src={Phone} alt="" />
                </div>
                <div className="col-md-6 ps-5">

                <div className="d-flex row align-items-center data-protected mt-4">
                <div className="data col-2">
                        <img src={Data} alt="" />
                    </div>
                                <div className="number col-10">
                                <h5 className='mb-0'>Data protected</h5>
                                <span>The app employs robust encryption and security measures to protect user data, ensuring privacy and confidentiality are maintained at all times.</span>
                            </div> 
                            </div>
                <div className="row row-cols-2 align-items-center data-protected mt-4">
                <div className="data col-2">
                        <img src={Easy} alt="" />
                    </div>
                                <div className="number col-10">
                                <h5 className='mb-0'>Easy to Use</h5>
                                <span>he app is designed with a user-friendly interface, ensuring effortless navigation and seamless utilisation of its features, thus enhancing overall user experience.</span>
                            </div> 
                            </div>
                <div className="row row-cols-2 align-items-center data-protected mt-4">
                <div className="data col-2">
                        <img src={Payment} alt="" />
                    </div>
                                <div className="number col-10">
                                <h5 className='mb-0'>Payment in App</h5>
                                <span>Users can conveniently make in-app purchases through secure payment methods, enhancing the app's functionality and expanding available features.</span>
                            </div> 
                            </div>

                            <div className="d-flex phoneImages align-items-center ">
                                <div className="googlePlayy">
                                <img className="googlePlay" src={GooglePlay} alt="" />
                                </div>
                                <div className="appStore">
                                <img src={AppStore} alt="" />
                                </div>
                            </div>
                   
                </div>
            </div>
        </div> */}
    </>
  );
}

export default Blog;
