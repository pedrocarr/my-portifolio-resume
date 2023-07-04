import React from "react";
import Image from "next/image";
import Link from "next/link";
import { BsArrowUpRightSquare } from "react-icons/bs";
import SlideUp from "./SlideUp";

const companies = [
  {
    name: "Emplifi",
    data: "Mar 2023 - Present",
    location: "Prague, Czech Republic",
    description:
      "Emplifi is a leading unified customer engagement platform that empowers businesses to reach and grow communities through digital- and social-first strategies. More than 20,000 brands like McDonald’s, Ford Motor Company, and Delta Air Lines rely on Emplifi to enable connected, empathetic experiences for the modern consumer across marketing, commerce, and care.",
    skills: [
      "- Development and maintenance of systems using Javascript, Typescript, Node, Figma, Bootstrap, CSS, HTML, PostgreSQL, MikroORM;",
      "- GIT and Github for code versioning and SonarQube for code quality;",
      "- Scrum as agile methodology, with Jira.",
      "- Deploy infrastructure: Vercel, Heroku",
    ],
    image: "/Emplifi.svg",
    link: "https://www.emplifi.io/",
  },
  {
    name: "BairesDev",
    data: "Dec 2022 - May 2023",
    location: "San Francisco Bay Area - Remote",
    description:
      "We are the leading Nearshore Technology Solutions company.We architect and engineer scalable and high-performing software solutions to meet the business challenges of our clients. Using our tech expertise and cross-industry experience, we evolve digital transformation into digital acceleration. Our ultimate goal is to create lasting value throughout the entire digital transformation journey.",
    skills: [
      "- Development and maintaining web applications using JavaScript, TypeScript, React, Next JS",
      "- AWS for Cloud Services provider",
      "- Sonarqube for code quality",
      "- Jenkins, Github Actions for deployment (CI/CD)",
    ],
    image: "/bairesdev.png",
    link: "https://www.bairesdev.com/",
  },
  {
    name: "BEES",
    data: "Mar 2022 - Jan 2023",
    location: "Brazil - Remote",
    description:
      "BEES is a company of the AB-InBev group (Anheuser-Busch InBev World's largest brewer) that arrived to help through the B2B e-commerce and SaaS platform, and brings the power of digital to small and medium-sized retailers and the companies that service them, unlocking new growth opportunities for all. We are in 17 markets and we got 2.7m monthly active users.",
    skills: [
      "- Development and maintenance of systems using Javascript, Typescript, Node, Figma, Bootstrap, CSS, HTML, PostgreSQL, MikroORM;",
      "- GIT and Github for code versioning and SonarQube for code quality;",
      "- Scrum as agile methodology, with Jira.",
      "- Deploy infrastructure: Vercel, Heroku",
    ],
    image: "/bess.png",
    link: "https://www.bees.com/en",
  },
  {
    name: "Accenture",
    data: "Apr 2021 - Mar 2022",
    location: "Brazil - Remote",
    description:
      "Accenture is a multinational company that specializes in information technology and consulting services. It is part of the Fortune Global 500.",
    skills: [
      "- Development and maintenance of systems for Accenture clients using Javascript, Typescript, Node, Elastic Search, Angular, PostgreSQL and Redis;",
      "- GIT and Github for code versioning and SonarQube for code quality;",
      "- Development and maintaining microservices with AWS Lambda, API Gateway, SQS, SNS, AWS CloudFront and RDS;",
      "- Scrum as agile methodology, with Jira and AzureDevops.",
      "- Cloud deploy infrastructure: AWS Cloudformation, AWS Codepipeline, Jenkins.",
      "- Monitoring: AWS Cloudwatch and Datadog",
    ],
    image: "/accenture.svg",
    link: "https://platoio.com/register",
  },
  {
    name: "NeXTIME",
    data: "Nov 2020 - Mar 2021",
    location: "Brazil - Remote",
    description:
      "NexTIME is a brazilian startup company that increases value to small and medium businesses making their digital revolution.",
    skills: [
      "- Development and maintenance of systems using Javascript, Typescript, Node, Figma, Bootstrap, CSS, HTML, PostgreSQL, MikroORM;",
      "- GIT and Github for code versioning and SonarQube for code quality;",
      "- Scrum as agile methodology, with Jira.",
      "- Deploy infrastructure: Vercel, Heroku",
    ],
    image: "/nextime.png",
    link: "https://www.nextime.com.br/",
  },
];

const WorkExperienceSection = () => {
  return (
    <section id="work-experience">
      <h1 className="my-10 text-center font-bold text-4xl">
        Work Experience
        <hr className="w-6 h-1 mx-auto my-4 bg-teal-500 border-0 rounded"></hr>
      </h1>

      <div className="flex flex-col space-y-28">
        {companies.map((company, idx) => {
          return (
            <div key={idx}>
              <SlideUp offset="-300px 0px -300px 0px">
              <div className="flex flex-col md:flex-row md:space-x-12">
                <div className="md:w-1/2">
                  <Link href={company.link}>
                    <Image
                      src={company.image}
                      alt=""
                      width={100}
                      height={100}
                      className="rounded-xl shadow-xl hover:opacity-90"
                    />
                  </Link>
                  <p className="text-l leading-7 mt-4 mb-4 text-neutral-600 dark:text-neutral-400">
                    {company.location}
                  </p>
                  <p className="text-l leading-7 mt-4 mb-4 text-neutral-600 dark:text-neutral-400">
                    {company.data}
                  </p>
                  </div>
                  <p className="text-xl leading-7 mt-4 mb-4 text-neutral-600 dark:text-neutral-400">
                    {company.description}
                  </p>
                  <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                    {company.skills}
                  </p>

                  <div className="flex flex-row align-bottom md:flex-row md:space-x-4">
                    <Link href={company.link} target="_blank">
                      <BsArrowUpRightSquare
                        size={30}
                        className="hover:-translate-y-1 transition-transform cursor-pointer"
                      />
                    </Link>
                  </div>
                </div>
              </SlideUp>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default WorkExperienceSection;
