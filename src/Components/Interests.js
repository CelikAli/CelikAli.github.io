function Interests(props) {
  return (
    <div>
      {/* Interests*/}
      <section className="resume-section" id="interests">
        <div className="resume-section-content">
          <h2 className="mb-5">Interests</h2>
          {props.interests.map((interest, index) => {
            if (index) {
              return <p className="mb-0">{interest}</p>;
            } else {
              return <p>{interest}</p>;
            }
          })}
        </div>
      </section>
      <hr className="m-0" />
    </div>
  );
}

export default Interests;
