import { Outlet } from "react-router";
import Header from "../Navbar/Header";

export default function AppLayout() {
  return (
    <section>
      <Header />
      <Outlet />
      <footer>footer</footer>
    </section>
  );
}
