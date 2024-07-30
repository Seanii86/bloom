import React, { useEffect } from "react";
import "./LandingPage.scss";

const LandingPage = ({ onFadeOut }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onFadeOut();
    }, 2000); // Change the delay as needed

    return () => clearTimeout(timer);
  }, [onFadeOut]);

  return (
    <div className="landing-page">
      <h1>I'M SORRY I LOVE YOU</h1>
    </div>
  );
};

export default LandingPage;
