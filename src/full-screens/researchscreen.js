import Header from '../constant-screens/header';
import Navbar from '../constant-screens/navbar';
import Footer from '../constant-screens/footer';
import ResearchScreenBody from '../half-screens/researchScreenBody';

function ResearchScreen() {
 return(
  <div>
   <Header />
   <Navbar />
   <ResearchScreenBody />
   <Footer />
  </div>
 );
}

export default ResearchScreen;