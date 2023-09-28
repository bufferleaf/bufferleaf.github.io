import { Fragment, useContext } from "react";

import { Swiper, SwiperSlide } from "swiper/react";
import { context } from "../context/context";
import { newsSlider } from "../sliderProps";

const data = [
  {
    title: "Mini-games i nästa uppdatering",
    img: "assets/img/news/1.jpg",
    tag: "Funktion",
    des: [
      "I nästa uppdatering kommer vi att släppa spel på plattformen. Du kommer kunna tävla mot andra ungdomar och se vem som faktiskt är bäst i din kommun.",
    ],
  },
  {
    title: "Bygg dina egna kartor",
    img: "assets/img/news/2.jpg",
    tag: "Funktion",
    des: [
      "Framöver kommer ni kunna vara med och skapa era enga kartor, kanske vill nu rita upp eran fysiska gård?",
    ],
  },
  
];

const News = () => {
  const onClick = (value) => {
    showNewsPopup(data[value]);
  };
  const { showNewsPopup } = useContext(context);
  return (
    <Fragment>
      <div className="edrea_tm_section" id="news">
        <div className="section_inner">
          <div className="edrea_tm_news swiper-section w-full h-auto clear-both float-left">
            <div className="edrea_tm_main_title">
              <h3>
                Senaste <span className="text-pink-color">Nyheter</span>
              </h3>
            </div>
            <div className="news_list w-full h-auto clear-both float-left relative">
              <Swiper {...newsSlider} className="swiper-container">
                <div className="swiper-wrapper">
                  {data.map((news, i) => (
                    <SwiperSlide className="swiper-slide" key={i}>
                      <div className="list_inner w-full h-auto clear-both float-left relative rounded-[10px] overflow-hidden">
                        <div className="image relative overflow-hidden">
                          <img
                            className="relative opacity-0 min-w-full"
                            src="assets/img/thumbs/4-3.jpg"
                            alt=""
                          />
                          <div
                            className="main  absolute inset-0 bg-no-repeat bg-center bg-cover scale-[1] transition-all duration-300"
                            data-img-url={news.img}
                            style={{ backgroundImage: news.img }}
                          />
                          <a
                            className="edrea_tm_full_link news_popup"
                            href="#"
                            onClick={() => onClick(i)}
                          />
                        </div>
                        <div className="details w-full float-left bg-[#222] pt-[30px] pr-[20px] pb-[27px] pl-[20px]">
                          <h3 className="text-[15px] mb-[4px]">
                            <a
                              className="no-underline text-white-color transition-all duration-300 hover:text-pink-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {news.title}
                            </a>
                          </h3>
                          <span>
                            <a
                              className="no-underline text-main-color text-[14px] transition-all duration-300 hover:text-white-color"
                              href="#"
                              onClick={() => onClick(i)}
                            >
                              {news.tag}
                            </a>
                          </span>
                        </div>
                      </div>
                    </SwiperSlide>
                  ))}
                </div>
                <div className="edrea_tm_swiper_progress fill">
                  <div className="my_pagination_in">
                    <span className="currentNews" />
                    <span className="pagination_progress">
                      <span className="all allNews">
                        <span />
                      </span>
                    </span>
                    <span className="totalNews" />
                  </div>
                  <div className="my_navigation">
                    <ul>
                      <li>
                        <a className="my_prev" href="#">
                          <i className="icon-left-open-1" />
                        </a>
                      </li>
                      <li>
                        <a className="my_next" href="#">
                          <i className="icon-right-open-1" />
                        </a>
                      </li>
                    </ul>
                  </div>
                </div>
              </Swiper>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};
export default News;
