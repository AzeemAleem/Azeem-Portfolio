import React, { useRef, useEffect } from "react";
import Container from "./Container";
import Heading from "./Heading";
import { motion, Variants } from "framer-motion";
import about from "../../public/images/about.png";
import Image from "next/image";
import { Icon } from "@iconify/react";

const About = () => {
  const cardVariants: Variants = {
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

  const stack = [
    {
          name:"Frontend Stack:",
      skills:[
    "React.js, Next js",
    "TypeScript, JavaScript",
    "Redux (Redux-Saga, Redux-Thunk)",
    "HTML5, CSS3 (SCSS, SASS)",
    "Styled Components",
    "Material UI, Semantic UI",
    "Ant Design",
    "React Bootstrap, Tailwind CSS",
     "Figma to react",
      ]
    },
    {
      name:"Backend Stack:",
      skills:[
        "Node js",
        "Express js",
        "Mongo DB",
        "GraphQL",
        "Rest API",
        "Web Sockets",
      ]
    },
    {
      name:"Cloud & DevOps:",
      skills:[
        "EC2 Instance",
        "S3, SES",
        "CloudFront",
        "Amplify",
        "AWS Cognito",
        "Lambda Functions",
        "RDS",
        "QuickSight",
      ]
    },
    {
      name:"Analytics & Integrations:",
      skills:[
        "Gleap",
        "HubSpot",
        "Hotjar",
        "Clicky",
        "Google Analytics",
      ]
    }

  ]

  return (
    <section
      id="about"
      style={{
        backgroundImage: "url(/images/about.png)",
        backgroundPosition: "center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
      }}
      className="about-poster relative py-10 max-w-6xl w-full mx-auto"
    >
      <Container>
        <div className="max-w-4xl mx-auto relative z-10">
          <motion.div
            initial="offscreen"
            whileInView="onscreen"
            viewport={{ once: true }}
            variants={cardVariants}
          >
            <Heading headingNumber={1} headingText="About Me" />
          </motion.div>
          <div className="">
            <div className="flex flex-col gap-5 my-5 text-Slate md:text-base text-sm leading-normal ">
              <motion.div
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Thanks for visiting my profile. I'm a Microsoft Certified Solutions Associate. I have been working as a Senior Software Enginner for more than 5 years and have rich experience working on React js, Node Js, Next js, AWS, GraphQl, Relational and Non relation (MongoDB) database. <br /> <br /> I turn complex challenges into seamless digital solutions. With extensive experience to design scalable architecture, I am managing cloud infrastructure on AWS, ensuring seamless integration and scalability. I completed more than 50 web projects including Blockchain, Ecommerce, Accounts and Corporate portals etc.  I focused on delivering high-quality, maintainable code.
                <br /> <br />
                <p className="text-center text-[#c7d1f0] text-lg mb-4">Technologies I’m Proficient In</p>
                {stack.map((item) => (
                  <div className="" key={item.name}>
                    <h1 className="mt-4 text-[#61f8d4]">{item.name}</h1>
                <div className="grid md:grid-cols-3 grid-cols-2 mt-4 gap-2">
                  {item.skills.map((name, index) => <div key={index} className="flex items-center gap-2">
                      <Icon
                        icon="mdi:arrow-compass"
                        className="pt-1.5 transorm rotate-90 text-[15px] text-primary "
                      />
                    {name}
                  </div> )}
                </div>
                  </div>
                ))}
              </motion.div>
              {/* <motion.p
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true }}
                variants={cardVariants}
              >
                Fast-forward to today, and I’ve had the privilege of working at an advertising agency, a start-up and a student-led design studio. My main focus these days is building accessible, inclusive products and digital experiences at the Dev Corporate for a variety of clients.
              </motion.p> */}
              {/* <p>
                Here are a few technologies I’ve been working with recently:
              </p> */}
            </div>
            {/* <div>
              <Image src={about} alt='about' className='custom-img' />
            </div> */}
          </div>
        </div>
      </Container>
    </section>
  );
};

export default About;
