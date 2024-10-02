import HomeAbout from "../../Components/About/HomeAbout";
import HomeAboutPart from "../../Components/About/HomeAboutPart";
import HomeMeetTheTeam from "../../Components/About/HomeMeetTeam";
import Activities from "../../Components/Area of Activities/Activities";
import Choose from "../../Components/Choose/Choose";
import Carousel1 from "../../Components/Hero/Carousel1";
import HomeCards from "../../Components/Hero/HomeCards";
import RecentActivities from "../../Components/Home/RecentActivities";
import WhatWEBuild from "../../Components/Home/WhatWEBuild";
import AboutUsObjectives from "../../Components/NewAbout/AboutUsObjectives";
import HomeNews from "../../Components/News/HomeNews";
import HomeProjects from "../../Components/Projects/HomeProjects";
import HomeServicePart from "../../Components/Services/HomeServicePart";
import HomeServices from "../../Components/Services/HomeServices";
import HomeTestimonial from "../../Components/Testimonial/HomeTestimonial";



const Home = () => {
  return (
    <div>
      <Carousel1></Carousel1>
      {/* <HomeCards></HomeCards> */}
     {/* <HomeAboutPart></HomeAboutPart> */}
     <HomeAbout></HomeAbout>
     <WhatWEBuild></WhatWEBuild>
     <RecentActivities></RecentActivities>
     <Activities></Activities>

      <AboutUsObjectives></AboutUsObjectives>

     <HomeServicePart></HomeServicePart>
      <HomeMeetTheTeam></HomeMeetTheTeam>
      <Choose></Choose>
     <HomeProjects></HomeProjects>
<HomeTestimonial></HomeTestimonial>
<HomeNews></HomeNews>
 {/* <Footer></Footer> */}
    </div>
  );
};

export default Home;
