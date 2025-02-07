import "./Block4Style.css";

import { MdOutlineElderlyWoman } from "react-icons/md";
import { VscWorkspaceTrusted } from "react-icons/vsc";
import { FaPeopleGroup } from "react-icons/fa6";
import { IoAccessibilitySharp } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { IconType } from "react-icons";
import { ReactElement } from "react";

type Element1PropsTypes = {
  icon: ReactElement<IconType>;
  heading: string;
  data: string;
};
type BlockTypes = {
  Experience: string;
  TrustedCompany: string;
  GoodTeamwork: string;
  Creative: string;
  Support: string;
};

function Element1({ icon, heading, data }: Element1PropsTypes) {
  return (
    <div className="element element1">
      <span className="icon">{icon}</span>
      <h4 className="heading">{heading}</h4>
      <p className="data">{data}</p>
    </div>
  );
}
function Element2({ icon, heading, data }: Element1PropsTypes) {
  return (
    <div className="element element2">
      <span className="icon">{icon}</span>
      <h4 className="heading">{heading}</h4>
      <p className="data">{data}</p>
    </div>
  );
}

export default function Block4({
  Experience,
  TrustedCompany,
  GoodTeamwork,
  Creative,
  Support,
}: BlockTypes) {
  return (
    <>
      <div className="container main-box stiff-block">
        <div className="main-box-title">
          <h4 className="choose">Why Choose Us</h4>
          <h1>why are we your solution?</h1>
        </div>

        <div className="main-box-inside1">
          <Element1
            icon={<MdOutlineElderlyWoman />}
            heading={"Experience"}
            data={Experience}
          />
          <Element1
            icon={<VscWorkspaceTrusted />}
            heading={"Trusted Company"}
            data={TrustedCompany}
          />
          <Element1
            icon={<FaPeopleGroup />}
            heading={"Good Teamwork"}
            data={GoodTeamwork}
          />
        </div>
        <div className="main-box-inside2">
          <Element2
            icon={<IoAccessibilitySharp />}
            heading={"Creative"}
            data={Creative}
          />
          <Element2
            icon={<BiSupport />}
            heading={"Support 24/7"}
            data={Support}
          />
        </div>
      </div>
    </>
  );
}
