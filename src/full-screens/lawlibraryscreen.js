import Footer from "../constant-screens/footer";
import Header from "../constant-screens/header";
import Navbar from "../constant-screens/navbar";
import LawLibraryScreenBody from "../half-screens/lawLibraryScreenBody";

function LawLibrary(){
 return(
  <div>
   <Header />
   <Navbar />
   <LawLibraryScreenBody />
   <Footer />
  </div>
 );
}

export default LawLibrary;