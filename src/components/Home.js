import { useContext } from "react";
import { context } from "../context/context";
import AnimatedText from "./AnimatedText";
import anim from '../../public/assets/img/cropped_anim.gif'
const Home = () => {
  console.log(JSON.stringify(anim))
  const { changeNav } = useContext(context);
  return (
    <div className="edrea_tm_section animated" id="home">
      <div className="section_inner">
        <div className="edrea_tm_home w-full h-auto clear-both float-left text-center">
          {/*<h3 className="name text-white-color text-[72px] font-bold uppercase mb-[20px]">
            David <span className="text-pink-color">Parker</span>
          </h3>*/}
          <img src={anim.src} />
          <h3 className="job text-[25px] font-medium text-main-color mb-[40px]">
            <AnimatedText />
          </h3>
          <div className="edrea_tm_button transition_link">
            <a href="#">
              Logga in
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Home;
