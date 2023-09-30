import React from "react";
import Header2 from "../Components/Header2/Header2";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Founder from "../Components/Founder/Founder";
import Blogs from "../Components/Blogs/Blogs";
import Testimonial from "../Components/Testimonials/Testimonial";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";

export default function LandingPage() {
  return (
    <div>
      <Header2 />

      <About />
      <Services />
      <Founder />
      <br />
      <br />
      <Blogs />
      <Testimonial />
      <ContactUs />
      <Footer />
    </div>
  );
}
