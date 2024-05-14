import React, { Suspense } from "react";
import "./App.css";
import { Route, Routes, useLocation } from "react-router-dom";
import Navbar from "../src/Components/Navbar/navbar";
import Footer from "../src/Components/footer";
const Homepage = React.lazy(() => import("../src/Pages/homePage"));
const HowItWorks = React.lazy(() => import("../src/Pages/howItWorks"));
const Works = React.lazy(() => import("../src/Pages/works"));
const Blog = React.lazy(() => import("../src/Pages/blog"));
const Donate = React.lazy(() => import("../src/Pages/donate"));
const Mission = React.lazy(() => import("../src/Components/Mission/mission"));
const Partner = React.lazy(() => import("../src/Components/Partner/partner"));
const Gallery = React.lazy(() => import("./Components/Gallery/gallery"));
const BankPartner = React.lazy(() =>
  import("./Components/BankPartner/bankPartner")
);
const Conditions = React.lazy(() =>
  import("./Components/Terms&Conditions/t&C")
);
const Team = React.lazy(() => import("./Components/Team/team"));
const Faq = React.lazy(() => import("./Components/Faq's/faq"));
const LogIn = React.lazy(() => import("./Pages/logIn"));
const SignUp = React.lazy(() => import("./Pages/signUp"));
const Policy = React.lazy(() => import("./Pages/policy"));
const BlogPost = React.lazy(() => import("./Pages/blogPost"));

function App() {
  const location = useLocation();

  const isLoginPage =
    location.pathname === "/logIn" || location.pathname === "/signUp";

  return (
    <>
      <div className="App">
        <Navbar />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route exact path="/" element={<Blog />} />
            <Route exact path="/works" element={<Homepage />} />
            <Route exact path="/donate" element={<Works />} />
            <Route exact path="/blog" element={<Donate />} />
            <Route exact path="/mission" element={<Mission />} />
            <Route exact path="/partner" element={<Partner />} />
            <Route exact path="/gallery" element={<Gallery />} />
            <Route exact path="/bankPartner" element={<BankPartner />} />
            <Route exact path="/conditions" element={<Conditions />} />
            <Route exact path="/team" element={<Team />} />
            <Route exact path="/faq" element={<Faq />} />
            <Route exact path="/logIn" element={<LogIn />} />
            <Route exact path="/signUp" element={<SignUp />} />
            <Route exact path="/policy" element={<Policy />} />
            <Route exact path="/blogPost" element={<BlogPost />} />
          </Routes>
        </Suspense>
        {!isLoginPage && <Footer />}
      </div>
    </>
  );
}

export default App;
