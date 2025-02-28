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
          <Block3
            block3Title={"Web Design Service: Craft Your Digital Identity"}
            block3para={
              "Transform your online presence with our exceptional web design services. Our team specializes in creating visually stunning, responsive websites tailored to your business needs. Whether it’s an e-commerce platform or a simple portfolio site, we ensure your website isn’t just beautiful—it’s functional and user-friendly. With innovative design concepts and the latest technologies, we deliver websites that engage visitors and convert them into loyal customers. Elevate your digital identity and create lasting impressions with a custom website that’s as unique as your brand."
            }
            li1={"Design with Purpose"}
            li2={"User-Centric Approach"}
            li3={"Responsive & Mobile-Ready"}
            rightImg={img2}
          />

          <div className="container">
            <Title title={""} subtitle={"A Look at Our Website Handles"} />
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
          <Block2
            quote={`With the help of our website design and development service, you can easily improve your company's online visibility and draw in more customers."`}
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
