import { Link } from "react-router";
import AddButton from "../AddButton/AddButton";
import styles from "./LoginForm.module.css";

export default function LoginForm() {
  return (
    <div className="container">
      <form className="my-4">
        <div className="form-floating mb-3">
          <input
            type="email"
            className="form-control"
            id="floatingInput"
            placeholder="Email Address"
          />
          <label htmlFor="floatingInput">Email address</label>
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control"
            id="floatingPassword"
            placeholder="Password"
          />
          <label htmlFor="floatingPassword">Password</label>
        </div>
        <p className="text-danger fw-normal mt-4">
          NOTE: The employment agreement must be through the approved official
          offices and agencies
        </p>
        <p className=" fw-normal mt-4">
          By continuing, you agree to the <Link>terms of use</Link> and
          <Link> privacy policy</Link> of the application
        </p>
        <Link type="button" className={styles.forgetPassword}>
          forget your password
        </Link>
        <div className="mt-4">
          <AddButton name={"login"}>Login</AddButton>
        </div>
      </form>
    </div>
  );
}
