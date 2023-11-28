import "./lawyerResult.css";

function LawyerResult({ name, bio, onContactClick }) {
  return (
    <div className="lawyer-result-body" data-aos="fade-down">
      <div>
        <div className="lawyer-result-heading" data-aos="fade-left">
          {name}
        </div>
        <div className="lawyer-result-bio" data-aos="fade-left">
          {bio}
        </div>
      </div>
      <button
        className="lawyer-result-button"
        data-aos="fade-right"
        onClick={onContactClick}
      >
        CONTACT NOW
      </button>
    </div>
  );
}

export default LawyerResult;
