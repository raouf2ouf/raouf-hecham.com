import { memo } from "react";

import "./Experience.scss";
import { Chip, Link } from "@nextui-org/react";
import { MdLocationOn } from "react-icons/md";
import { IExperience } from "./Experience.interface";
type Props = {
  data: IExperience;
};

const Experience: React.FC<Props> = ({ data }) => {
  return (
    <div className="experience-container">
      <div className="time">
        {data.start} -<br />
        {data.end}
      </div>
      <div className="experience-content">
        <div className="title">
          <span>{data.title} - </span>
          <Link showAnchorIcon href={data.orgLink}>
            {data.org}
          </Link>
        </div>
        <div className="location">
          <MdLocationOn /> {data.location}
        </div>
        {/* <div className="subtitle">
          Facilitating decisions via Data visualisation and Predictive Models.
        </div> */}
        <div className="points">
          <ul>
            {data.points.map((p, i) => {
              return <li key={i}>{p}</li>;
            })}
          </ul>
        </div>
        <div className="technologies">
          {data.technologies.map((t, i) => {
            return (
              <Chip className="tech" color="warning" key={i}>
                {t}
              </Chip>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default memo(Experience);
