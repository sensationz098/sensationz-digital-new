// Hero component
import {
  sketch,
  jewellery,
  rubik,
  pooja,
  tarot,
  tarotCard,
  astrology,
  artClasses,
  makeup,
  healing,
  creating,
  syna,
  shimmer,
  ahana,
  sen,
  dr,
  med,
  shal,
  GraphicBlock1,
  GraphicBlock2,
  GraphicBlock3,
  GraphicBlock4,
  performing_arts,
  production,
  synaSite,
  bollywood,
  babaji,
  media,
  seoblock,
  seoblock1,
  seoblock2,
  seoblock3,
} from "./../assets";
import { brand1, brand3, brand4 } from "./../assets";
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
  username: string;
  link: string;
};

export type brandPromoTypes = {
  id: number;
  name: string;
  image: string;
};

export const seoImage = [
  {
    imageLink: seoblock,
  },
  {
    imageLink: seoblock1,
  },
  {
    imageLink: seoblock2,
  },
  {
    imageLink: seoblock3,
  },
];
export const graphicImage = [
  {
    imageLink: GraphicBlock1,
  },
  {
    imageLink: GraphicBlock2,
  },
  {
    imageLink: GraphicBlock3,
  },
  {
    imageLink: GraphicBlock4,
  },
];

export const brandPromo: brandPromoTypes[] = [
  {
    id: 1,
    name: "Virendra Sharma",
    image: brand1,
  },
  {
    id: 2,
    name: "Shivani",
    image: pooja,
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

  {
    id: 5,
    name: "Sketching",
    image: sketch,
  },
  {
    id: 6,
    name: "Jewellery",
    image: jewellery,
  },
  {
    id: 7,
    name: "Rubik Classes",
    image: rubik,
  },

  {
    id: 8,
    name: "Tarot Reader",
    image: tarot,
  },

  {
    id: 9,
    name: "Tarot Card Reader",
    image: tarotCard,
  },
  {
    id: 10,
    name: "Astrology",
    image: astrology,
  },

  {
    id: 11,
    name: "Art Classes",
    image: artClasses,
  },

  {
    id: 12,
    name: "Makeup Workshop",
    image: makeup,
  },
  {
    id: 13,
    name: "Healing Center",
    image: healing,
  },
];

export const data: data[] = [
  {
    id: 1,
    image: ahana,
    name: "Shveta Sharma",
    username: "ahaana_holistichealing",
    link: "https://www.instagram.com/ahaana_holistichealing",
  },
  {
    id: 2,
    image: med,
    name: "Sensationz Media & Arts Pvt. Ltd.",
    username: "SensationzMediaArtsPvtLtd",
    link: "https://www.youtube.com/@SensationzMediaArtsPvtLtd",
  },
  {
    id: 3,
    image: dr,
    name: "Urocare - Dr. Mukesh Kumar Vijay",
    username: "UrocareDrMukeshKumarVijay",
    link: "https://www.youtube.com/@UrocareDrMukeshKumarVijay",
  },
  {
    id: 4,
    image: sen,
    name: "Sensationz Performing Arts",
    username: "sensationz_performing_arts",
    link: "https://www.instagram.com/sensationz_performing_arts",
  },
  {
    id: 5,
    image: shal,
    name: "Shalinie Raghav",
    username: "shalinieraghav",
    link: "https://www.instagram.com/shalinieraghav",
  },
  {
    id: 6,
    image: shimmer,
    name: "Shimmer_holds",
    username: "shimmer_holds",
    link: "https://www.instagram.com/shimmer_holds/",
  },
  {
    id: 7,
    image: creating,
    name: "Creating Vibes",
    username: "creating_vibes_ngo",
    link: "https://www.instagram.com/creating_vibes_ngo",
  },

  {
    id: 8,
    image: syna,
    name: "Syna Anand",
    username: "synaa_anand",
    link: "https://www.instagram.com/synaa_anand",
  },
];

type WebComp = {
  id: number;
  name: string;
  link: string;
  image: string;
};
export const WebData: WebComp[] = [
  {
    id: 1,
    name: "Sensationz Performing and Arts",
    link: "https://sensationzperformingarts.com",
    image: performing_arts,
  },
  {
    id: 2,
    name: "Sensationz Production",
    link: "https://sensationzproductions.com/",
    image: production,
  },
  {
    id: 3,
    name: "Syna Anand",
    link: "https://synaanand.com/",
    image: synaSite,
  },
  {
    id: 4,
    name: "The Bollywood Faces",
    link: "https://thebollywoodfaces.com/",
    image: bollywood,
  },
  {
    id: 5,
    name: "Sensationz Media and Arts",
    link: "https://sensationzmediaandarts.com/",
    image: media,
  },
  {
    id: 6,
    name: "Virender Sharma Babaji",
    link: "https://virendersharmababaji.com/",
    image: babaji,
  },
];
