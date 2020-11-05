import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import profileData from "./profileData.json";

function App() {
  const [pageState] = useState({
    landing: profileData.landing,
    experience: profileData.experience,
    education: profileData.education,
    skills: profileData.skills,
  });

  return (
    <div>
      <Navigation landing={pageState.landing} />
      <div className="container-fluid p-0">
        <About landing={pageState.landing} />
        <Experience experience={pageState.experience} />
        <Education education={pageState.education} />
        <Skills skills={pageState.skills} />
      </div>
    </div>
  );
}

export default App;
