import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, A11y } from "swiper";

import { ButtonNext, ButtonPrev } from "./swiperButton";
import SliderItem from "./sliderItem/SliderItem";

import "swiper/css";
import "swiper/css/pagination";

import styles from "./Slider.module.scss";

const Slider: React.FC = () => {
  const [width, setWidth] = useState(window.innerWidth);
  const mobileSlider = width < 768;

  useEffect(() => {
    const handleResize = () => {
      setWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
  }, []);

  return (
    <Swiper
      className={styles.container}
      modules={[Pagination, A11y]}
      spaceBetween={17}
      slidesPerView={mobileSlider ? 1 : 4}
      pagination={{ clickable: true }}
    >
      <div className={styles.containerTitle}>
        <h2 className={styles.title}>
          6 Reasons {""}
          <span className={styles.span}>
            to Use Plerdy Data for a Website Usability Audit
          </span>
        </h2>
        <div className={styles.containerButton}>
          <ButtonPrev />
          <ButtonNext />
        </div>
      </div>

      <SwiperSlide>
        <SliderItem
          text="Our team has developed a powerful tool to audit website content – a heatmap that features more than 100 reports for e-marketers and business owners."
          title="You will benefit from our SaaS marketing product"
          sequence={1}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          text="The Plerdy team has rich experience in auditing, analyzing, and improving eCommerce websites to boost their conversion rates. So we are well aware of all the weak spots of eCommerce websites and know what data you need to run a usability audit of your website."
          title="We have 10+ years of experience in digital marketing"
          sequence={2}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          text="Thanks to the data gathered with the Plerdy heatmap about your website visitors’ behavior, you can generate hypotheses that potentially explain which functional flaws and problems are causing a low conversion on your website and how."
          title="We enable generating hypotheses about what leads to low website conversions"
          sequence={3}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          text="Some services disregard such an important aspect as the clickability analysis of the dynamic elements when UX auditing, including drop-down menu, pop-up, and slider. However, thanks to the unique Plerdy auditing functionality, you will receive this information."
          title="The analysis of the dynamic elements of the website"
          sequence={4}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          text="In some areas, websites generate more than 60% of the traffic from their mobile versions, so it would be unwise not to audit the behavior of mobile users. With the Plerdy heatmap, you can run a UX auditing analysis separately for the desktop and mobile versions of your website."
          title="The analysis of both the desktop and mobile versions of the website"
          sequence={5}
        />
      </SwiperSlide>
      <SwiperSlide>
        <SliderItem
          text="In addition to the Plerdy heatmap data, you also get the audit data from Google Analytics. Thus, you can analyze the sources of traffic and its quality to be able to pinpoint any problems. For example, fixing usability bugs alone will not improve conversion if the website gets mistargeted traffic."
          title="Audit data analysis with Google Analytics"
          sequence={6}
        />
      </SwiperSlide>
    </Swiper>
  );
};

export default Slider;
