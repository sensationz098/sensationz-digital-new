import { useState, useEffect } from "react";
import "./SocialMediaManagementStyle.css";
import { socialban } from "./../../../assets";
import ServicesNav from "../../../Components/ServicesNav/ServicesNav";
import Banner from "../../../Components/ServicePageComponents/Banner/Banner";
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact";
import Title from "../../../Components/Title/Title";

import img1 from "../../../assets/services-img/social-media-management.jpg";
import img2 from "../../../assets/services-img/social-media-management2.jpg";

import BeatLoader from "react-spinners/BeatLoader";

export default function SocialMediaManagement() {
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
          <Banner bannerImg={socialban} />
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
          <Block2
            quote={`"We are the architects of solutions, offering a palette of services tailored to your needs"`}
          />
          <Block3
            block3Title={
              "We are the architects of solutions, offering a palette of services tailored to your needs"
            }
            block3para={
              "At Sensationz Digital, we offer comprehensive social media solutions tailored to elevate your online presence and drive results. From engaging content creation to captivating video shoots and targeted social media ads, we provide a full suite of services to help you stand out in the digital landscape.                     Our team of skilled content creators is dedicated to crafting compelling and relevant content that resonates with your audience. From eye-catching graphics to engaging captions, we ensure that every piece of content reflects your brand’s unique voice and identity. Whether it’s blog posts, infographics, or social media posts, we have the creativity and expertise to bring your ideas to life and captivate your audience."
            }
            li1={"Facebook"}
            li2={"Instagram"}
            li3={"& many more"}
            rightImg={img2}
          />

          <Block4
            Experience={
              "Empowering Your Brand Through Strategic Social Media. With years of experience in social media management, we craft tailored strategies that amplify your brand's voice, increase engagement, and drive measurable results across all platforms."
            }
            GoodTeamwork={
              "Collaborative Editing for Exceptional Results. Our skilled team of video editors works closely together, combining technical proficiency and creativity to bring your vision to life. We collaborate to produce content that exceeds your expectations."
            }
            Support={
              "Always Here to Optimize Your Social Media Success. We’re dedicated to your brand's social media success at all times. Whether it’s strategizing, scheduling, or responding to followers, our team is available around the clock to manage your social media needs."
            }
            TrustedCompany={
              "Collaborative Strategies for Maximum Impact. Our team works closely together to ensure every post, campaign, and response is aligned with your brand’s values and objectives. We collaborate with you to create social media strategies that engage and convert."
            }
            Creative={
              "Content That Connects and Inspires. We create innovative and eye-catching content that resonates with your target audience. From visually stunning posts to engaging stories, we help your brand stand out and drive meaningful interactions."
            }
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
