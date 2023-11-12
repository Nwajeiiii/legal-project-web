import "./homeScreenBody.css";

import mainBodyImage from "../images/png/main-body-image.png";

function HomeScreenBody() {
  return (
    <div>
      <img src={mainBodyImage} alt="Main Body Image" className="main-body-image" />
    </div>
  );
}

export default HomeScreenBody;
