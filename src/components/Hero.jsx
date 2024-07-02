import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SpacemanCanvas } from ".";
import Position from "./Position";

gsap.registerPlugin(ScrollTrigger);

const Hero = ({ scrollContainer }) => {
  const parallaxRef = useRef(null);

  useEffect(() => {
    const element = parallaxRef.current;

    gsap.to(".parallax__stars", {
      yPercent: 0,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__planets", {
      yPercent: 15,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__sun", {
      yPercent: 10,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__mountain1", {
      yPercent: 8,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__mountain2", {
      yPercent: 5,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__crater", {
      yPercent: 3,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });

    gsap.to(".parallax__content", {
      yPercent: 2,
      ease: "none",
      scrollTrigger: {
        trigger: element,
        scrub: true,
      },
    });
  }, []);

  return (
    <section id="hero" className="parallax" ref={parallaxRef}>
      <div className="parallax__content absolute top-[10%] sm:top-[16%] lg:top-[24%] w-full mx-auto lg:pl-[38vh] lg:pr-[30vh] xl:pl-96 xl:pr-72 2xl:px-40 3xl:px-60 flex flex-col lg:flex-row items-start z-10">
        <div className="flex-1 lg:mb-0">
          <h1 className="font-medium text-white text-[40px] xs:text-[50px] sm:text-[68px] md:text-[80px] lg:text-[100px] 2xl:text-[180px] leading-[110px] 2xl:leading-[160px]">
            TANJIM RIJU
          </h1>
          <Position />
        </div>
        <div className="flex-1 flex justify-start lg:justify-end mt-4 sm:mt-14 ml-8 xs:ml-[-4vh] sm:ml-[-17vh] md:ml-[-26vh] lg:mt-10 2xl:mt-0">
          <div className="font-bold text-[20px] sm:text-[30px] md:text-[36px] 2xl:text-[46px] sm:leading-[40px] md:leading-[50px] 2xl:leading-[60px] streaky-glow max-w-sm 2xl:max-w-lg text-white text-left">
            Turning lines of code into intelligent solutions and seamless
            experiences.
          </div>
        </div>
      </div>

      <img
        className="parallax__stars"
        src="./parallax/1Stars.svg"
        alt="Stars"
      />
      <img
        className="parallax__planets"
        src="./parallax/2Planets.svg"
        alt="Planets"
      />
      <img
        className="parallax__mountain1"
        src="./parallax/3Mountain.svg"
        alt="Mountain"
      />
      <img
        className="parallax__mountain2"
        src="./parallax/4Mountain.svg"
        alt="Mountain"
      />
      <img
        className="parallax__crater"
        src="./parallax/5Crater.svg"
        alt="Crater"
      />
      <img className="parallax__sun" src="./parallax/6Sun.svg" alt="Sun" />

      <SpacemanCanvas scrollContainer={scrollContainer} />
    </section>
  );
};

export default Hero;
