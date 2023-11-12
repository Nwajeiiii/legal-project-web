import Footer from "../constant-screens/footer.js";
import Header from "../constant-screens/header.js";
import Navbar from "../constant-screens/navbar.js";
import HomeScreenBody from "../half-screens/homeScreenBody.js";

function HomeScreen () {
 return (
  <div>
   <Header />
   <Navbar />
   <HomeScreenBody />
   <Footer />
  </div>
 );
}

export default HomeScreen;