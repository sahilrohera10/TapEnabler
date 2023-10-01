import React from "react";
import Header2 from "../Components/Header2/Header2";
import About from "../Components/About/About";
import Services from "../Components/Services/Services";
import Founder from "../Components/Founder/Founder";
import OurBlogs from "../Components/OurBlogs/OurBlogs";
import ContactUs from "../Components/ContactUs/ContactUs";
import Footer from "../Components/Footer/Footer";
import Testimonials from "../Components/Testimonials/Testimonials";

export default function LandingPage() {
  return (
    <div>
      <Header2 />

      <About />
      <br />
      <Services />
      <Founder />
      <br />
      <br />
      <OurBlogs />
      <Testimonials />
      <ContactUs />
      <Footer />
    </div>
  );
}
