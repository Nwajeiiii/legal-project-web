import Footer from "../constant-screens/footer";
import Header from "../constant-screens/header";
import Navbar from "../constant-screens/navbar";
import ForumScreenBody from "../half-screens/forumScreenBody";

function ForumScreen(){
 return(
  <div>
   <Header />
   <Navbar />
   <ForumScreenBody />
   <Footer />
  </div>
 );
}

export default ForumScreen;