import { useContext } from "react";
import { context } from "../context/context";
import  Lottie  from "react-lottie"; // Import the Lottie component
import AnimatedText from "./AnimatedText";
import animationData from "../../public/assets/img/logo_animation.json"; // Update the path to your Lottie JSON

const Home = () => {
  const { changeNav } = useContext(context);
  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home w-full h-auto text-center align-center">
          {/*<h3 className="name text-white-color text-[72px] font-bold uppercase mb-[20px]">
            David <span className="text-pink-color">Parker</span>
          </h3>*/}
          <Lottie
          style={{display: 'flex', justifyContent: 'center'}}
            options={{
              loop: false,
              autoplay: true,
              animationData: animationData,
              // rendererSettings: {
              //   preserveAspectRatio: "xMidYMid slice",
              // },
            }}// Set the desired width of your Lottie animation
          />
          <h3 className="job text-[25px] font-medium text-main-color mb-[40px]">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a style={{ color: "#08352B" }} href="#">
              Logga in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

