import React from "react";

const About = () => {
  return (
    <div
      name="about"
      className="w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p className="text-xl mt-20">
        Hi, I'm Denish Fuletra an aspiring and determined Full Stack Web Developer, curious to explore different industry-standard tech stacks and environments. Skilled in the MERN stack and willing to start a career with an organization that provides an opportunity to improve skills and knowledge gained as well as to grow along with the organization’s goal.


        </p>

        <br />

        <p className="text-xl">
        My interest in web development started few years  back when I was trying to change the message sender name using inspect element on the web 😃, that taught me a lot about HTML & CSS.
        </p>
      </div>
    </div>
  );
};

export default About;
