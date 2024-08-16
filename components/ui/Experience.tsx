import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from 'framer-motion'
import { Icon } from "@iconify/react";

const Experience = () => {
  const workHistory = [
    {
      id: 1,
      name: "Creative Handles",
      role: "Senior Software Engineer",
      fromDate: "May 2022",
      toDate: "Present",
      isFullTime: true,
      details: [
        "Led a team of 5-8 engineers, managing multiple products with a focus on front-end and full-stack developmen",
        "Used MERN stack, JavaScript, TypeScript, and AWS to build high-performance APIs and integrate GraphQL with Apollo Client.",
        "Integrated Stripe API into React for secure payments, developing custom payment forms with React and TypeScript.",
        "Proficient in unit and integration testing to ensure software quality and functionality."
      ],
    },
    {
      id: 2,
      name: "Big Immersive",
      role: "React Js Developer",
      fromDate: "May 2020",
      toDate: "May 2022",
      isFullTime: true,
      details: [
        "Implemented real-time notifications with WebSockets and enhanced search using Algolia features.",
        "Refactored components for reusability, integrated Sumsub's KYC, and optimized performance.",
        "Used Redux with Thunk and Saga for state management and improved performance through code splitting.",
        "Customized Material-UI themes, used PureComponents and React.memo, and managed CI/CD workflows with Git and GitHub.",
      ],
    },
    {
      id: 3,
      name: "DatumSquare IT Services.",
      role: "Software Engineer",
      fromDate: "Aug 2019",
      toDate: "April 2020",
      isFullTime: false,
      details: [
        "Proficient in using Redux for state management with middleware like Thunk and Saga.",
        "Customized Material-UI themes to align with brand guidelines and used PureComponents and React.memo to optimize performance",
        "Implemented CI/CD workflows using Git and GitHub for efficient software development.",
        "Managed user validation and authentication with JWT and improved session management using cookies and local storage.",
      ],
    },
    {
      id: 4,
      name: "Magnic Digital",
      role: "React Js Developer",
      fromDate: "Aug 2019",
      toDate: "Aug 2020",
      isFullTime: true,
      details: [
        "Worked to implement user validation and authentication using JWT.",
        "Worked with browser storage mechanisms such as cookies and local storage to manage user sessions and improve performance",
        "Implemented CSS, Sass,Less and tailwind to create responsive and visually appealing user interfaces for web applications",
        "Proficient in using Jira and Zoho to manage tasks, track progress, and collaborate with team members in software development projects",
      ],
    },
    {
      id: 5,
      name: "Voltquant Ltd",
      role: "MERN Stack Developer",
      fromDate: "Aug 2019",
      toDate: "Aug 2020",
      isFullTime: true,
      details: [
        "Proficient in full-stack MERN development, with expertise in building real-time applications using Node.js, React.js, and Redux.",
        "Skilled in deploying scalable applications on AWS, integrating cloud infrastructure to ensure seamless and efficient performance.",
        "Expert in designing robust architectures for both frontend and backend, focusing on state management and development efficiency.",
        "Experienced in creating AI-driven solutions and algorithms, enhancing corporate sector products with improved efficiency and functionality.",
      ],
    },
  ];

  const expVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: .3
      }
    }
  };

  const [selectedWork, setSelectedWork] = useState(workHistory[0]);
  const [isLoadingWork, setisLoadingWork] = useState(false);

  useEffect(() => {
    setisLoadingWork(true);
    setTimeout(() => {
      setisLoadingWork(false);
    }, 100);
  }, [selectedWork]);



  return (
    <motion.section
      id="experience"
      className="md:py-32 py-24 max-w-4xl w-full mx-auto"
      initial="offscreen"
      whileInView="onscreen"
      viewport={{ once: true }}
      variants={expVariants}
    >
      <Container>
        <div>
          <Heading headingNumber={2} headingText="Where I’ve Worked" />
          <div className="flex md:flex-row flex-col items-start mt-10 mb-5">
            <div className="overflow-x-scroll md:w-auto w-full flex-shrink-0">
              <div className="md:block flex flex-shrink-0 relative md:border-l-[3px] border-Slate/20">
                <div
                  style={{ top: `${43 * (selectedWork.id - 1)}px` }}
                  className="md:block hidden absolute left-0 h-[43px] w-[3px] bg-primary transition-all duration-300 linear transform -translate-x-[3px] rounded-md "
                ></div>
                {/* For mobile screen */}
                <div
                  style={{ left: `${176 * (selectedWork.id - 1)}px` }}
                  className="md:hidden block absolute bottom-0 w-44 h-[2px] bg-primary transition-all duration-300 linear transform md:-translate-x-[3px] rounded-md"
                ></div>

                {workHistory.map((work, index) => (
                  <div
                    key={index}
                    onClick={() => setSelectedWork(work)}
                    className={`${
                      work.id === selectedWork.id ? " text-primary" : "text-Slate"
                    } hover:bg-LightNavy hover:text-primary cursor-pointer flex-shrink-0 h-[43px] md:w-auto w-44 md:border-b-0 border-b-[3px] border-Slate/20 md:text-sm text-xs flex items-center transition-all duration-150 ease-linear pl-5 pr-6 select-none md:justify-start justify-center `}
                  >
                    {work.name}
                  </div>
                ))}
              </div>
            </div>
            <div className="transition-all duration-300 ease-linear w-full md:pt-1 pt-5 pb-2 md:pr-5 md:pl-10 min-h-[350px]">
              {!isLoadingWork && (
                <>
                  <h1 className="font-medium text-lg text-LightestSlate">
                    {selectedWork.role}{" "}
                    <span className="text-primary">@{selectedWork.name}</span>
                  </h1>
                  <p className="mt-0.5 mb-5 text-[13px] text-Slate capitalize">
                    {selectedWork.fromDate} <span className="mx-2">-</span>{" "}
                    {selectedWork.toDate} {!selectedWork.isFullTime && <>
                      <span className="mx-3">•</span>
                      <span className="normal-case ">Part-time</span>
                    </>
                    }
                  </p>
                  <div className="flex flex-col gap-3">
                    {selectedWork.details.map((detail, index) => (
                      <div
                        key={index}
                        className="text-sm text-Slate flex items-start gap-3"
                      >
                        <span>
                          <Icon
                            icon="mdi:arrow-compass"
                            className="pt-1.5 transorm rotate-90 text-[17px] text-primary "
                          />
                        </span>{" "}
                        {detail}
                      </div>
                    ))}
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </Container>
    </motion.section>
  );
};

export default Experience;
