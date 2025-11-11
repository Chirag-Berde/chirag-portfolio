import { useState, useEffect } from "react";
import "./header.css";
import hamburgerImg from "../../assets/header/hamburger.webp";
import closeImg from "../../assets/header/close.webp";

const HeaderInner = ({ showLinks, setShowLinks }) => {
  const links = [
    {
      label: "Home",
      href: "",
    },
    {
      label: "Works",
      href: "#works",
    },
    {
      label: "About Me",
      href: "#about",
    },
    {
      label: "Certificates & Recognition",
      href: "#certificates",
    },
    {
      label: "Youtube",
      href: "#youtube",
    },
  ];
  return (
    <div
      className={`container-fluid position-absolute bg-dark ${
        showLinks ? "vh-100" : ""
      }`}
    >
      <div className="container">
        <div className={`headerInnerWrapper ${showLinks ? "show  py-4" : ""}`}>
          <div className="">
            {links.map((item) => {
              return (
                <a
                  href={item.href}
                  className={`${
                    showLinks ? "text-white" : "text-black"
                  } headerInnerWrapper-link`}
                  onClick={() => setShowLinks(false)}
                >
                  <div className="links-wrapper d-flex align-items-center justify-content-between my-2 my-lg-0">
                    <div className="links-text">{item.label}</div>
                    <div
                      className={`${
                        showLinks ? "border-white" : "border-black"
                      } links-arrow`}
                    >
                      &#8594;
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);

  useEffect(() => {
    if (showLinks) {
      setBgVisible(true);
    } else {
      const timeout = setTimeout(() => setBgVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [showLinks]);

  const handleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };
  return (
    <nav className={`${bgVisible ? "bg-dark" : ""} position-relative`}>
      <div
        className={`${showLinks ? "border-light border-bottom" : ""} container`}
      >
        <div className="header-wrapper d-flex justify-content-between py-4 align-items-center">
          <div className="header-leftcolumn">
            <span className="text-gray-2">C</span>
            <span className={bgVisible ? "text-white" : "text-black"}>B</span>
          </div>
          <div className="header-rightcolumn d-flex gap-3 align-items-center">
            <div className="header-button d-md-block d-none">
              <a
                href="https://www.linkedin.com/in/chirag-berde-060450253/"
                className={
                  bgVisible
                    ? "text-white border-white"
                    : "text-black border-black"
                }
                target="_blank"
                rel="noopener noreferrer"
              >
                Let's Connect &#8594;
              </a>
            </div>
            <div
              className={`${
                bgVisible ? "border-white" : "border-black"
              } hamburger`}
              onClick={handleShowLinks}
            >
              <img
                src={bgVisible ? closeImg : hamburgerImg}
                alt="hamburger"
                loading="lazy"
                decoding="async"
              />
            </div>
          </div>
        </div>
      </div>
      <HeaderInner showLinks={showLinks} setShowLinks={setShowLinks} />
    </nav>
  );
};

export default Header;
