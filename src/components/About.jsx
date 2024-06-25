import React, { useState, useTransition } from "react";
import Logo from "../assets/background.jpeg"
import TabBotton from "./TabBotton";
import "../components/App.css"

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content:(
      <ul className="list-disc pl-2">
        <li>Nodejs</li>
        <li>Express</li>
        <li>PostgreSQL</li>
        <li>JavaScript</li>
        <li>Python</li>
        <li>ReactJS</li>
        <li>SQL</li>
      </ul>
    )
  },
  {
    title: "Education",
    id: "education",
    content:(
      <ul className="list-disc pl-2">
        <li>
          <ul className="">Bachelor Telecommunication Engineering</ul>
          <ul className="text-slate-400 font-semibold text-base">Telkom University</ul>
        </li>
        <li>
          <ul>Diploma Telecommunication Technology</ul>
          <ul className="text-slate-400 font-semibold text-base">Telkom University</ul>
        </li>
      </ul>
    )
  },
  {
    title: "Experience",
    id: "experience",
    content:(
      <ul className="list-disc pl-2">
        <li>
          <ul className="">Technical Engineer at Telkomsel</ul>
          <ul className="text-slate-400 font-semibold text-base">Nexwave</ul>
        </li>
        <li>
          <ul>Data Center Engineer at KemKominfo</ul>
          <ul className="text-slate-400 font-semibold text-base">Energi Jaring Komunikasi </ul>
        </li>
        <li>
          <ul>Frontend Developer (Internship)</ul>
          <ul className="text-slate-400 font-semibold text-base">Indonesia Comnets Plus </ul>
        </li>
      </ul>
    )
  },
]


function About() {
  const [tab, setTab] = useState("skills")
  const [isPeding,startTransition] = useTransition()

  const handleTabChange = (id) => {
    startTransition(()=>{
      setTab(id)
    })
  }

  return (

  <section className="text-white opacity-90 bg-about rounded-3xl">
    <div className="relative">
    <div className="absolute inset-0 bg-black opacity-50 rounded-3xl"></div>
    <div className="relative z-10 text-white">
    <div className="md:grid md:grid-cols-2 pl-10 gap-2 items-center py-8  xl:gap-16 sm:py-16 xl:px-16">
      <div className="">
        <img src={Logo} className="h-4/5 w-4/5 object-cover rounded-full p-10" alt="" />
      </div>
      <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
        <h2 className="text-4xl font-bold text-white mb-4">About</h2>
        <p className="lg:text-md text-sm">
        Becoming a software developer, especially in web applications, is something I both hate and love. Initially, I tried to avoid this position due to its complexity. However, over time, I gradually began to understand it and started to make peace with the fact that being a software developer is an art of creation.
        </p>
        <div className="flex flex-row justify-start mt-8 ">
          <TabBotton selectTab={()=>handleTabChange("skills")} active={tab==="skills"}>Skills</TabBotton>
          <TabBotton selectTab={()=>handleTabChange("education")} active={tab==="education"}>Education</TabBotton>
          <TabBotton selectTab={()=>handleTabChange("experience")} active={tab==="experience"}>Experience</TabBotton>
        </div>
        <div className="mt-8">{TAB_DATA.find((t)=>t.id === tab).content}</div>
      </div>
    </div>
    </div>
  </div>
  </section>)
}

export default About;
