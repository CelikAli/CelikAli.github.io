import image from "../assets/img/profile.jpeg";
import { Link, animateScroll as scroll } from "react-scroll";

function Navigation(props) {
  const navigationLinks = [
    "about",
    "experience",
    "education",
    "skills",
    "interests",
  ];

  const linkStyle = { cursor: "pointer" };

  return (
    <nav
      className="navbar navbar-expand-lg navbar-dark bg-primary fixed-top"
      id="sideNav"
    >
      <Link className="navbar-brand" style={linkStyle} onClick={scrollToTop}>
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
          {navigationLinks.map((link) => {
            return (
              <li className="nav-item">
                <Link
                  className="nav-link"
                  style={linkStyle}
                  activeClass="active"
                  to={link}
                  spy={true}
                  hashSpy={true}
                  smooth={true}
                  duration={500}
                  delay={100}
                >
                  {link}
                </Link>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
}

function scrollToTop() {
  scroll.scrollToTop();
}

export default Navigation;
