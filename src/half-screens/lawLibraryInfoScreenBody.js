import "./lawLibraryInfoScreenBody.css";

import lawInfoDatabaseImage from "../images/png/law-information-database.png";

function LawLibraryInfoScreenBody({
  title,
  definition,
  reasonForAttorney,
  signs,
  role,
}) {
  return (
    <div>
      <img
        src={lawInfoDatabaseImage}
        alt="Info Database"
        className="law-info-database-image"
      />
      <div className="law-info-body">
        <h1 className="law-info-body-title">{title}</h1>
        <h3 className="law-info-body-heading">{`What is ${title}`}?</h3>
        <p className="law-info-body-paragraph">{definition}</p>
        <h3 className="law-info-body-heading">
          Do I need an Attorney for {title}?
        </h3>
        <p className="law-info-body-paragraph">{reasonForAttorney}</p>
        <h3 className="law-info-body-heading">Signs that you need a lawyer</h3>
        <ul className="law-info-body-custom-menu">
          {signs.map((sign, index) => (
            <li className="law-info-body-custom-menu-list" key={index}>
              {sign}
            </li>
          ))}
        </ul>
        <h3 className="law-info-body-heading">
          What is the role of our attornies in {title}
        </h3>
        <p className="law-info-body-paragraph">{role}</p>
      </div>
    </div>
  );
}

export default LawLibraryInfoScreenBody;
