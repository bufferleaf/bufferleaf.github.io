import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const About = () => {
  const { showAboutPopup } = useContext(context);

  // Define an array of data for multiple rows
  const rowsData = [
    {
      title: "Anpassade Rum",
      text:
        "Utforska med din unika avatar vår banbrytande värld av interaktiva digitala rum!",
      image: "assets/img/AboutPictures/room.png"
    },
    {
      title: "Video & Röst-samtal",
      text:
        "En ny dimension av digital interaktion och kommunicera via video & textchatt!",
      image: "assets/img/AboutPictures/video.png"
    },
    {
      title: "Lokala aktiviteter",
      text:
        "Håll koll på vad andra ungdomar gör i din kommun och delta både digitalt eller fysiskt",
      image: "assets/img/AboutPictures/activities.png"
    },
    // {
    //   title: "Spel",
    //   text:
    //     "Spela enkla mini-games och se vem som är bäst i din kommun",
    //   image: "assets/img/AboutPictures/rum.png"
    // },
    {
      title: "Verktyg",
      text:
        "Utnyttja inbyggda verktyg som whiteboard och skärmdelning.",
      image: "assets/img/AboutPictures/whiteboard.png"
    },
  
    // Add more objects for additional rows if needed
  ];

  return (
    <div className="edrea_tm_section" id="about">
      <div className="flex flex-col mt-10">
        {rowsData.map((rowData, index) => (
          <div className="edrea_tm_about w-full h-auto clear-both float-left flex" style={{marginBottom: 50}} key={index}>
          <div className="left w-[50%]">
              <div className="image relative">
                <img
                  className="relative min-w-full opacity-0"
                  src={rowData.image}
                  alt=""
                />
                <div
                  className="main absolute inset-0 bg-no-repeat bg-cover bg-center rounded-[10px]"
                  data-img-url={rowData.image}
                />
              </div>
            </div>
            <div className="right w-[50%] pl-[100px]">
              <div className="short w-full float-left mb-[24px] border-dashed border-[rgba(255,255,255,.15)] border-b">
                <h3 className="name uppercase mb-[15px] text-[40px] font-bold">
                  {rowData.title}
                </h3>
              </div>
              <div className="text w-full float-left mb-[36px]">
                <p>{rowData.text}</p>
              </div>
              {/* <div className="edrea_tm_button">
                <a href="#" onClick={() => showAboutPopup()}>
                  Learn More
                </a>
              </div> */}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
