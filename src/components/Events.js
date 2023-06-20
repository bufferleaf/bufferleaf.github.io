import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const Events = () => {
  const { showAboutPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="events">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left flex">
          <div className="left w-[50%]">
            <div className="image relative">
              <img
                className="relative min-w-full opacity-0"
                src="assets/img/event.png"
                alt=""
              />
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                data-img-url="assets/img/event.png"
              />
            </div>
          </div>
          <div className="right w-[50%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b ">
              <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                Lokala <span className="text-pink-color">Events</span>
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>
              Dyk in i vår dynamiska hubb för framtidens evenemang! Här hittar du detaljerade listor över evenemang, inklusive tid, plats och arrangörer, samt planeringsrum för att möta och planera tillsammans via videochatt. Upptäck och anmäl dig till händelser som kommer att forma din framtid idag!
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
