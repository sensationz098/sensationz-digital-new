// Hero component
import {
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
    image: client2,
    name: "Naira Sri",
    username: "cutiekuhoo",
    link: "https://www.instagram.com/cutiekuhoo",
  },
  {
    id: 3,
    image: client3,
    name: "Virender Sharma",
    username: "virendersharmababa_ji",
    link: "https://www.instagram.com/virendersharmababa_ji",
  },

  {
    id: 4,
    image: client4,
    name: "Glance Fire & Safety",
    username: "glanceenterprise",
    link: "https://www.instagram.com/glanceenterprise",
  },
  {
    id: 5,
    image: client5,
    name: "Suchitha joshi",
    username: "p5yoga_wellness",
    link: "https://www.instagram.com/p5yoga_wellness",
  },
  {
    id: 6,
    image: client6,
    name: "Aiman Mehtab",
    username: "thetribeofhealing",
    link: "https://www.instagram.com/thetribeofhealing",
  },
  {
    id: 7,
    image: client7,
    name: "Durvam's Diary",
    username: "durvasumedha",
    link: "https://www.instagram.com/durvasumedha",
  },

  {
    id: 8,
    image: client8,
    name: "Dr. Mukesh Kumar",
    username: "urocaredrmukeshkumarvijay",
    link: "https://www.instagram.com/urocaredrmukeshkumarvijay",
  },

  {
    id: 9,
    image: client9,
    name: "Adit Sinha",
    username: "aditsinhashow",
    link: "https://www.instagram.com/aditsinhashow",
  },
  {
    id: 10,
    image: client10,
    name: "Avi Sinha",
    username: "avisinhashow",
    link: "https://www.instagram.com/avisinhashow",
  },
  {
    id: 11,
    image: client11,
    name: "Yuva 4 Life",
    username: "yuva4life.in",
    link: "https://www.instagram.com/yuva4life.in",
  },
  {
    id: 12,
    image: client12,
    name: "Shveta sharma",
    username: "shvetazworld",
    link: "https://www.instagram.com/shvetazworld",
  },
  {
    id: 13,
    image: client13,
    name: "NUB'S",
    username: "nubs_nitika_",
    link: "https://www.instagram.com/nubs_nitika_",
  },

  {
    id: 14,
    image: med,
    name: "Sensationz Media & Arts Pvt. Ltd.",
    username: "SensationzMediaArtsPvtLtd",
    link: "https://www.youtube.com/@SensationzMediaArtsPvtLtd",
  },
  {
    id: 15,
    image: dr,
    name: "Urocare - Dr. Mukesh Kumar Vijay",
    username: "UrocareDrMukeshKumarVijay",
    link: "https://www.youtube.com/@UrocareDrMukeshKumarVijay",
  },
  {
    id: 16,
    image: sen,
    name: "Sensationz Performing Arts",
    username: "sensationz_performing_arts",
    link: "https://www.instagram.com/sensationz_performing_arts",
  },
  {
    id: 17,
    image: shal,
    name: "Shalinie Raghav",
    username: "shalinieraghav",
    link: "https://www.instagram.com/shalinieraghav",
  },
  {
    id: 18,
    image: shimmer,
    name: "Shimmer_holds",
    username: "shimmer_holds",
    link: "https://www.instagram.com/shimmer_holds/",
  },
  {
    id: 19,
    image: creating,
    name: "Creating Vibes",
    username: "creating_vibes_ngo",
    link: "https://www.instagram.com/creating_vibes_ngo",
  },

  {
    id: 20,
    image: syna,
    name: "Syna Anand",
    username: "synaa_anand",
    link: "https://www.instagram.com/synaa_anand",
  },
];
