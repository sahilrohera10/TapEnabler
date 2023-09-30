// BookAppointmentButton.js

import React from "react";

function BookAppoinbtn() {
  const scrollToContact = () => {
    const targetElement = document.getElementById("contact");
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <button
      style={{ zIndex: "1000000000000" }}
      className="fixed bottom-4 right-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
      onClick={scrollToContact}
    >
      Book an Appointment
    </button>
  );
}

export default BookAppoinbtn;
