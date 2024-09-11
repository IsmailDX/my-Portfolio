import React from "react";
import { FaGithub } from "react-icons/fa";
import { AiOutlineMail } from "react-icons/ai";
import { FaPhoneAlt } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { sendGAEvent } from "@next/third-parties/google";

type Props = {
  colorMode: string;
  language: string;
};

const Footer = ({ colorMode, language }: Props) => {
  return (
    <footer
      className={`w-full h-fit bg-cover bg-no-repeat md:bg-right-bottom bg-center md:bg-fixed flex justify-center 
    overflow-hidden select-none bg-[#fafafa] border-t-[1px] border-white/20 backdrop-blur-3xl ${
      colorMode === "dark"
        ? "md:bg-parallax5 bg-parallax2"
        : "md:bg-parallax6 bg-white"
    }  `}
    >
      <div
        className={`w-full max-w-[2440px] h-full flex md:justify-start justify-center sm:py-[5%] py-[8%] lg:px-32 md:px-24 px-5 ${
          colorMode === "dark" ? "text-white" : "text-black"
        }`}
      >
        <div className={`flex flex-col md:items-start items-center space-y-2`}>
          <h1 className={`text-3xl pb-2 ${language === "ar" && "arabic"}`}>
            {language === "en" ? "Contact Me" : "كلمني يا باشا"}
          </h1>
          <div className="flex items-center group hover:scale-105 transition-all duration-100 ease-in-out">
            <AiOutlineMail
              className={`w-5 h-5 ${
                colorMode === "dark"
                  ? "text-white group-hover:text-[#f9e686]/90"
                  : "text-black group-hover:font-bold"
              }`}
            />
            <h2
              className={`pl-2 group-hover:underline select-text ${
                colorMode === "dark"
                  ? "text-white/70 group-hover:text-[#f9e686]/90"
                  : "text-black/70 group-hover:font-bold"
              }`}
            >
              ismaildxx@gmail.com
            </h2>
          </div>
          <div className="flex items-center group hover:scale-105 transition-all duration-100 ease-in-out">
            <FaPhoneAlt
              className={`w-4 h-4  ${
                colorMode === "dark"
                  ? "text-white group-hover:text-[#f9e686]/90"
                  : "text-black group-hover:font-bold"
              }`}
            />
            <h2
              className={`pl-2 group-hover:underline select-text ${
                colorMode === "dark"
                  ? "text-white/70 group-hover:text-[#f9e686]/90"
                  : "text-black/70 group-hover:font-bold"
              }`}
            >
              +971506491630
            </h2>
          </div>
          <div className="w-full pt-2 space-y-[3px]">
            <a
              href="/Ismail-Hussein-CV.pdf"
              target="_blank"
              rel="noopener noreferrer"
              download="Ismail-Hussein-CV.pdf"
            >
              <button
                type="button"
                className={`w-full bg-transparent backdrop-blur-lg rounded-lg py-2 px-4 hover:bg-white/10 hover:scale-105
                transition-all duration-200 ease-out active:bg-white/30 active:text-lg focus:outline-none focus:ring-2
               focus:ring-[#f9e686] focus:ring-opacity-50 ${
                 colorMode === "light"
                   ? "text-black border border-black group-hover:font-bold"
                   : "text-white border border-white hover:text-[#f9e686]/90"
               } `}
                onClick={() => sendGAEvent("Download CV", "CV Downloaded")}
              >
                {language === "en" ? "Download CV" : "CV"}
              </button>
            </a>
            <div className="w-full flex justify-between items-center gap-2">
              <a href="https://www.linkedin.com/in/ismailadel/" target="_blank">
                <div className="backdrop-blur-lg w-fit p-3 mt-4 rounded-lg hover:rounded-full borderStyles transition-all duration-200 ease-in-out group">
                  <FaLinkedin
                    className={`w-6 h-6  ${
                      colorMode === "dark"
                        ? "text-white group-hover:text-[#f9e686]/90"
                        : "text-black group-hover:font-bold"
                    }`}
                  />
                </div>
              </a>
              <a href="https://github.com/IsmailDX" target="_blank">
                <div className="backdrop-blur-lg w-fit p-3 mt-4 rounded-lg hover:rounded-full borderStyles transition-all duration-200 ease-in-out group">
                  <FaGithub
                    className={`w-6 h-6  ${
                      colorMode === "dark"
                        ? "text-white group-hover:text-[#f9e686]/90"
                        : "text-black group-hover:font-bold"
                    }`}
                  />
                </div>
              </a>
              <a
                href="https://www.instagram.com/ismaildx/?next=%2F"
                target="_blank"
              >
                <div className="backdrop-blur-lg w-fit p-3 mt-4 rounded-lg hover:rounded-full borderStyles transition-all duration-200 ease-in-out group">
                  <FaInstagram
                    className={`w-6 h-6  ${
                      colorMode === "dark"
                        ? "text-white group-hover:text-[#f9e686]/90"
                        : "text-black group-hover:font-bold"
                    }`}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
