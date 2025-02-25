import { useState, useEffect } from "react";
import "./WebDesigningStyle.css";
import { webban } from "./../../../assets";
import { WebDesign } from "./../../../Components/webDesign/webDesign";

import ServicesNav from "../../../Components/ServicesNav/ServicesNav";
import Banner from "../../../Components/ServicePageComponents/Banner/Banner";
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact";
import Title from "../../../Components/Title/Title";

import img1 from "../../../assets/services-img/web-design.webp";
import img2 from "../../../assets/services-img/web-design2.webp";

import BeatLoader from "react-spinners/BeatLoader";

export default function WebDesigning() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <div className="ser">
      {loading ? (
        <div className="loader-cover">
          <BeatLoader
            color={"#ff0000"}
            loading={loading}
            size={20}
            aria-label="Loading bouncer"
            data-testid="loader"
            className="loader"
          />
        </div>
      ) : (
        <>
          <ServicesNav />
          <Banner bannerImg={webban} />
          <Block1
            leftImg={img1}
            title={"Best Web Designing Company Offering Web Design Services"}
            para1={
              "Among the most crucial components of your brand’s online presence is your website. We make sure that your website is established and designed correctly to draw in new customers and nurture bottom-of-the-funnel leads to increase conversion rates."
            }
            para2={
              "We take your target audience into consideration when we develop and design your website, making sure it provides an excellent user experience with clear navigation, improved content, and striking visual features. In order to help your website rank higher among the millions of other websites on the internet, we also make sure it has the greatest Search Engine Optimization (SEO) available."
            }
          />
          <Block2
            quote={`With the help of our website design and development service, you can easily improve your company's online visibility and draw in more customers."`}
          />
          <Block3
            block3Title={"Search Engine Optimization Generate 100% Traffic"}
            block3para={
              "Unlock the untapped potential of Search Engine Optimization (SEO) and revolutionize your digital presence. Harnessing innovative strategies and cutting-edge techniques, our approach guarantees not just traffic, but an unstoppable surge of engaged visitors. Experience the thrill of dominating search rankings and unleashing the full force of 100% organic traffic, propelling your brand to unprecedented heights of online success."
            }
            li1={"Innovate Strategically"}
            li2={"Keyword Analysis"}
            li3={"Empower Efficiently"}
            rightImg={img2}
          />

          <div className="container">
            <Title title={"Projects"} subtitle={"WE LOVE OUR WORKS"} />
            {/* <Clients /> */}
            <WebDesign />
          </div>
          <Block4
            color={"#f19c79"}
            Experience={
              "Crafting Websites with Purpose and Precision. With extensive experience in web design, we create visually stunning and user-friendly websites that not only capture attention but also drive engagement and conversion. Your digital presence deserves nothing less than exceptional design."
            }
            GoodTeamwork={
              "Collaboration Brings Your Ideas to Life. Our dedicated team works together seamlessly to bring your vision to life. We value collaboration, and by combining our expertise in design, development, and strategy, we deliver outstanding web experiences."
            }
            Support={
              "Your Website’s Success, Our Priority—Anytime, Anywhere. We are here to support you every step of the way, from the initial design to ongoing maintenance. Our team is available 24/7 to ensure your website performs flawlessly at all times."
            }
            TrustedCompany={
              "Reliability and Quality in Every Pixel. Our clients trust us to deliver beautiful, functional websites that are built to last. We focus on providing reliable, cutting-edge web solutions that ensure your online presence stands out in a competitive market."
            }
            Creative={
              "Where Design Meets Innovation. We blend creativity with functionality to design websites that are not only visually appealing but also intuitive and optimized for performance. Our design process brings fresh ideas and forward-thinking solutions to every project."
            }
          />
          <div className="container">
            <Title title={"contact us"} subtitle={"get in touch"} />
            <Contact />
          </div>
        </>
      )}
    </div>
  );
}
