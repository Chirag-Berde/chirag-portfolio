import { motion } from "framer-motion";
import "./works.css";
import movieClub from "../../assets/works/movie-club.webp";
import resumeBuilder from "../../assets/works/resume-builder.webp";
import arrowRight from "../../assets/ArrowRight.png";

const worksData = [
  {
    img: { src: movieClub, alt: "" },
    title: "Movie Club",
    subtitle: "Web App",
    href: "https://movie-clubb.netlify.app/",
  },
  {
    img: { src: resumeBuilder, alt: "" },
    title: "Resume Builder",
    subtitle: "Web App",
    href: "https://resume-builder-bychirag.netlify.app/",
  },
];

const Works = () => {
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

  const bottomVariant = {
    hidden: { opacity: 0, y: 80 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="works" id="works">
      <div className="container">
        <div className="works-title-wrapper d-flex justify-content-between mb-lg-5 mb-4">
          <motion.div
            className="works-title-leftcolumn"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h2 className="works-title-text text-black">Popular Works</h2>
          </motion.div>

          <motion.div
            className="works-title-rightcolumn d-lg-block d-none"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href="https://github.com/chirag-berde"
              target="_blank"
              rel="noopener noreferrer"
              className="border-black text-black"
            >
              View all works{" "}
              <img
                src={arrowRight}
                className="img-fluid"
                alt="arrow-right"
                loading="lazy"
                decoding="async"
              />
            </a>
          </motion.div>
        </div>

        <div className="works-data">
          {worksData.map((item, index) => (
            <a
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
            >
              <div className="works-data-wrapper mb-3">
                <motion.div
                  className="works-data-img"
                  variants={bottomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.2 }}
                >
                  <img
                    src={item.img.src}
                    alt={item.img.alt}
                    className="img-fluid w-100"
                    loading="lazy"
                    decoding="async"
                  />
                </motion.div>

                <motion.div
                  className="works-data-content-wrapper d-flex justify-content-between mt-3 mb-5"
                  variants={bottomVariant}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  transition={{ delay: index * 0.3 }}
                >
                  <div className="works-data-content">
                    <div className="works-data-title text-black">
                      {item.title}
                    </div>
                    <div className="works-data-subtitle text-gray-2">
                      {item.subtitle}
                    </div>
                  </div>

                  <div className="works-data-cta">
                    <span className="works-data-cta-arow border-black d-inline-block text-black">
                      <img
                        src={arrowRight}
                        className="img-fluid"
                        alt="arrow-right"
                        loading="lazy"
                        decoding="async"
                      />
                    </span>
                  </div>
                </motion.div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Works;
