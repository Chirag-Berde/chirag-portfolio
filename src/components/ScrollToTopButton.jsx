import { useState, useEffect } from "react";

const ScrollToTopButton = () => {
  const [visible, setVisible] = useState(false);
  const [overFooter, setOverFooter] = useState(false);

  const toggleVisible = () => {
    const scrolled = document.documentElement.scrollTop;
    setVisible(scrolled > 300);
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisible);
    return () => window.removeEventListener("scroll", toggleVisible);
  }, []);

  useEffect(() => {
    const footer = document.getElementById("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          setOverFooter(entry.isIntersecting);
        });
      },
      { threshold: 0.1 }
    );

    observer.observe(footer);
    return () => observer.disconnect();
  }, []);

  return (
    <button
      onClick={scrollToTop}
      style={{
        position: "fixed",
        right: "0",
        bottom: "0",
        margin: "1rem",
        padding: "0.75rem 1rem",
        backgroundColor: overFooter ? "#ffffff" : "#000000",
        color: overFooter ? "#000000" : "#ffffff",
        border: "none",
        borderRadius: "50%",
        cursor: "pointer",
        boxShadow: "0 2px 8px rgba(0,0,0,0.3)",
        opacity: visible ? 1 : 0,
        pointerEvents: visible ? "auto" : "none",
        transition: "all 0.3s ease",
        zIndex: 12,
      }}
    >
      ↑
    </button>
  );
};

export default ScrollToTopButton;
