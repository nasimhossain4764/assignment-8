import Navbar from "../../Components/Navbar/Navbar";
import Footer from "../../Components/Footer/Footer";
import { Outlet } from "react-router";

const Root = () => {
  return (
    <div>
      <Navbar></Navbar>
      <div className="container min-h-[calc(100vh-285px)]">
        <Outlet />
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Root;
