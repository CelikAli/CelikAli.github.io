import image from "../assets/img/profile.jpeg";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation(props) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand" onClick={scrollToTop}>
        <span className="d-block d-lg-none">
          {props.landing.firstName} {props.landing.lastName}
        </span>
        <span className="d-none d-lg-block">
          <img
            className="img-fluid img-profile rounded-circle mx-auto mb-2"
            src={image}
            alt=""
          />
        </span>
      </Link>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="about"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              delay={100}
            >
              About
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="experience"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              delay={100}
            >
              Experience
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="education"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              delay={100}
            >
              Education
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="skills"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              delay={100}
            >
              Skills
            </Link>
          </li>
          <li className="nav-item">
            <Link
              className="nav-link"
              activeClass="active"
              to="interests"
              spy={true}
              hashSpy={true}
              smooth={true}
              duration={500}
              delay={100}
            >
              Interests
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function scrollToTop() {
  scroll.scrollToTop();
}

export default Navigation;
