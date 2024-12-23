import { Outlet } from "react-router";
import Header from "../Navbar/Header";
import Footer from "../footer/Footer";

export default function AppLayout() {
  return (
    <section>
      <Header />
      <Outlet />
      <Footer />
    </section>
  );
}
