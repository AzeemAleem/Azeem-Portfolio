import React from "react";
import Container from "./Container";
import Heading from "./Heading";
import { useState, useEffect } from "react";
import { motion, Variants } from "framer-motion";
import { Icon } from "@iconify/react";

const Experience = () => {
  const workHistory = [
    // {
    //     id: 1,
    //     name: "Voltquant",
    //     role: "Senior Software Engineer",
    //     fromDate: "Nov 2023",
    //     toDate: "Present",
    //     isFullTime: true,
    //     details: [
    //         "Evaluated operational feasibility and proposed solutions, helping reduce estimation errors and align product direction early in the lifecycle.",
    //         "Built large-scale geospatial data pipelines using MapLibre, Mapbox, and Google Maps APIs, improving map rendering speed by 45%.",
    //         "Deployed secure, scalable cloud systems using AWS ((EC2, S3, SES, Amplify, RDS, Cognito, Route 53, Bedrock, etc.), improving system uptime and reducing latency by 30%.",
    //         "Fine-tuned GPT-based LLMs via prompt engineering with OpenAI API, enhancing accuracy of responses by 35% in QA tests.",
    //         "Integrated Stripe API into a React app, enabling secure and fast transactions, reducing payment failure rate by 40%.",
    //         "Led and mentored a team of 5–8 engineers, improving task completion rates and team velocity through regular check-ins and support."
    //     ],
    // },
    {
      id: 1,
      name: "Voltquant Pvt Ltd",
      role: "Senior Software Engineer",
      fromDate: "Nov 2023",
      toDate: "Present",
      isFullTime: true,
      details: [
        "Built large-scale geospatial data pipelines using MapLibre, Mapbox, and Google Maps APIs, improving map rendering speed by 45%.",
        "Deployed secure, scalable cloud systems using AWS (EC2, S3, SES, Amplify, RDS, Cognito, Route 53, Bedrock, etc.), improving system uptime and reducing latency by 30%.",
        "Integrated Stripe API into a React app, enabling secure and fast transactions, reducing payment failure rate by 40%.",
        "Evaluated operational feasibility and proposed solutions, helping reduce estimation errors and align product direction early in the lifecycle.",
        "Fine-tuned GPT-based LLMs via prompt engineering with OpenAI API, enhancing accuracy of responses by 35% in QA.",
        "Led Agile Scrum ceremonies for 3 cross-functional teams (5–8 members each), delivering 12 major releases ahead of schedule with 98% sprint goal completion rate.",
        "Scaled data processing using Azure Functions, Cosmos DB, and Blob Storage, reducing operational costs by 25% through serverless architecture and optimized indexing strategies.",
        "Automated document workflows with Azure Indexer and Cosmos DB, improving search efficiency by 50% for enterprise-scale applications.",
        "Developed systematic prompt testing frameworks that enhanced GPT-4 output accuracy by 55% across customer support automation workflows.",
      ],
    },

    // {
    //     id: 2,
    //     name: "Creative Handles",
    //     role: "Senior Software Engineer",
    //     fromDate: "May 2022",
    //     toDate: "Oct 2023",
    //     isFullTime: true,
    //     details: [
    //         "Led full-stack development with a frontend focus, delivering modern, responsive web features that boosted user retention.",
    //         "Built scalable APIs using Node.js and GraphQL, designing schemas and queries with Apollo Client to enhance backend performance and flexibility.",
    //         "Developed secure payment forms with React and TypeScript, integrating APIs with custom validation and error handling, improving user experience by 30%.",
    //         "Wrote comprehensive unit and integration tests, reducing post-release bugs by 40% and increasing deployment confidence.",
    //         "Utilized the MERN stack, AWS, REST APIs, and GraphQL to deliver performant and maintainable web applications."
    //     ],
    // },
    {
      id: 2,
      name: "Creative Handles",
      role: "Senior Software Engineer",
      fromDate: "Aug 2022",
      toDate: "Oct 2022",
      isFullTime: true,
      details: [
        "Led full-stack development with a frontend focus, delivering modern, responsive web features that boosted user retention.",
        "Built scalable APIs using Node.js and GraphQL, designing schemas and queries with Apollo Client to enhance backend performance and flexibility.",
        "Developed secure payment forms with React and TypeScript, integrating APIs with custom validation and error handling, improving user experience by 30%.",
        "Wrote comprehensive unit and integration tests, reducing post-release bugs by 40% and increasing deployment confidence.",
        "Utilized the MERN stack, AWS, REST APIs, and GraphQL to deliver performant and maintainable web applications.",
        "Expertise in Git version control, implementing branching strategies and workflows that reduced merge conflicts by 30%.",
        "Implemented CI/CD pipelines (GitHub Actions/Jenkins) automating 90% of deployments, reducing release cycles from days to hours.",
        "Optimized frontend build pipelines using Webpack and Babel, reducing bundle sizes by 40% and improving page load performance by 30%.",
        "Applied Next.js SSR for 8+ production apps, achieving 95+ Lighthouse scores and improving SEO traffic by 60% for content-heavy platforms.",
      ],
    },

    // {
    //     id: 3,
    //     name: "Big Immersive",
    //     role: "React Js Developer",
    //     fromDate: "May 2020",
    //     toDate: "May 2022",
    //     isFullTime: true,
    //     details: [
    //         "Enhanced search UX by integrating Algolia with typo tolerance, autocomplete, and faceting, boosting user engagement by 25%.",
    //         "Built real-time notification features using WebSockets, improving user responsiveness and interaction rates.",
    //         "Integrated Sumsub’s KYC service into VIRTUA, automating identity verification and reducing manual review time by 60%.",
    //         "Improved app performance through code splitting, reduced re-renders, and reusable components, cutting load time by 40%.",
    //         "Led bi-weekly peer programming sessions, sharing best practices and promoting a culture of continuous learning."
    //     ],
    // },
    {
      id: 3,
      name: "Big Immersive",
      role: "React Js Developer",
      fromDate: "May 2021",
      toDate: "May 2022",
      isFullTime: true,
      details: [
        "Enhanced search UX by integrating Algolia with typo tolerance, autocomplete, and faceting, boosting user engagement by 25%.",
        "Built real-time notification features using WebSockets, improving user responsiveness and interaction rates.",
        "Containerized 20+ microservices using Docker and orchestrated with Kubernetes, improving deployment frequency by 5x while reducing cloud costs by 35%.",
        "Built AI-augmented UI components (React) that increased user trust scores by 30% by making model decisions explainable and editable.",
        "Integrated Sumsub’s KYC service into VIRTUA, automating identity verification and reducing manual review time by 60%.",
        "Improved app performance through code splitting, reduced re-renders, and reusable components, cutting load time by 40%.",
        "Led bi-weekly peer programming sessions, sharing best practices and promoting a culture of continuous learning.",
        "Engineered comprehensive test suites using Jest (unit) and Cypress (E2E), achieving 95% test coverage and reducing production bugs by 60%.",
      ],
    },
    // {
    //     id: 4,
    //     name: "Allshore Talent",
    //     role: "Software Engineer",
    //     fromDate: "Aug 2019",
    //     toDate: "April 2020",
    //     isFullTime: true,
    //     details: [
    //         "Managed complex app states using Redux with Thunk and Saga, improving UI responsiveness and maintainability.",
    //         "Customized Material-UI themes to align with brand identity, enhancing UI consistency across components.",
    //         "Streamlined CI/CD workflows using Git and GitHub, accelerating development and deployment cycles.",
    //         "Implemented JWT-based user authentication and session management with cookies and local storage, boosting security and performance.",
    //     ],
    // },
    {
      id: 4,
      name: "Allshore Talent",
      role: "Software Engineer",
      fromDate: "Jan 2019",
      toDate: "May 2021",
      isFullTime: true,
      details: [
        "Architected responsive frameworks supporting 100+ device breakpoints, improving mobile conversion rates by 22% for e-commerce platforms.",
        "Managed complex app states using Redux with Thunk and Saga, improving UI responsiveness and maintainability.",
        "Customized Material-UI themes to align with brand identity, enhancing UI consistency across components.",
        "Streamlined CI/CD workflows using Git and GitHub, accelerating development and deployment cycles.",
        "Worked on JWT-based user authentication and session management with cookies and local storage, boosting security and performance.",
        "Established standardized code review processes that reduced production defects by 35% and boosted onboarding time for new developers by 50%.",
        "Built accessible component libraries (ARIA, keyboard nav) adopted company-wide, decreasing screen reader UX issues by 80% in user testing.",
      ],
    },
  ];

  const expVariants: Variants = {
    offscreen: {
      y: 30,
      opacity: 0,
    },
    onscreen: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.3,
        delay: 0.3,
      },
    },
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
                      work.id === selectedWork.id
                        ? " text-primary"
                        : "text-Slate"
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
                    {selectedWork.toDate}{" "}
                    {!selectedWork.isFullTime && (
                      <>
                        <span className="mx-3">•</span>
                        <span className="normal-case ">Part-time</span>
                      </>
                    )}
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
