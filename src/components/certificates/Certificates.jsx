import { motion } from "framer-motion";
import "./certificates.css";
import upArrow from "../../assets/up-arrow.webp";

const CertificatesData = [
  {
    title: "Full Stack Web Development Certification",
    issuer: "AlmaBetter",
    year: "2023",
    href: "https://verified.sertifier.com/en/verify/25411013940939/?ref=email",
  },
  {
    title: "Resume Builder",
    issuer: "AlmaBetter",
    year: "2023",
    href: "https://verified.sertifier.com/en/verify/10604298423500/",
  },
  {
    title: "Advanced React & Frontend Architecture",
    issuer: "AlmaBetter",
    year: "2023",
    href: "https://verified.sertifier.com/en/verify/00666953816224/",
  },
  {
    title: "Data Structures & Algorithms with JavaScript",
    issuer: "AlmaBetter",
    year: "2023",
    href: "https://verified.sertifier.com/en/verify/51214479390084/",
  },
  {
    title: "JavaScript Programming Essentials",
    issuer: "Udemy",
    year: "2023",
    href: "https://www.udemy.com/certificate/UC-9bc85741-0081-4d02-a0e4-5eccdeeb1779/?utm_campaign=email&utm_source=sendgrid.com&utm_medium=email",
  },
];

const Certificates = () => {
  // Animation variants
  const titleVariant = {
    hidden: { opacity: 0, x: -100 },
    visible: {
      opacity: 1,
      x: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  const containerVariant = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.2, // delay between each certificate
      },
    },
  };

  const itemVariant = {
    hidden: { opacity: 0, y: 60 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut" },
    },
  };

  return (
    <section className="certificates" id="certificates">
      <div className="container">
        <div className="row gap-4 gap-lg-0">
          {/* Title - slide from left */}
          <motion.div
            className="col-lg-4"
            variants={titleVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            <h4 className="certificates-title text-black">
              Certificates & Recognition
            </h4>
          </motion.div>

          {/* Certificates list with stagger animation */}
          <motion.div
            className="col-lg-8"
            variants={containerVariant}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            {CertificatesData.map((item, index) => (
              <motion.a
                href={item.href}
                className="certificates-content d-flex justify-content-between align-items-center"
                key={index}
                variants={itemVariant}
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="certificates-content-leftcolumn">
                  <div className="certificates-content-title text-black">
                    {item.title}
                  </div>
                  <div className="certificates-content-issuer text-black">
                    Issuer :- {item.issuer}
                  </div>
                  <div className="certificates-content-year text-black-2">
                    Year :- {item.year}
                  </div>
                </div>
                <div className="certificates-content-rightcolumn">
                  <img
                    src={upArrow}
                    alt="uparrow"
                    loading="lazy"
                    decoding="async"
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Certificates;
