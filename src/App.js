import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Interests from "./Components/Interests";
import profileData from "./profileData.json";

function App() {
  const [pageState] = useState({
    landing: profileData.landing,
    experience: profileData.experience,
    education: profileData.education,
    skills: profileData.skills,
    interests: profileData.interests,
  });

  return (
    <div>
      <Navigation landing={pageState.landing} />
      <div className="container-fluid p-0">
        <About name="about" landing={pageState.landing} />
        <Experience name="experience" experience={pageState.experience} />
        <Education name="education" education={pageState.education} />
        <Skills name="skills" skills={pageState.skills} />
        <Interests name="interests" interests={pageState.interests} />
      </div>
    </div>
  );
}

export default App;
