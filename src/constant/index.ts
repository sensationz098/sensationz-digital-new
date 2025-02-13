// Hero component
import {
  client1,
  client2,
  client3,
  client4,
  client5,
  client6,
  client7,
  client8,
  client9,
  client10,
  client11,
  client12,
  client13,
} from "./../assets";
import { brand1, brand2, brand3, brand4, brand5 } from "./../assets";
export const HeroTagLine =
  "At Sensationz Digital, we specialize in boosting your website traffic and empowering your brand to grow exponentially";

// about component
export const AboutCompHeading =
  "Igniting Your Digital Journey with Innovation.";
export const firstPara =
  "Welcome to Sensationz Digital! We’re your partners in digital success, blending creativity and tech expertise to tailor strategies for your brand. With transparency and collaboration, we offer services from web design to branding, all focused on elevating your online presence. Join us in creating digital excellence that resonates with your audience and drives tangible results.";

export const secondPara =
  "As the top supplier of digital marketing services, “Sensationz Digital” has helped over a thousand customers achieve steady growth for their businesses.";

type data = {
  id: number;
  image: string;
  name: string;
  insta: string;
};

type brandPromoTypes = {
  id: number;
  name: string;
  image: string;
};

export const brandPromo: brandPromoTypes[] = [
  {
    id: 1,
    name: "Virendra Sharma",
    image: brand1,
  },
  {
    id: 2,
    name: "Shivani",
    image: brand2,
  },
  {
    id: 3,
    name: "Bina Kedia",
    image: brand3,
  },
  {
    id: 4,
    name: "Car Vegas",
    image: brand4,
  },
];

export const brandPromo2: brandPromoTypes[] = [
  {
    id: 1,
    name: "P5",
    image: brand5,
  },
];
export const data: data[] = [
  {
    id: 1,
    image: client1,
    name: "Shveta Sharma",
    insta: "ahaana_holistichealing",
  },
  {
    id: 2,
    image: client2,
    name: "Naira Sri",
    insta: "cutiekuhoo",
  },
  {
    id: 3,
    image: client3,
    name: "Virender Sharma",
    insta: "virendersharmababa_ji",
  },

  {
    id: 4,
    image: client4,
    name: "Glance Fire & Safety",
    insta: "glanceenterprise",
  },
];

export const data2: data[] = [
  {
    id: 1,
    image: client5,
    name: "Suchitha joshi",
    insta: "p5yoga_wellness",
  },
  {
    id: 2,
    image: client6,
    name: "Aiman Mehtab",
    insta: "thetribeofhealing",
  },
  {
    id: 3,
    image: client7,
    name: "Durvam's Diary",
    insta: "durvasumedha",
  },

  {
    id: 4,
    image: client8,
    name: "Dr. Mukesh Kumar",
    insta: "urocaredrmukeshkumarvijay",
  },

  {
    id: 5,
    image: client9,
    name: "Adit Sinha",
    insta: "aditsinhashow",
  },
  {
    id: 6,
    image: client10,
    name: "Avi Sinha",
    insta: "avisinhashow",
  },
  {
    id: 7,
    image: client11,
    name: "Yuva 4 Life",
    insta: "yuva4life.in",
  },
  {
    id: 8,
    image: client12,
    name: "Shveta sharma",
    insta: "shvetazworld",
  },
  {
    id: 9,
    image: client13,
    name: "NUB'S",
    insta: "nubs_nitika_",
  },
];
