import LoginBanner from "../ui/LoginBanner/LoginBanner";
import LoginForm from "../ui/LoginForm/LoginForm";
import styles from "./LoginPage.module.css";
import loginImage from "../assets/images/login.svg";

export default function LoginPage() {
  return (
    <>
      <LoginBanner
        background="linear-gradient(rgba(0, 150, 64, 0.2), #fff)"
        title="Sign In"
        discrption="Unlock exclusive access to your account"
      />
      <section className="container px-0">
        <section className="row">
          <section className={`col-md-8 ${styles.loginPage}`}>
            <LoginBanner
              title="Welcome Back"
              discrption="Please enter your mobile number or email to complete the login process."
            />
            <LoginForm />
          </section>
          <section className="col-4  d-none d-md-block">
            <img className="img-fluid" src={loginImage} />
          </section>
        </section>
      </section>
    </>
  );
}
