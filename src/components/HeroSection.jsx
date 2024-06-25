"use client"
import React from "react";
import { TypeAnimation } from "react-type-animation";
import Cat from "../assets/cat.jpg"



function HeroSection() {
  const handleButtonClick = () => {
    const googleDriveLink = 'https://drive.google.com/file/d/12O9YoAU4MXZoBJDWjAFgA1L8et4Rkvwv/view?usp=sharing';
    window.location.href = googleDriveLink;
  };
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-12 pb-10">
        <div className="col-span-7 place-self-center text-left">
          <h1 className="text-white mb-4 sm:text-5xl text-4xl lg:text-6xl font-extrabold">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Trust me, I'm {" "}</span>
            <br />
            <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed out once, initially
              'Fajar Maulana A',
              1000, // wait 1s before replacing "Mice" with "Hamsters"
              'Web Developer',
              1000,
              'Front-end Dev.',
              1000,
            ]}
            wrapper="span"
            speed={50}
            // style={{ fontSize: '2em', display: 'inline-block' }}
            repeat={Infinity}/>
          </h1>;
          <p className="text-slate-300 text-sm sm:text-md lg:text-lg mb-6">
Hello, my name is Fajar Maulana Arif, also known as Ajay. I am a Telecommunications Engineering graduate currently seeking opportunities as a Frontend Developer. I have approximately 2 years of experience in web development, particularly in frontend technologies. During this time, I have become proficient in HTML, CSS, JavaScript, and frameworks such as React and Vue.js. I am eager to contribute and grow in a dynamic and innovative team.
          </p>
          <button className="px-6 py-3 w-full sm:w-fit rounded-full  m-2 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 hover:text-slate-400 transition duration-700 text-white">Let's Connect</button>
          <button onClick={handleButtonClick}  className="px-6 py-3 w-full sm:w-fit rounded-full m-2 text-white border hover:border-slate-500 transition duration-700 transform">Curriculum Vitae</button>
        </div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <div className="">
            <div className="object-cover hidden lg:block rounded-full  w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
              <img src={Cat} alt="" height={350} width={350} className=" rounded-full object-cover p-5 object-bottom absolute shadow-lg hover:scale-105 transition duration-1000 transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"/>
            </div>
            <div className="absolute inset-0 bg-black opacity-10"></div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default HeroSection;
