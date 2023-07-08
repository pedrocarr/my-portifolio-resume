"use-client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const skills = [
  { skill: "HTML", image: "/html.svg" },
  { skill: "CSS", image: "/css.svg" },
  { skill: "JavaScript", image: "/javascript.svg" },
  { skill: "TypeScript", image: "/typescript.svg" },
  { skill: "React", image: "/react.svg" },
  { skill: "Git", image: "/git.svg" },
  { skill: "MongoDB", image: "/mongodb1.svg" },
  { skill: "SQL", image: "/database1.png" },
  { skill: "AWS", image: "/aws.svg" },
];

const schools = [
  {
    school: "School of Mines",
    degree: "Engineering",
    year: "2017",
    image: "/escolademinas.png",
    link: "http://www.em.ufop.br/",
  },
  {
    school: "Le Wagon",
    degree: "Web Development",
    year: "2021",
    image: "/lewagon.png",
    link: "https://www.lewagon.com/",
  },
];

const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-blue-500 border-0 rounded"></hr>
        </h1>
        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Get to know me!
            </h1>
            <p>
              Hi, my name is Pedro and I am a{" "}
              <span className="font-bold">{" problem solver"}</span>,
              <span className="font-bold">{" self-motivated"}</span>, and
              <span className="font-bold">{" driven"}</span> software engineer
              based in Prague, CZ.
            </p>
            <br />
            <p>
              I graduated from the School of Mines, Ouro Preto, Brazil in 2017 with
              a BS in Environmental Engineering, but I always had a passion for
              tech. Backend for living, frontend for fun. Le Wagon bootcamp
              helped me to get into the  field and since then I have been
              facing a lot of challenges.
            </p>
            <br />
            <p>
              I have a wide range of hobbies and passions that keep me busy.
              From reading, playing sports, traveling, cooking, I am always
              seeking new experiences and love to keep myself engaged and
              learning new things, especially new languages and cultures.
            </p>
            <br />
            <p>
              I believe that you should{" "}
              <span className="font-bold text-blue-500">
                never stop growing
              </span>{" "}
              and once you are learning you are not failing.
            </p>
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">My Skills</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <div key={idx} className="flex items-center mr-8 mb-4">
                    {item.image ? (
                      <Image
                        src={item.image}
                        alt=""
                        width={60}
                        height={100}
                        className="rounded-xl"
                      />
                    ) : (
                      <div className="w-8 h-8 mr-2 bg-gray-300"></div>
                    )}
                    <p className="ml-2">{item.skill}</p>
                  </div>
                );
              })}
            </div>
            <h1 className="text-2xl font-bold mt-2 mb-6">Education</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {schools.map((item, idx) => {
                return (
                  <div key={idx} className="flex items-center mr-8 mb-4">
                    <Link href={item.link}>
                      {item.image ? (
                        <Image
                          src={item.image}
                          alt=""
                          width={60}
                          height={100}
                          className="rounded-xl"
                        />
                      ) : (
                        <div className="w-8 h-8 mr-2 bg-gray-300"></div>
                      )}
                    </Link>
                    <p className="font-bold ml-2">{item.school}</p>
                    <p className="ml-2">{item.degree}</p>
                    <p className="font-bold ml-2">{item.year}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
