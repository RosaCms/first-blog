import { Outlet } from "react-router-dom";
import Headre from "./Headre";
import { Footer } from "./Footer";
import Search from "../components/Search";

export default function MainLayout() {
  return (
    <>
      <Headre />
      <div className="container-fluid">
        <main className="tm-main">
          <Search />
          <Outlet />
          <Footer />
        </main>
      </div>
    </>
  );
}
