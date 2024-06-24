import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { close, menu } from "../assets";
import { navLinks } from "../data";
import { FaFacebook, FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import toast, { Toaster } from "react-hot-toast"; // Importing toast and Toaster from react-hot-toast

const Navbar = () => {
  const [active, setActive] = useState("hero");
  const [toggle, setToggle] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      setScrolled(scrollTop > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const sections = document.querySelectorAll("div[id]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.2,
        rootMargin: "0px 0px -50% 0px",
      }
    );

    sections.forEach((section) => observer.observe(section));

    return () => sections.forEach((section) => observer.unobserve(section));
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
    setActive("hero");
  };

  const copyEmailToClipboard = () => {
    navigator.clipboard.writeText("tanjim.riju1243@gmail.com");
    toast.success("Email Copied!", {
      style: {
        borderRadius: "10px",
        background: "#333",
        color: "#fff",
      },
    });
  };

  return (
    <nav className="w-full flex items-center bg-gradient-to-b from-black sm:bg-none p-8 sm:px-16 sm:py-10 fixed z-40 pointer-events-none">
      <div className="w-full flex justify-between items-start mx-auto">

        <div className="flex items-center space-x-4">
          <a
            href="https://www.facebook.com/tanjim.islam1"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Facebook"
          >
            <FaFacebook className="text-white text-[36px] sm:text-[26px] lg:text-[36px] pointer-events-auto cursor-pointer glass-morphism hover:golden-glow" />
          </a>
          <a
            href="https://www.linkedin.com/in/tanjim-riju-7b0683234/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin className="text-white text-[36px] sm:text-[26px] lg:text-[36px] pointer-events-auto cursor-pointer glass-morphism hover:golden-glow" />
          </a>
          <a
            href="https://github.com/Tanjim-Islam"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub className="text-white text-[36px] sm:text-[26px] lg:text-[36px] pointer-events-auto cursor-pointer glass-morphism hover:golden-glow" />
          </a>

          <div
            onClick={copyEmailToClipboard}
            aria-label="Email"
          >
            <FaEnvelope className="text-white text-[36px] sm:text-[26px] lg:text-[36px] pointer-events-auto cursor-pointer glass-morphism hover:golden-glow"/>
          </div>
        </div>

        <ul className="list-none hidden sm:flex flex-col gap-5">
          {navLinks.map((nav) => (
            <li
              key={nav.id}
              className={`relative flex items-center ${
                active === nav.id ? "text-white" : "text-slate-500"
              } hover:text-white text-[18px] lg:text-[24px] font-bold pointer-events-auto cursor-pointer`}
              onClick={() => setActive(nav.id)}
            >
              {active === nav.id && (
                <div className="fixed right-10 w-2 h-6 lg:h-8 bg-quaternary"></div>
              )}
              <a href={`#${nav.id}`}>{nav.title}</a>
            </li>
          ))}
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain pointer-events-auto cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-30 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-1 flex-col gap-4">
              {navLinks.map((nav) => (
                <li
                  key={nav.id}
                  className={`font-poppins font-medium cursor-pointer text-[16px] ${
                    active === nav.id ? "text-quaternary" : "text-secondary"
                  }`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(nav.id);
                  }}
                >
                  <a href={`#${nav.id}`}>{nav.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <Toaster position="top-center" reverseOrder={false} />
    </nav>
  );
};

export default Navbar;
