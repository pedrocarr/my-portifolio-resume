"use client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import Image from "next/image";
import { Link } from "react-scroll/modules";
import { HiArrowDown } from "react-icons/hi";

const HeroSection = () => {
  const [isInView, setIsInView] = useState(false);
  const [output, setOutput] = useState("");
  const { ref, inView } = useInView({
    triggerOnce: true,
  });

  useEffect(() => {
    setIsInView(inView);
  }, [inView]);

  const animateText = (text: string) => {
    const chars = text.split("");

    chars.forEach((char, index) => {
      setTimeout(() => {
        setOutput((prevOutput) => prevOutput + char);
      }, 100 * index);
    });
  };

  useEffect(() => {
    if (isInView) {
      animateText("Hi, I'm Pedro!");
    }
  }, [isInView]);

  return (
    <section id="home">
      <div
        className="flex flex-col text-center items-center justify-center animate-fadeIn animation-delay-2 my-10 py-16 sm:py-32 md:py-48 md:flex-row md:space-x-4 md:text-left"
        ref={ref}
      >
        <div className="md:mt-2 md:w-1/2" >
          <Image
            src="/pedro2.jpeg"
            alt=""
            width={325}
            height={200}
            className="rounded-ss-full shadow-xl hover:opacity-70"
          />
        </div>
        <div className="md:mt-2 md:w-3/5">
          <h1 className="text-4xl font-bold mt-6 md:mt-0 md:text-7xl">
            {isInView ? <span>{output}</span> : <span>&nbsp;</span>}
          </h1>
          <p className="text-lg mt-4 mb-6 md:text-2xl">
            I&#39;m a{" "}
            <span className="font-semibold text-blue-600">
              Software Engineer{" "}
            </span>
            based in Prague, CZ. Always looking to improve myself and deliver
            my best.
          </p>
          <Link
            to="work-experience"
            className="text-neutral-100 font-semibold px-6 py-3 bg-blue-600 rounded shadow hover:bg-blue-700"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            Work Experience
          </Link>
        </div>
      </div>
      <div className="flex flex-row items-center text-center justify-center">
        <Link
          to="about"
          activeClass="active"
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
        >
          <HiArrowDown size={35} className="animate-bounce" />
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
