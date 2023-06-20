import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "../components/AnimatedText";

const Events = () => {
  const { showAboutPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="moderator">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left flex">
          <div className="left w-[50%]">
            <div className="image relative">
              <img
                className="relative min-w-full opacity-0"
                src="assets/img/admin.png"
                alt=""
              />
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                data-img-url="assets/img/admin.png"
              />
            </div>
          </div>
          <div className="right w-[50%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b ">
              <h3 className="name uppercase mb-[15px] text-[30px] font-bold">
                Enkel <span className="text-pink-color">Moderering</span>
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>
              Vår kraftfulla moderatorpanel erbjuder kristallklar överblick av all aktivitet. Med intuitiva verktyg hanterar du flaggade konversationer, evenemangsförfrågningar och mer. Våra verktyg underlättar konflikthantering, sparar tid och skapar en säkrare plattform. Din effektivitet är vår prioritet!
              </p>
            </div>
            {/*<div className="edrea_tm_button">
              <a href="#" onClick={() => showAboutPopup()}>
                Learn More
              </a>
  </div>*/}
          </div>
        </div>
      </div>
    </div>
  );
};
export default Events;
