import React from 'react';
import Navbar from './components/Navbar';
import UpperBar from './pages/UpperBar'
import Carousel from './pages/Carousel';
import Ads from './pages/Ads';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import WhyRegistration from './pages/WhyRegistration';
import VideoIntro from './pages/VideoIntro';
import ClientAndMedia from './pages/ClientAndMedia';
import LowerPlate from './pages/LowerPlate';
import Blog from './components/Blog';
import Feedback from './pages/Feedback';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import FrequentAskQuestion from './pages/FrequentAskQuestion';
import AppZone from './pages/AppZone';
import Data from './pages/Data';
import Email from './pages/email'; 
import Footer from './pages/Footer';
// import CompanyLogo from './pages/CompanyLogo';


const App = () => {
  return (
    <>
     Register Karo
     <UpperBar/>
     <Navbar/>
     <Carousel/>
     <Ads/>
     <Services/>
     <AboutUs/>
     <WhyRegistration/>
     <VideoIntro/>
     <ClientAndMedia/>
     <LowerPlate/>
     <Blog/>
     <Feedback/>
     <FrequentAskQuestion/>
     <AppZone/>
     <Data/>
     <Email/>
     {/* <CompanyLogo/> */}
     <Footer/>

    </>
  );
};

export default App;
