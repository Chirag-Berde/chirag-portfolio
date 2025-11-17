import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./herobanner.css";
import chiragCV from "../../assets/chirag-berde-cv.pdf";
import arrowRightWhite from "../../assets/ArrowRightWhite.png";
import arrowRight from "../../assets/ArrowRight.png";

const HeroBanner = () => {
  const [showToast, setShowToast] = useState(false);
  const [arrowSrc, setArrowSrc] = useState(arrowRightWhite);

  const handleDownload = () => {
    setShowToast(true);

    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

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

  const toastVariants = {
    hidden: { y: -50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.4, ease: "easeOut" },
    },
    exit: {
      y: -50,
      opacity: 0,
      transition: { duration: 0.3, ease: "easeIn" },
    },
  };

  return (
    <section className="herobanner" id="heroBanner">
      <div className="container">
        <div
          className={`toast-container position-fixed top-0 start-50 translate-middle-x p-3`}
          style={{ zIndex: 1055 }}
        >
          <AnimatePresence>
            {showToast && (
              <motion.div
                className="toast align-items-center bg-black border-0 show rounded"
                role="alert"
                aria-live="assertive"
                aria-atomic="true"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={toastVariants}
              >
                <div className="d-flex px-lg-3">
                  <div className="toast-body text-white">
                    CV downloaded successfully!
                  </div>
                  <button
                    type="button"
                    className="btn-close btn-close-white me-2 m-auto"
                    onClick={() => setShowToast(false)}
                  ></button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        <motion.div
          className="herobanner-name"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8 }}
        >
          Hello! I'm Chirag Berde.
        </motion.div>

        <motion.h1
          className="herobanner-title mt-3"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Designing digital product with emphasis on{" "}
          <span className="text-gray-2">visual design</span>
        </motion.h1>

        <div className="herobanner-additional-content mt-lg-5 mt-3 d-flex justify-content-between align-items-lg-center flex-lg-row flex-column-reverse gap-3">
          <motion.div
            className="herobanner-additional-content-cta"
            variants={leftVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <a
              href={chiragCV}
              className="border-black text-black"
              target="_blank"
              rel="noopener noreferrer"
              download
              onClick={handleDownload}
              onMouseEnter={() => setArrowSrc(arrowRight)}
              onMouseLeave={() => setArrowSrc(arrowRightWhite)}
            >
              Download CV{" "}
              <img
                src={arrowSrc}
                className="img-fluid"
                alt="arrow-right"
                loading="lazy"
                decoding="async"
                height={26}
                width={26}
              />
            </a>
          </motion.div>

          <motion.div
            className="herobanner-additional-content-text"
            variants={rightVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            A multidisciplinary developer harnessing the power of <br /> design
            to achieve online goals.
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroBanner;
