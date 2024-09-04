import React from "react";
import Navbar from "../components/Navbar";
import Course from "../components/Cource";
import Footer from "../components/Footer";
function Courses() {
  return (
    <>
      <Navbar />
      <div className=" min-h-screen">
        <Course />
      </div>
      <Footer />
    </>
  );
}

export default Courses;
