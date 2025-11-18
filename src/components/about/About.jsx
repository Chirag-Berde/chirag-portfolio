import { motion } from "framer-motion";
import "./about.css";
import arrowRight from "../../assets/ArrowRight.png";
import arrowRightWhite from "../../assets/ArrowRightWhite.png";
import { useState } from "react";

const About = () => {
  const [arrowSrc, setArrowSrc] = useState(arrowRight);

  const leftVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const rightVariant = {
    hidden: { opacity: 0, x: 100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="about" id="about">
      <div className="container">
        <div className="row align-items-end">
          {/* LEFT SIDE CONTENT */}
          <motion.div
            className="col-lg-9"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <div className="about-wrapper">
              <h3 className="about-title text-black">
                Bridging design and development to craft human-centered digital
                experiences.
              </h3>

              <p className="about-description text-black-2 my-4">
                Concentrate on your primary objective which is expanding your
                business, and leave it to me to ensure that your business is
                efficiently portrayed in the digital realm and distinguishes
                itself from the rivals.
              </p>

              <ul className="about-lists ps-0 mb-4 d-lg-none d-block">
                <li className="text-gray-2 mb-3">UI/UX</li>
                <li className="text-gray-2 mb-3">Web Application</li>
                <li className="text-gray-2 mb-3">Creative Interfaces</li>
                <li className="text-gray-2 mb-3">Responsive Design</li>
                <li className="text-gray-2">Frontend Development</li>
              </ul>

              <div className="about-cta">
                <a
                  href="https://github.com/chirag-berde"
                  className="border-black text-black"
                  target="_blank"
                  rel="noopener noreferrer"
                  onMouseEnter={() => setArrowSrc(arrowRightWhite)}
                  onMouseLeave={() => setArrowSrc(arrowRight)}
                >
                  About Me{" "}
                  <img
                    src={arrowSrc}
                    className="img-fluid"
                    alt="arrow-right"
                    loading="lazy"
                    decoding="async"
                    width={26}
                    height={26}
                  />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            className="col-lg-3 d-lg-block d-none"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <ul className="about-lists">
              <li className="text-gray-2 mb-3">UI/UX</li>
              <li className="text-gray-2 mb-3">Web Application</li>
              <li className="text-gray-2 mb-3">Creative Interfaces</li>
              <li className="text-gray-2 mb-3">Responsive Design</li>
              <li className="text-gray-2">Frontend Development</li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
