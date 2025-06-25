import React from "react";
import Container from "./Container";
import Button from "./Button";
import { motion } from "framer-motion";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <section id="home" className="flex items-center pb-28 min-h-screen">
      <Container>
        <div className="mt-28 ">
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.2 }}
            className="xl:text-lg md:text-base text-sm text-primary tracking-widest"
          >
            Greetings! I’m
          </motion.p>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.3 }}
            className="text-LightestSlate xl:text-6xl md:text-5xl text-3xl font-bold lg:mb-4 mb-2 xl:mt-6 mt-3"
          >
            Azeem Aleem.
          </motion.h1>
          <motion.h1
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.4 }}
            className="xl:text-6xl md:text-5xl text-3xl font-bold text-Slate"
          >
            I turn complex challenges into seamless digital solutions
          </motion.h1>
          <motion.p
            initial={{ y: 28, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.3, delay: 2.5 }}
            className="text-Slate md:mt-9 mt-6 md:mb-12 mb-8 md:text-[17px] text-[15px] md:leading-7 leading-6 max-w-2xl w-full pr-7"
          >
            I build custom web applications using the MERN stack, designed to
            meet unique client needs — from streamlined dashboards to scalable
            platforms. My goal is to deliver clean, maintainable code that helps
            businesses launch faster and grow with confidence.
          </motion.p>
          <Link
            activeClass="active"
            to="contact"
            spy={true}
            smooth={true}
            duration={500}
          >
            {/* <span>
              <motion.div
                initial={{ y: 28, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.3, delay: 2.6 }}
              >
                <Button text="Contact Me" link="/" />
              </motion.div>
            </span> */}
            Testing
          </Link>
        </div>
      </Container>
    </section>
  );
};

export default Home;
