import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-white shadow mt-10">
      <div className="max-w-6xl mx-auto px-4 py-6 flex flex-col md:flex-row items-center justify-between text-sm text-gray-600">
        <p className="text-center md:text-left mb-4 md:mb-0">
          © {new Date().getFullYear()} Expense Tracker. All rights reserved <b className ="text-blue-500 underline text-l"><a href="https://indianwizard.tech/" target="blank">indianwizard.tech</a></b>
        </p>

        <div className="flex items-center gap-6 text-xl">
          <a
            href="https://github.com/your-github"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/your-profile"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="mailto:youremail@example.com"
            className="hover:text-blue-600 transition"
          >
            <FaEnvelope />
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
