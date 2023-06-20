import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const Rum = () => {
  const { showAboutPopup } = useContext(context);
  return (
    <div className="edrea_tm_section" id="rum">
      <div className="section_inner">
        <div className="edrea_tm_about w-full h-auto clear-both float-left flex">
          <div className="left w-[50%]">
            <div className="image relative">
              <img
                className="relative min-w-full opacity-0"
                src="assets/img/rum.png"
                alt=""
              />
              <div
                className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                data-img-url="assets/img/rum.png"
              />
            </div>
          </div>
          <div className="right w-[50%] pl-[100px]">
            <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b ">
              <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                Anpassade <span className="text-pink-color">Rum</span>
              </h3>
            </div>
            <div className="text w-full float-left mb-[36px]">
              <p>
              Utforska vår banbrytande värld av interaktiva digitala rum! Navigera med din unika avatar, kommunicera via videochatt och utnyttja inbyggda verktyg som whiteboard och skärmdelning. Upptäck ny dimension av digital interaktion idag!
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
export default Rum;
