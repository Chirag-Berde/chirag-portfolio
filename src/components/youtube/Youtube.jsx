import React, { useRef, useState } from "react";
import "./youtube.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-coverflow";
import {
  Navigation,
  Pagination,
  Autoplay,
  EffectCoverflow,
} from "swiper/modules";
import { motion, useInView } from "framer-motion";
import arrowRight from "../../assets/ArrowRight.png";
import arrowRightWhite from "../../assets/ArrowRightWhite.png";

const leftToRight = {
  hidden: { opacity: 0, x: -50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const rightToLeft = {
  hidden: { opacity: 0, x: 50 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8, ease: "easeOut" } },
};

const bottomToTop = {
  hidden: { opacity: 0, y: 100 },
  visible: { opacity: 1, y: 0, transition: { duration: 1, ease: "easeOut" } },
};

const Youtube = () => {
  const [arrowSrc, setArrowSrc] = useState(arrowRight);

  const youtubeData = [
    {
      title: "Resume Builder | Capstone Project | React | Redux | MaterialUI",
      img: {
        src: "https://i.ytimg.com/vi/nfnIQ1w5vNI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAYfP1Kz2uTW9F_7QUluByxoCR9uQ",
        alt: "Resume Builder",
      },
      link: "https://www.youtube.com/watch?v=nfnIQ1w5vNI",
    },
    {
      title:
        "E-commerce Website | React Js | React Bootstrap | Async Await | Fetch Api",
      img: {
        src: "https://i.ytimg.com/vi/m5BBogYexXQ/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAnEl_UyyG8B9jji1VNgJ2Y4csKMw",
        alt: "Ecommerce",
      },
      link: "https://www.youtube.com/watch?v=m5BBogYexXQ",
    },
    {
      title:
        "Todo List App Using React Js | React UseEffect | State Management",
      img: {
        src: "https://i.ytimg.com/vi/Wsp3cmeEClM/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAdHEzFkvVQqeP6xd4wrIdehxZasg",
        alt: "Todo",
      },
      link: "https://www.youtube.com/watch?v=Wsp3cmeEClM",
    },
    {
      title: "Responsive Netflix Clone Using Bootstrap 5 & JavaScript",
      img: {
        src: "https://i.ytimg.com/vi/UGsBQ7gR54c/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB809f6Hbw7H7mjycCEcY03RGH7UA",
        alt: "Netflix",
      },
      link: "https://www.youtube.com/watch?v=UGsBQ7gR54c",
    },
    {
      title: "Instagram Login Page Using Bootstrap 5 | Custom CSS",
      img: {
        src: "https://i.ytimg.com/vi/UOC0VUMKMEA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDbv-Hmo7cWl43vRqpwVXniw1A5EQ",
        alt: "Instagram Login Page",
      },
      link: "https://www.youtube.com/watch?v=UOC0VUMKMEA",
    },
    {
      title:
        "Building a Responsive News Website with Async/Await & Fetch API! 💡💻",
      img: {
        src: "https://i.ytimg.com/vi/GauceUv5HXo/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLCjjP3br7se4S4h6DH4WfxxYO-HNg",
        alt: "News Website",
      },
      link: "https://www.youtube.com/watch?v=GauceUv5HXo",
    },
    {
      title: "Fully Responsive LinkedIn Clone Using Bootstrap 5 | Custom CSS",
      img: {
        src: "https://i.ytimg.com/vi/DwVCmRRnEvU/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDenoYYvu1mAOyXta8UzSD4nPioVA",
        alt: "Linkedin Clone",
      },
      link: "https://www.youtube.com/watch?v=DwVCmRRnEvU",
    },
    {
      title:
        "Build a Fully Responsive Pepsi.com Clone with Bootstrap 5 | Custom CSS",
      img: {
        src: "https://i.ytimg.com/vi/qwO-342zJIA/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB2ayArWfktijPrX4hdDe-DyFi_rw",
        alt: "Pepsi clone",
      },
      link: "https://www.youtube.com/watch?v=qwO-342zJIA",
    },
    {
      title:
        "Fully Responsive Google Meet UI using HTML5, CSS3, Bootstrap 5, and Custom CSS! 🚀",
      img: {
        src: "https://i.ytimg.com/vi/2vkeTGKoGCI/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDBaV9sXxNYGJ1T_zEnAoNOmeOo3w",
        alt: "Google Meet",
      },
      link: "https://www.youtube.com/watch?v=2vkeTGKoGCI",
    },
    {
      title:
        "Build an Amazon Prime Video Clone with Bootstrap 5 and JS | Fully Responsive | Custom CSS Magic! 💻🎥",
      img: {
        src: "https://i.ytimg.com/vi/NDE7g5sZVRg/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLBkhE9_Gq2wMme4F1Jh6-TFcHs-mg",
        alt: "Amazon Prime Video",
      },
      link: "https://www.youtube.com/watch?v=NDE7g5sZVRg",
    },
    {
      title:
        "How to create fully responsive website using Bootstrap 5 | Custom CSS",
      img: {
        src: "https://i.ytimg.com/vi/Yw-9lDxwjc4/hqdefault.jpg?sqp=-oaymwEnCNACELwBSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLAln-IgG7aRLtCb4cgIPpJsSCdo4g",
        alt: "bootstrap",
      },
      link: "https://www.youtube.com/watch?v=Yw-9lDxwjc4",
    },
  ];

  const swiperRef = useRef(null);
  const isInView = useInView(swiperRef, { amount: 0.3 });
  const [swiperInstance, setSwiperInstance] = useState(null);

  React.useEffect(() => {
    if (swiperInstance) {
      if (isInView) {
        swiperInstance.autoplay.start();
      } else {
        swiperInstance.autoplay.stop();
      }
    }
  }, [isInView, swiperInstance]);

  return (
    <section className="youtube" id="youtube">
      <div className="container">
        <div className="youtube-title-wrapper d-flex justify-content-between mb-lg-5 mb-4">
          <motion.h5
            className="youtube-title-text text-black"
            variants={leftToRight}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
          >
            Youtube
          </motion.h5>

          <motion.a
            href="https://www.youtube.com/@ChiragBerde"
            target="_blank"
            rel="noopener noreferrer"
            className="border-black text-black d-lg-block d-none"
            variants={rightToLeft}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            onMouseEnter={() => setArrowSrc(arrowRightWhite)}
            onMouseLeave={() => setArrowSrc(arrowRight)}
          >
            View all videos{" "}
            <img
              src={arrowSrc}
              className="img-fluid"
              alt="arrow-right"
              loading="lazy"
              decoding="async"
              width={26}
              height={26}
            />
          </motion.a>
        </div>
      </div>
      <motion.div
        variants={bottomToTop}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        ref={swiperRef}
      >
        <Swiper
          onSwiper={setSwiperInstance}
          modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
          effect="coverflow"
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          coverflowEffect={{
            rotate: 30,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: true,
          }}
          navigation
          pagination={{ clickable: true }}
          breakpoints={{
            0: { slidesPerView: 1.5 },
            768: { slidesPerView: 2 },
            992: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
          className="youtube-swiper"
        >
          {youtubeData.map((item, index) => (
            <SwiperSlide key={index}>
              <a
                href={item.link}
                className="youtube-slide-item d-block"
                target="_blank"
                rel="noopener noreferrer"
              >
                <div className="youtube-thumbnail">
                  <img
                    className="img-fluid w-100"
                    src={item.img.src}
                    alt={item.img.alt}
                    loading="lazy"
                    decoding="async"
                  />
                  <div className="youtube-overlay">
                    <div className="youtube-title text-white mb-2 mb-lg-0">
                      {item.title}
                    </div>
                  </div>
                </div>
              </a>
            </SwiperSlide>
          ))}
        </Swiper>
      </motion.div>
    </section>
  );
};

export default Youtube;
