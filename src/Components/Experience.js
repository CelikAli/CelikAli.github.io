function Experience(props) {
  return (
    <div>
      <section className="resume-section" id="experience">
        <div className="resume-section-content">
          <h2 className="mb-5">Experience</h2>
          {props.experience.map((experienceData) => {
            return (
              <div className="d-flex flex-column flex-md-row justify-content-between mb-5">
                <div className="flex-grow-1">
                  <h3 className="mb-0">{experienceData.position}</h3>
                  <div className="subheading mb-3">
                    {experienceData.organization}
                  </div>
                  <p>{experienceData.aboutWork}</p>
                </div>
                <div className="flex-shrink-0">
                  <span className="text-primary">
                    {experienceData.fromDate} - {experienceData.toDate}
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

export default Experience;
