import { useState, useEffect, useLayoutEffect, useRef } from "react";
import "./header.css";
import hamburgerImg from "../../assets/header/hamburger.png";
import closeImg from "../../assets/header/close.webp";
import arrowUpRight from "../../assets/ArrowUpRight.webp";
import arrowRight from "../../assets/ArrowRight.png";
import arrowRightWhite from "../../assets/ArrowRightWhite.png";

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
    <div className={`bg-dark ${showLinks ? "vh-100" : ""}`}>
      <div className="container">
        <div className={`headerInnerWrapper ${showLinks ? "show  py-3" : ""}`}>
          <div className="pb-4">
            {links.map((item, index) => {
              return (
                <a
                  key={index}
                  href={item.href}
                  className={`${
                    showLinks ? "text-white" : "text-black"
                  } headerInnerWrapper-link`}
                  onClick={() => setShowLinks(false)}
                >
                  <div className="links-wrapper d-flex align-items-center justify-content-between my-2">
                    <div className="links-text">{item.label}</div>
                    <div
                      className={`${
                        showLinks ? "border-white" : "border-black"
                      } links-arrow`}
                    >
                      <img
                        src={arrowRightWhite}
                        className="img-fluid"
                        alt="arrow-right"
                        loading="lazy"
                        decoding="async"
                      />
                    </div>
                  </div>
                </a>
              );
            })}
          </div>
          <div className="row gy-3 headerInnerWrapper-bottomcontent border-top-gray pt-2 align-items-center">
            <div className="col-lg-12">
              <div className="text-gray-2 bottomcontent-title">Follow me.</div>
              <div className="row gy-3 mt-lg-4 mt-2">
                <a
                  href="https://www.linkedin.com/in/chirag-berde-060450253/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-lg-3 col-6 text-white text-uppercase"
                >
                  LinkedIn{" "}
                  <img
                    loading="lazy"
                    decoding="async"
                    src={arrowUpRight}
                    alt="arrowUpRights"
                    className="img-fluid"
                  />
                </a>
                <a
                  href="https://github.com/chirag-berde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-lg-3 col-6 text-white text-uppercase"
                >
                  GitHub{" "}
                  <img
                    src={arrowUpRight}
                    alt="arrowUpRights"
                    className="img-fluid"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href="https://www.youtube.com/@ChiragBerde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-lg-3 col-6 text-white text-uppercase"
                >
                  YouTube{" "}
                  <img
                    src={arrowUpRight}
                    alt="arrowUpRights"
                    className="img-fluid"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
                <a
                  href="https://www.instagram.com/chirag.berde"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="col-lg-3 col-6 text-white text-uppercase"
                >
                  Instagram{" "}
                  <img
                    src={arrowUpRight}
                    alt="arrowUpRights"
                    className="img-fluid"
                    loading="lazy"
                    decoding="async"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const Header = () => {
  const [showLinks, setShowLinks] = useState(false);
  const [bgVisible, setBgVisible] = useState(false);
  const [headerHidden, setHeaderHidden] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);
  const headerWrapperRef = useRef(null);
  const previousScrollY = useRef(0);

  useLayoutEffect(() => {
    const headerWrapper = headerWrapperRef.current;
    if (!headerWrapper) return;

    const updateHeaderHeight = () => {
      const borderBottomWidth = parseFloat(
        getComputedStyle(headerWrapper).borderBottomWidth,
      );
      setHeaderHeight(
        headerWrapper.getBoundingClientRect().height - borderBottomWidth,
      );
    };

    updateHeaderHeight();
    const resizeObserver = new ResizeObserver(updateHeaderHeight);
    resizeObserver.observe(headerWrapper);

    return () => resizeObserver.disconnect();
  }, []);

  useLayoutEffect(() => {
    if (showLinks) {
      setBgVisible(true);
    } else {
      const timeout = setTimeout(() => setBgVisible(false), 500);
      return () => clearTimeout(timeout);
    }
  }, [showLinks]);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (showLinks || currentScrollY <= 80) {
        setHeaderHidden(false);
      } else if (currentScrollY > previousScrollY.current + 3) {
        setHeaderHidden(true);
      } else if (currentScrollY < previousScrollY.current - 3) {
        setHeaderHidden(false);
      }

      previousScrollY.current = currentScrollY;
    };

    previousScrollY.current = window.scrollY;
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, [showLinks]);

  const handleShowLinks = () => {
    setShowLinks((prev) => !prev);
  };
  return (
    <>
      {bgVisible && (
        <div
          aria-hidden="true"
          className="header-placeholder"
          style={{ height: `${headerHeight}px` }}
        />
      )}
      <nav
        className={`sticky-header ${
          headerHidden && !showLinks ? "header-hidden" : ""
        } ${bgVisible ? "bg-dark position-fixed w-100" : ""}`}
      >
        <div className="container">
          <div
            ref={headerWrapperRef}
            className={`${
              showLinks ? "border-bottom-gray" : ""
            } header-wrapper d-flex justify-content-between py-4 align-items-center`}
          >
            <div className="header-leftcolumn">
              <span className="text-gray-2">C</span>
              <span className={bgVisible ? "text-white" : "text-black"}>
                B
              </span>
            </div>
            <div className="header-rightcolumn d-flex gap-3 align-items-center">
              <div className="header-button">
                <a
                  href="https://www.linkedin.com/in/chirag-berde-060450253/"
                  className={
                    `image-hover-button ${
                      bgVisible
                        ? "text-white border-white"
                        : "text-black border-black"
                    }`
                  }
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Let's Connect{" "}
                  <span className="button-arrow" aria-hidden="true">
                    <img
                      src={bgVisible ? arrowRightWhite : arrowRight}
                      className="button-arrow-default"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                    <img
                      src={arrowRightWhite}
                      className="button-arrow-hover"
                      alt=""
                      loading="lazy"
                      decoding="async"
                    />
                  </span>
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
                  width={20}
                  height={20}
                />
              </div>
            </div>
          </div>
        </div>
        <HeaderInner showLinks={showLinks} setShowLinks={setShowLinks} />
      </nav>
    </>
  );
};

export default Header;
