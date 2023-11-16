import Header from "../constant-screens/header";
import Navbar from "../constant-screens/navbar";
import Footer from "../constant-screens/footer";
import LawLibraryInfoScreenBody from "../half-screens/lawLibraryInfoScreenBody";

import { useParams } from "react-router-dom";

function LawLibraryInfo() {
  const { topicId } = useParams();
  let content = {}; // Initialize with default content
  switch (topicId) {
    case "real-estate-law":
      content = {
        title: "Real Estate Law",
        definition:
          "Real Estate Law encompasses legal issues related to property, including buying, selling, leasing, and managing real estate. It covers transactions, property disputes, zoning, and land use regulations.",
        reasonForAttorney:
          "Yes, engaging an attorney is crucial in navigating the complexities of real estate transactions. Legal Power ensures a smooth process, protecting your interests and addressing potential pitfalls.",
        signs: [
          "Disputes with property boundaries or neighbors.",
          "Complex paperwork and contracts.",
          "Issues with the title or ownership.",
          "Land use and zoning challenges.",
        ],
        role: "Legal Power provides expertise in negotiations, drafting contracts, due diligence, and resolving disputes. Our attorneys safeguard your investment, ensuring a secure and successful real estate transaction.",
      };
      break;
    case "domestic-violence":
      content = {
        title: "Domestic Violence",
        definition:
          "Domestic Violence Law addresses acts of abuse within familial or intimate relationships. It includes physical, emotional, or financial abuse and seeks to protect victims through legal interventions.",
        reasonForAttorney:
          "Yes, seeking legal assistance is vital for protection orders, custody matters, and navigating the legal process. Legal Power empowers victims by providing support and effective legal representation.",
        signs: [
          "Physical or emotional abuse.",
          "Threats or intimidation.",
          "Fear for your safety or the safety of your children.",
        ],
        role: "Legal Power stands as an advocate, securing protective orders, guiding through legal proceedings, and ensuring a supportive environment for victims.",
      };
      break;
    case "juvenile-crime":
      content = {
        title: "Juvenile Crime",
        definition:
          "Juvenile Crimes Law addresses offenses committed by individuals under the age of 18. It focuses on rehabilitation rather than punishment, emphasizing the unique needs of young offenders.",
        reasonForAttorney:
          "Yes, having an attorney is crucial to protect the juvenile's rights and navigate the juvenile justice system. Legal Power works to secure the best possible outcome for young individuals facing legal challenges.",
        signs: [
          "Arrest or detention of a juvenile.",
          "Involvement in criminal activities.",
          "Legal proceedings initiated against a minor.",
        ],
        role: "Legal Power advocates for juvenile rights, providing legal guidance, working towards rehabilitation, and securing fair and just outcomes within the juvenile justice system.",
      };
      break;
    case "insurance-law":
      content = {
        title: "Insurance Law",
        definition:
          "Insurance Law deals with legal issues related to insurance policies, claims, and disputes. It covers a broad spectrum, including health, auto, property, and liability insurance.",
        reasonForAttorney:
          "Yes, having an attorney is essential when dealing with insurance claims, disputes, or policy issues. Legal Power ensures that your rights are protected and maximizes your entitlements under your insurance coverage.",
        signs: [
          "Denied insurance claims.",
          "Disputes with insurance companies.",
          "Ambiguities in insurance policies.",
        ],
        role: "Legal Power assists clients in understanding their insurance policies, pursuing valid claims, and resolving disputes with insurance companies to achieve fair and just outcomes.",
      };
      break;
    case "health-care":
      content = {
        title: "Health Care",
        definition:
          "Health Care Law encompasses legal issues related to healthcare, including patient rights, medical ethics, privacy, and the regulation of healthcare providers and facilities.",
        reasonForAttorney:
          "Yes, having an attorney is essential to navigate complex healthcare systems, protect patient rights, and address legal issues. Legal Power advocates for clients in the healthcare sector, ensuring fair and ethical treatment.",
        signs: [
          "Medical malpractice.",
          "Patient rights violations.",
          "Issues with insurance coverage.",
          "Land use and zoning challenges.",
        ],
        role: "Legal Power provides legal representation in cases of medical malpractice, protects patient rights, and addresses legal challenges in the healthcare system.",
      };
      break;
    case "car-accidents":
      content = {
        title: "Car Accidents",
        definition:
          "Car Accident Law deals with legal issues arising from motor vehicle accidents, including personal injury claims, property damage, and insurance disputes.",
        reasonForAttorney:
          "Yes, engaging an attorney is crucial for navigating the complexities of insurance claims, liability, and compensation. Legal Power ensures that your rights are protected and you receive fair compensation.",
        signs: [
          "Severe injuries from a car accident.",
          "Disputes with insurance companies.",
          "Uncertain liability in the accident.",
        ],
        role: "Legal Power assists clients in recovering damages, negotiating with insurance companies, and pursuing legal action when necessary. Our attorneys work to secure the best possible outcome for clients involved in car accidents",
      };
      break;
    default:
      content = {
        title: "Real Estate Law",
        definition:
          "Real Estate Law encompasses legal issues related to property, including buying, selling, leasing, and managing real estate. It covers transactions, property disputes, zoning, and land use regulations.",
        reasonForAttorney:
          "Yes, engaging an attorney is crucial in navigating the complexities of real estate transactions. Legal Power ensures a smooth process, protecting your interests and addressing potential pitfalls.",
        signs: [
          "Disputes with property boundaries or neighbors.",
          "Complex paperwork and contracts.",
          "Issues with the title or ownership.",
          "Land use and zoning challenges.",
        ],
        role: "Legal Power provides expertise in negotiations, drafting contracts, due diligence, and resolving disputes. Our attorneys safeguard your investment, ensuring a secure and successful real estate transaction.",
      };
  }

  return (
    <div>
      <Header />
      <Navbar />
      <LawLibraryInfoScreenBody {...content} />
      <Footer />
    </div>
  );
}

export default LawLibraryInfo;
