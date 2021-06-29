import Sidebar from "../Sidebar";
import Footer from "../Footer";
import TabNav from "../TabNav";


const Layout = ({ children }) => {
  return (
    <div className="bg-color">
      <TabNav/>
      <Sidebar/>

      {/* page content */}
      {children}

      <Footer />
    </div>
  );
};

export default Layout;
