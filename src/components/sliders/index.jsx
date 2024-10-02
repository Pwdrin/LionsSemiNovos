import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCoverflow, Navigation, Pagination } from "swiper/modules";
import { useState } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-coverflow";
import "./styles.css";

function Slide() {
  const [slidePerview, setSlidePerView] = useState(1);
  const data = [
    {
      id: "1",
      image:
        "https://www.lionsseminovos.com.br/assets/uploads/nt_home_banners/13855-site-3.png?v=3",
    },
    {
      id: "2",
      image:
        "https://www.lionsseminovos.com.br/assets/uploads/nt_home_banners/19478-site-lojas.jpg?v=3",
    },
    {
      id: "3",
      image:
        "https://www.lionsseminovos.com.br/assets/uploads/nt_home_banners/26467-site-utilitarios--4-.png?v=3",
    },
    {
      id: "4",
      image:
        "https://www.lionsseminovos.com.br/assets/uploads/nt_home_banners/05557-site-vagasss.png?v=3",
    },
  ];

  return (
    <div className="container">
      <Swiper
        modules={[EffectCoverflow, Navigation, Pagination]}
        effect="coverflow"
        slidesPerView={slidePerview}
        pagination={{ clickable: true }}
        navigation
      >
        {data.map((item) => (
          <SwiperSlide key={item.id}>
            <img src={item.image} alt="Slide" className="slide-item" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default Slide;
