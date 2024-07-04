// src/components/About.js
import React from 'react';
import image from '../assets/Iram_03.jpeg';

const About = () => {
  return (

    <section className="p-8 bg-white shadow-lg rounded-lg">
      <h2 className="text-3xl font-bold mb-6 text-gray-800">About Me</h2>
      <div className="flex flex-col md:flex-row items-center">
        <img src={image} alt="Profile" className="w-32 h-32 rounded-full mb-6 md:mb-0 md:mr-6" />
        <p className="text-lg text-gray-700 leading-relaxed">
          Hi there! I'm <span className="font-semibold text-gray-900">Iram Bashir</span>, a passionate Software Engineer specializing in React JS development. Based in Islamabad, Pakistan, I bring over 1.5 years of experience crafting interactive and efficient web applications.
          <br /><br />
          I graduated with a BS in Computer Science from <span className="font-semibold text-gray-900">FAST University</span>, where I honed my skills in JavaScript and web technologies. At Jin Technologies and Tourly Technologies, I've leveraged React JS to build responsive front-ends, integrating them seamlessly with back-end services using technologies like TypeScript, Redux, and Nest.js.
          <br /><br />
          My journey in software development began at INTECH Automation Processes, where I started as an intern and quickly advanced to a Junior Developer role, gaining invaluable experience in software architecture and development lifecycle.
          <br /><br />
          Beyond coding, I enjoy exploring new technologies, contributing to open-source projects, and staying updated with the latest trends in web development. Let's connect and discuss how we can innovate together!
        </p>
      </div>
      <div className="mt-6 flex space-x-4">
        <a href="https://www.linkedin.com/in/irambashir" className="text-blue-500 underline">LinkedIn</a>
        <a href="https://github.com/IramBashir" className="text-blue-500 underline">GitHub</a>
      </div>
    </section>
  );
};

export default About;
