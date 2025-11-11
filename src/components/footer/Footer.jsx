import "./footer.css";

const Footer = () => {
  const footerSocialMedia = [
    {
      title: "LinkedIn",
      href: "https://www.linkedin.com/in/chirag-berde-060450253/",
    },
    {
      title: "GitHub",
      href: "https://github.com/chirag-berde",
    },
    {
      title: "YouTube",
      href: "https://www.youtube.com/@ChiragBerde",
    },
    {
      title: "Twitter",
      href: "https://x.com/berdechirag",
    },
  ];

  return (
    <footer className="footer" id="footer">
      <div className="container">
        <div className="footer-logo">
          <span className="text-gray-2">C</span>
          <span className="text-white">B</span>
        </div>
        <div className="footer-description text-white mt-2">
          Crafting emotional digital experiences through clean code and
          thoughtful design.
        </div>
        <div className="row my-lg-5 my-2 gy-3 ">
          {footerSocialMedia.map((item, index) => {
            return (
              <div className="col-lg-3 col-6" key={index}>
                <a
                  href={item.href}
                  target="_blank"
                  className="footer-social-icons text-white text-center border-gray-2 w-100"
                  rel="noopener noreferrer"
                >
                  {item.title}
                </a>
              </div>
            );
          })}
        </div>
        <div className="text-center text-gray mt-lg-3 mt-5">
          &copy; {new Date().getFullYear()} All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
