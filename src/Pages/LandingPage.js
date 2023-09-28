import React from "react";
import Header2 from "../Components/Header2/Header2";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Founder from "../Components/Founder/Founder";
import Blogs from "../Components/Blogs/Blogs";
import Testimonial from "../Components/Testimonials/Testimonial";

export default function LandingPage() {
  return (
    <div>
      <Header2 />
      <br />
      <About />
      <Services />
      <Founder />
      <br />
      <br />
      <Blogs />
      <Testimonial />
    </div>
  );
}
