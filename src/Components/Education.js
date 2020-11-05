function Education(props) {
  return (
    <div>
      <section className="resume-section" id="education">
        <div className="resume-section-content">
          <h2 className="mb-5">Education</h2>
          {props.education.map((school) => {
            return (
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">{school.schoolName}</h3>
                  <div className="subheading mb-3">{school.degree}</div>
                  <div>{school.major}</div>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    {school.fromDate} - {school.toDate}
                  </span>
                </div>
              </div>
            );
          })}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default Education;
