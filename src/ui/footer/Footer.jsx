import { Link } from "react-router";
import Logo from "../Logo/Logo";
import styles from "./footer.module.css";

import { BsTwitterX } from "react-icons/bs";
import {
  FaApple,
  FaFacebookF,
  FaGooglePlay,
  FaInstagram,
  FaLinkedinIn,
} from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
// import { BsTwitterX } from "react-icons/bs";
export default function Footer() {
  return (
    <footer className="d-flex">
      <section className="container ">
        <section className="row g-4 ">
          <section className=" col-lg-4 d-flex flex-column flex-md-row gap-3 ">
            <Logo />
            <p className={styles.textStyles}>
              Jobsin saudi is the heart of the design community and the best
              resource to discover and connect with designers and jobs
              worldwide.
            </p>
          </section>
          <section
            className={` col-sm-6 col-lg-3 d-flex flex-column gap-4 ${styles.links}`}
          >
            <h1>Company</h1>
            <ul>
              <li>
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  About Us
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  FAQs
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Contact Us
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Terms and Conditions
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Privacy & Policy
                </Link>
              </li>
            </ul>
          </section>
          <section
            className={` col-sm-6 col-lg-3 d-flex flex-column gap-4 ${styles.links}`}
          >
            <h1>popular categories</h1>
            <ul>
              <li>
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Technical and Design
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Administrative
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Engineering
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Medical and Nursing
                </Link>
              </li>
              <li>
                {" "}
                <HiOutlineExternalLink />
                <Link className={styles.textStyles} to="">
                  Education
                </Link>
              </li>
            </ul>
          </section>
          <section className={`col-lg-2 d-flex flex-column gap-4 `}>
            <h1>Download App</h1>
            <ul className={styles.downloadList}>
              <li className={styles.download}>
                <button>
                  <FaApple />
                  <span> App Store</span>
                </button>
              </li>
              <li className={styles.download}>
                <button>
                  <FaGooglePlay />
                  <span> Google Play</span>
                </button>
              </li>
            </ul>
          </section>
        </section>
        <section className={`row mt-4  ${styles.contact} `}>
          <p className="col-md text-center text-md-start">
            Copyright © 2024. All Rights Reserved to
            <Link to="home"> Jobs in saudi</Link>
          </p>
          <section className="col-md">
            <ul className="d-flex justify-content-center justify-content-md-end flex-row gap-4 ">
              <li>
                <Link>
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link>
                  <FaInstagram />
                </Link>
              </li>
              <li>
                <Link>
                  <FaLinkedinIn />
                </Link>
              </li>
              <li>
                <Link>
                  <BsTwitterX />
                </Link>
              </li>
            </ul>
          </section>
        </section>
      </section>
    </footer>
  );
}
