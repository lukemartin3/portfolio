import React from "react";

export default function About() {
    return (
    <section id="about">
      <div className="container mx-auto flex px-10 py-20 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
            Hi, I'm Luke.
            <br className="hidden lg:inline-block" />I love to build apps.
          </h1>
          <p className="mb-8 leading-relaxed">
            I am a recent graduate from the University of Iowa with a B.S. in Computer Science and Engineering with a focus 
            in Software Engineering. I am very eager to start my career in tech while also growing my experience and 
            professional network. 
          </p>
          <div className="flex justify-center">
            <a
              href="#contact"
              className="inline-flex text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">
              Work With Me
            </a>
            <a
              href="#projects"
              className="ml-4 inline-flex text-gray-400 bg-gray-800 border-0 py-2 px-6 focus:outline-none hover:bg-gray-700 hover:text-white rounded text-lg">
              See My Projects
            </a>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <img
            className="object-cover object-center rounded"
            alt="hero"
            src="./headshot.png"
          />
        </div>
      </div>
      <a href="https://github.com/lukemartin3?tab=repositories" className="mx-auto w-20 mb-4">
            <img src="github-logo.png" alt="Github" className="mx-auto w-20 mb-4"></img>
      </a>
      <a href="https://www.linkedin.com/in/luke-martin-aab746197/" className="mx-auto w-20 mb-4">
            <img src="linkedIn.png" alt="LinkedIn" className="mx-auto w-20 mb-4"></img>
      </a>
    </section>
    );
}


