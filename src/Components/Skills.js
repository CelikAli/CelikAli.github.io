function Skills(props) {
  const defaultColor = "#535b62";

  return (
    <div>
      <section className="resume-section" id="skills">
        <div className="resume-section-content">
          <h2 className="mb-5">Skills</h2>
          <div className="subheading mb-3">
            Programming Languages &amp; Tools
          </div>

          <ul className="list-inline dev-icons">
            {props.skills.technologies.map((technology) => {
              return (
                <li className="list-inline-item">
                  <svg
                    height="72"
                    width="72"
                    viewBox="0 0 24 24"
                    fill={defaultColor}
                    onMouseOver={(event) =>
                      changeColor(event, technology.onHoverColor)
                    }
                    onMouseLeave={(event) => changeColor(event, defaultColor)}
                  >
                    <title>{technology.title}</title>
                    <path
                      d={technology.svgPath}
                      style={{ pointerEvents: "none" }}
                    />
                  </svg>
                </li>
              );
            })}
          </ul>
          <div className="subheading mb-3">Methodologies</div>
          <ul className="fa-ul mb-0">
            {props.skills.methodologies.map((methodology) => {
              return (
                <li>
                  <span className="fa-li">
                    <i className="fas fa-check" />
                  </span>
                  {methodology}
                </li>
              );
            })}
          </ul>
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

function changeColor(event, color) {
  event.target.style.fill = color;
}

export default Skills;
