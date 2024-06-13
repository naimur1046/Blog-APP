import React from "react";

import Hero from "./Container/Hero";
import CTA from "./Container/CTA";
import Articles from "./Container/Articles";

const HomePage = () => {
  return (
    <div>
      <Hero />
      <Articles />
      <CTA />
    </div>
  );
};

export default HomePage;
