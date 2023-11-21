import "./legalDocResult.css";

import axios from "axios";

function LegalDocResult({ name, url }) {
  const handleDownload = async (e, fileUrl) => {
    e.preventDefault();

    try {
      const response = await axios({
        url: fileUrl,
        method: "GET",
        responseType: "blob", // Important
      });

      // Create a Blob from the PDF Stream
      const file = new Blob([response.data], { type: "application/pdf" });

      // Build a URL from the file
      const fileURL = URL.createObjectURL(file);

      // Define a filename
      const filename = `${name}.pdf` // Change this to your desired filename

      // Create a temporary anchor tag
      const tempLink = document.createElement("a");
      tempLink.href = fileURL;
      tempLink.setAttribute("download", filename); // Set the filename here
      document.body.appendChild(tempLink);
      tempLink.click();

      // Clean up and remove the link
      document.body.removeChild(tempLink);
      URL.revokeObjectURL(fileURL);
    } catch (error) {
      console.error("Error downloading file:", error);
    }
  };


  return (
    <div className="legal-doc-result-body" data-aos="fade-up">
      <div className="legal-doc-result-item" data-aos="fade-right">
        {name}
      </div>
      <a
        className="legal-doc-result-button"
        href={url}
        onClick={(e) => handleDownload(e, url)}
        data-aos="fade-left"
      >
        CLICK HERE TO DOWNLOAD
      </a>
    </div>
  );
}

export default LegalDocResult;
