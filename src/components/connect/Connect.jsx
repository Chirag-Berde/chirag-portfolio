import { motion } from "framer-motion";
import "./connect.css";

const Connect = () => {
  const bottomVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="connect">
      <div className="container">
        <motion.div
          className="text-center"
          variants={bottomVariant}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
        >
          <div className="connect-subtitle text-black">Have an idea?</div>
          <h5 className="text-black connect-title my-4">
            Let's rock <span className="text-gray-2">with me</span>
          </h5>
          <div className="connect-email">
            <a
              className="text-black"
              href="https://mail.google.com/mail/?view=cm&fs=1&to=chirag.berde@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              chirag.berde@gmail.com
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Connect;
