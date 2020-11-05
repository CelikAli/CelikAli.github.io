import React, { useState } from "react";
import Navigation from "./Components/Navigation";
import About from "./Components/About";
import profileData from "./profileData.json";

function App() {
  const [pageState] = useState({
    landing: profileData.landing,
  });

  return (
    <div>
      <Navigation landing={pageState.landing} />
      <div className="container-fluid p-0">
        <About landing={pageState.landing} />
      </div>
    </div>
  );
}

export default App;
