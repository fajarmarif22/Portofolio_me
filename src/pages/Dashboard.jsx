import React from "react";
import HeroSection from "../components/HeroSection";
import Navbar from "../components/Navbar";
import About from "../components/About";
import ProjectSection from "../components/ProjectSection";


function Dashboard() {
  return (
    <main className="flex min-h-screen flex-col bg-slate-900 ">
      <Navbar/>
      <div className="container mt-24 mx-auto py-4 px-12">
        <HeroSection/>
        <About/>
        <ProjectSection/>
      </div>
    </main>
  );
}

export default Dashboard;
