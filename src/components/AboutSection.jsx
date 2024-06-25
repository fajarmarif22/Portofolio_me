import React from "react";
import Foto from "../assets/foto.jpeg"

function AboutSection() {
  return (
<div class="px-2 py-20 w-full flex justify-center">
    <div class="bg-white lg:mx-8 lg:flex lg:max-w-5xl lg:shadow-lg rounded-lg">
        <div class="lg:w-1/2">
            <div class="">
                  <img className="bg-cover lg:h-full lg:scale-110 h-80 rounded-b-none border lg:rounded-lg" src={Foto} alt="" />
            </div>
        </div>
        <div class="py-12 px-6 lg:px-12 max-w-xl lg:max-w-5xl lg:w-1/2 rounded-t-none border lg:rounded-lg">
            <h2 class="text-3xl text-gray-800 font-bold">
                Promoting Sustainable Lifestyle Choices
                <span class="text-indigo-600">Choices</span>
            </h2>
            <p class="mt-4 text-gray-600">
                The "Eco-Tracker" project aims to create a web-based platform that encourages individuals to adopt
                sustainable lifestyle choices and actively contribute to environmental conservation. The platform will
                provide users with personalized tracking, education, and engagement features to empower them to make
                eco-friendly decisions in various aspects of their lives.
            </p>
            <div class="mt-8">
                <button class="bg-gray-900 text-gray-100 px-5 py-3 font-semibold rounded">Start Now</button>
            </div>
        </div>
    </div>
</div>
)
}

export default AboutSection;
