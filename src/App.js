import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import Experience from "./Components/Experience";
import Education from "./Components/Education";
import profileData from "./profileData.json";

function App() {
  const [pageState] = useState({
    landing: profileData.landing,
    experience: profileData.experience,
    education: profileData.education,
  });

  return (
    <div>
      <Navigation landing={pageState.landing} />
      <div className="container-fluid p-0">
        <About landing={pageState.landing} />
        <Experience experience={pageState.experience} />
        <Education education={pageState.education} />
      </div>
    </div>
  );
}

export default App;
