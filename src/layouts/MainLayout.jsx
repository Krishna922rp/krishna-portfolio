import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

function MainLayout({ children }) {
  return (
    <div className="app-layout">
      <Navbar />

      <main className="main-content">{children}</main>

      <Footer />
    </div>
  );
}

export default MainLayout;