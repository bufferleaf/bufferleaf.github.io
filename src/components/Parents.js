import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";

const Parents = () => {
  const { showAboutPopup } = useContext(context);

  // Define an array of data for multiple rows
  const rowsData = [
    {
      title: "I samverkan med Umeå- & Kalmarkommun ",
      text:
        "Projeket har utformats i samverkan med kommuner, fritidsledare och ungdomar",
      image: "assets/img/parentsPictures/teamwork.jpg"
    },
    {
      title: "Fokus på säkerhet online",
      text:
        "Projektet vill skapa en trygg miljö för ungdomar att befinna sig online, våran AI flaggar olämliga meddelanden och en fritidsledare får se kontexten till vad som hände. Du loggar in på platsen via kommunens inlogg (bankid, skolinlogg, etc) och blir på så sätt ansvarig för dina handlingar",
      image: "assets/img/parentsPictures/security.jpg"
    },
    {
      title: "GDPR",
      text:
        "All data lagras på svenska servrar och följer de regler som kommuner ska förhålla sig till.",
      image: "assets/img/parentsPictures/GDPR.jpg"
    },  
    // Add more objects for additional rows if needed
  ];

  return (
    <div className="edrea_tm_section" id="parents">
      <div className="flex flex-col mt-10">
        {rowsData.map((rowData, index) => (
          <div className="edrea_tm_about w-full h-auto clear-both float-left flex mb-20" key={index}>
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

export default Parents;
