function About(props) {
  return (
    <div>
      <section className="resume-section" id="about">
        <div className="resume-section-content">
          <h1 className="mb-0">
            {props.landing.firstName}
            <span className="text-primary">{props.landing.lastName}</span>
          </h1>
          <div className="subheading mb-5">
            {props.landing.address} · {props.landing.phoneNumber} ·
            <a href="mailto:name@email.com">{props.landing.email}</a>
          </div>
          <p className="lead mb-5">{props.landing.bio}</p>
          <div className="social-icons">
            <a className="social-icon" href={props.landing.linkedin}>
              <i className="fab fa-linkedin-in" />
            </a>
            <a className="social-icon" href={props.landing.github}>
              <i className="fab fa-github" />
            </a>
          </div>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default About;
