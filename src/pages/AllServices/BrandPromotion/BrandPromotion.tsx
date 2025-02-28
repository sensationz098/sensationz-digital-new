import { useState, useEffect } from "react";
import "./BrandPromotionStyle.css";
import { brandban } from "./../../../assets";
import { brandPromo } from "./../../../constant";
import ServicesNav from "../../../Components/ServicesNav/ServicesNav";
import Banner from "../../../Components/ServicePageComponents/Banner/Banner";
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact";
import Title from "../../../Components/Title/Title";

import img1 from "../../../assets/services-img/brand-promo.webp";
import img2 from "../../../assets/services-img/brand-promo2.webp";

import BeatLoader from "react-spinners/BeatLoader";
import { ClientList } from "../../../Components";

export default function BrandPromotion() {
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
  }, []);
  return (
    <>
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
        <div className="ser">
          <ServicesNav />
          <Banner bannerImg={brandban} />
          <Block1
            leftImg={img1}
            title={"Our Vision"}
            para1={
              "Sensationz Digital understands that effective social media management is integral to your brand’s success in today’s digital landscape. Our tailored approach to social media management begins with a comprehensive understanding of your business goals, target audience, and industry trends. From crafting engaging content to implementing data-driven strategies, we ensure that your social media presence reflects your brand’s unique identity while resonating with your audience."
            }
            para2={
              "Through consistent monitoring, analysis, and optimization, we proactively engage with your followers, cultivate meaningful relationships, and drive measurable results. Whether it’s increasing brand awareness, driving website traffic, or generating leads, Sensationz Digital is committed to maximizing your social media ROI and helping you achieve your digital objectives."
            }
          />
          <Block3
            block3Title={"Brand Promotions: Ignite Your Brand’s Growth"}
            block3para={
              "Elevate your brand’s visibility and impact through our expert brand promotion strategies. We combine creativity and analytics to design campaigns that not only build brand awareness but also foster genuine connections with your target audience. From social media campaigns to influencer partnerships, we leverage every channel to give your brand the exposure it deserves. Our tailored promotions boost engagement and drive sales, ensuring your brand stands out in a crowded market and resonates with your audience."
            }
            li1={"Amplify Your Presence"}
            li2={"Targeted Campaigns"}
            li3={"Drive Engagement & Loyalty"}
            rightImg={img2}
          />

          <div className="container">
            <Title title={"clients"} subtitle={"Whom we have worked for?"} />
            <ClientList brandPromo={brandPromo} />
            {/* <Clients /> */}
          </div>

          <Block4
            color={"rgb(255, 184, 184)"}
            Experience={
              "Building Brands with Impact and Recognition. With extensive experience in brand promotion, we help businesses craft compelling strategies that increase visibility, build strong connections with audiences, and establish a memorable brand identity across all channels."
            }
            GoodTeamwork={
              "Collaborative Campaigns That Drive Results. Our team works in synergy to create and execute brand promotion campaigns that generate maximum impact. By combining strategic insights with creative execution, we ensure your brand stands out in a crowded market."
            }
            Support={
              "Your Brand’s Success, Always Our Priority. We are always here to support your brand’s promotion, whether it's fine-tuning your campaign or providing immediate feedback. Our team ensures that your brand's message is consistently and effectively delivered, round the clock."
            }
            TrustedCompany={
              "Where Trust Meets Innovation in Brand Growth. Our clients trust us to deliver impactful brand promotion strategies that drive awareness and loyalty. We focus on authentic campaigns that build long-term relationships between your brand and its audience."
            }
            Creative={
              "Innovative Ideas, Real-World Results. We craft unique, creative campaigns that resonate with your target audience and make a lasting impression. Whether it's through digital ads, influencer partnerships, or content creation, we find innovative ways to elevate your brand."
            }
          />

          <Block2
            quote={`"We are the architects of solutions, offering a palette of services tailored to your needs"`}
          />
          <div className="container">
            <Title title={"contact us"} subtitle={"get in touch"} />
            <Contact />
          </div>
        </div>
      )}
    </>
  );
}
