import Footer from "../constant-screens/footer";
import Header from "../constant-screens/header";
import Navbar from "../constant-screens/navbar";
import ProfileScreenBody from "../half-screens/profileScreenBody";

function ProfileScreen() {
 return(
  <div>
   <Header />
   <Navbar />
   <ProfileScreenBody />
   <Footer />
  </div>
 );
}

export default ProfileScreen;