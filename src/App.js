import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/footer";
import Loader from './Components/Loader';

const BlogPost = React.lazy(() => import("./Pages/blogPost"));
const Homepage = React.lazy(() => import("../src/Pages/homePage"));
const HowItWorks = React.lazy(() => import("../src/Pages/howItWorks"));
const Works = React.lazy(() => import("../src/Pages/works"));
const NGOOpens = React.lazy(() => import("../src/Pages/NGOOpen"));
const Blog = React.lazy(() => import("../src/Pages/blog"));
const BlogPageview = React.lazy(() => import("../src/Pages/BlogPageView"));
const Donate = React.lazy(() => import("../src/Pages/donate"));
const Mission = React.lazy(() => import("../src/Components/Mission/mission"));

const Partner = React.lazy(() => import("../src/Components/Partner/NGOPartner"));
// const Partner = React.lazy(() => import("../src/Components/Partner/partner"));

const Gallery = React.lazy(() => import("./Components/Gallery/gallery"));
const GalleryNew = React.lazy(() => import("./Components/Gallery/GalleryNew"));
const BankPartner = React.lazy(() =>
  import("./Components/BankPartner/bankPartner")
);
const CorporatePartner = React.lazy(() =>
  import("./Components/BankPartner/CorporatePartner")
);
const Conditions = React.lazy(() =>
  import("./Components/Terms&Conditions/t&C")
);
// const Team = React.lazy(() => import("./Components/Team/team"));
const Team = React.lazy(() => import("./Components/Team/TeamNew"));
const Faq = React.lazy(() => import("./Components/Faq's/faq"));
const LogIn = React.lazy(() => import("./Pages/logIn"));
const SignUp = React.lazy(() => import("./Pages/signUp"));
const Policy = React.lazy(() => import("./Pages/policy"));
const ContactUs = React.lazy(() => import("./Pages/ContactUs"));

const BlogPage = React.lazy(() => import('./Pages/BlogPage'));
const PaymentMain = React.lazy(() => import('./Pages/PaymentPages/PaymentMain'));

function App() {
  const location = useLocation();
  const isLoginPage =
    location.pathname === "/logIn" || location.pathname === "/signUp";
const navbarActive = window.location.href.includes('/payment') ? false : true
  
  return (
    <>
      <div className="App">
        <Suspense fallback={<Loader />}>
          {navbarActive ? <Navbar /> : ''}
          <Routes>
            <Route exact path="/" element={<Blog />} />
            <Route exact path="/works" element={<Homepage />} />
            <Route exact path="/donate" element={<Works />} />
            <Route exact path="/NGOabout" element={<NGOOpens />} />

            <Route exact path="/blog" element={<BlogPage />} />
            <Route exact path="/blog/:blogheading" element={<BlogPageview />} />
            {/* <Route exact path="/blog" element={<Donate />} /> */}

            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/partnerNGO" element={<Partner />} />

            <Route exact path="/gallery" element={<GalleryNew />} />
            {/* <Route exact path="/gallery" element={<Gallery />} /> */}

            <Route exact path="/CorporatePartner" element={<CorporatePartner />} />
            {/* <Route exact path="/bankPartner" element={<BankPartner />} /> */}

            <Route exact path="/conditions" element={<Conditions />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/logIn" element={<LogIn />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/policy" element={<Policy />} />
            <Route exact path="/blogPost" element={<BlogPost />} />
            <Route exact path="/contactus" element={<ContactUs />} />
            <Route exact path="/payment" element={<PaymentMain />} />
          </Routes>
          {!isLoginPage && <Footer />}
        </Suspense>
      </div>
    </>
  );
}

export default App;
