import { Link } from "react-router";
import logo from "../../assets/images/logo.svg";

export default function Logo({ className }) {
  return (
    <Link className={className} to="home">
      <img src={logo} />
    </Link>
  );
}
