import { useState, useEffect } from "react";
import "./VideoEditingStyle.css";
import { videoban } from "./../../../assets";

import ServicesNav from "../../../Components/ServicesNav/ServicesNav";
import Banner from "../../../Components/ServicePageComponents/Banner/Banner";
import Block1 from "../../../Components/ServicePageComponents/Block1/Block1";
import Block2 from "../../../Components/ServicePageComponents/Block2/Block2";
import Block3 from "../../../Components/ServicePageComponents/Block3/Block3";
import Block4 from "../../../Components/ServicePageComponents/Block4/Block4";
import Contact from "../../../Components/Contact/Contact";
import Title from "../../../Components/Title/Title";

import img1 from "../../../assets/services-img/video-editing.webp";
import img2 from "../../../assets/services-img/video-editing2.webp";

import BeatLoader from "react-spinners/BeatLoader";

export default function VideoEditing() {
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
          <Banner bannerImg={videoban} />
          <Block1
            leftImg={img1}
            title={
              "Expert Video Editing Services: Elevating Your Brand with Precision and Creativity."
            }
            para1={
              "The top post-production video firms providing expert video editing services that are specific to your company. Sensationz Digital Company is here to help if you have any footage or clips that need to be edited to your preference, including adding text, overlays, effects, animations, sound effects, logos, intros, etc. We have a committed group of video editors, with each team focusing on a different section. Get customised videos edited in line with the goals and aesthetic of your brand."
            }
            para2={
              "We have edited videos for a variety of industries, including the Food, Education, Music, Real Estate, ECommerce, Manufacturing, Finance, Technology, Infrastructure, and Wedding Events. With more than ten years of multi-industry and multimedia experience, we have completed both simple and challenging video editing projects all around the world.  Additionally, we help Digital Marketing Agencies with their social media videos and advertisements. Working on video post-production projects for production companies in the US, UK, Canada, Australia, New Zealand, Europe, and Gulf countries is part of our experience."
            }
          />
          <Block2
            quote={`"Unlock Your Creative Potential: Discover Our State-of-the-Art Video Editing Tools"`}
          />
          <Block3
            block3Title={
              "Unlock Your Creative Potential: Discover Our State-of-the-Art Video Editing Tools"
            }
            block3para={
              "we empower you with cutting-edge video editing tools that unleash your creativity and elevate your brand to new heights. Our arsenal of industry-leading software ensures seamless editing, stunning effects, and professional-grade results that leave a lasting impression on your audience. From intuitive interfaces to advanced features, our tools are designed to streamline your editing process and bring your vision to life with ease. Whether you’re a seasoned filmmaker or a novice content creator, our comprehensive suite of tools has everything you need to produce polished, professional-quality videos that stand out in today’s crowded digital landscape. Join us and unlock your creative potential today!"
            }
            li1={"Innovate Strategically"}
            li2={"Keyword Analysis"}
            li3={"Empower Efficiently"}
            rightImg={img2}
          />

          <div className="container">
            <Title
              title={"Editing"}
              subtitle={"Turning Footage into Masterpieces"}
            />
            {/* <Clients /> */}
            <div className="video-container container">
              <iframe
                src="https://drive.google.com/file/d/16rnU02ODsr3Gbf9mGyH7y6BUoVUoujUX/preview"
                width="740"
                height="480"
                allow="autoplay"
              ></iframe>
            </div>
          </div>

          <Block4
            color={"#d6cbd3"}
            Experience={
              "Transforming Ideas into Stunning Visual Stories.With years of experience in video editing, we turn raw footage into captivating, high-quality videos that resonate with your audience. Our expertise ensures your message is communicated clearly and creatively."
            }
            GoodTeamwork={
              "Collaborative Editing for Exceptional Results. Our skilled team of video editors works closely together, combining technical proficiency and creativity to bring your vision to life. We collaborate to produce content that exceeds your expectations."
            }
            Support={
              "Your Video Editing Partner, Anytime You Need Us. Our team is always available to assist with edits, revisions, or new projects. We’re here to ensure your video content is always perfect, no matter the timeline."
            }
            TrustedCompany={
              "Where Quality and Consistency Meet. Our clients trust us for professional, reliable video editing services. We consistently deliver top-notch results, whether it’s for promotional videos, social media content, or corporate presentations."
            }
            Creative={
              "Unleashing the Power of Creativity in Every Frame. We blend creativity with technical expertise to craft visually compelling videos that captivate and engage. Whether it’s a sleek corporate video or a dynamic social media clip, we add that creative touch that sets your video apart."
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
