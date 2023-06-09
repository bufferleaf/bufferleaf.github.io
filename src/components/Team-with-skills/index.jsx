/* eslint-disable @next/next/no-img-element */
import React from "react";
import tooltipEffect from "../../common/tooltipEffect";
import teamSkillsProgress from "../../common/teamSkillsProgress";

const TeamWithSkills = () => {
  React.useEffect(() => {
    tooltipEffect()
    teamSkillsProgress()
  }, [])
  return (
    <div className="team-crv section-padding">
      <div className="container">
        <div className="row">
          <div className="col-lg-5 valign">
            <div className="content wow fadeInUp" data-wow-delay=".5s">
              <div className="sub-title">
                <h6>Our Staff</h6>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <h3 className="co-tit custom-font mb-15">
                Meet Bufferleaf
              </h3>
              <p>
              Bufferleaf is a small software development company based in northern Sweden.
              </p>
              <div className="skills-box mt-40">
                <div className="skill-item">
                  <h6 className="custom-font">Software development</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="custom-font">App & Web Development</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="100%"></div>
                  </div>
                </div>
                <div className="skill-item">
                  <h6 className="custom-font">Ai / MAchine Learning</h6>
                  <div className="skill-progress">
                    <div className="progres custom-font" data-value="90%"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-6 offset-lg-1">
            <div className="img-box">
              <div className="row">
                <div className="col-sm-6 toright">
                  <div className="full-width">
                    <div
                      className="img sizxl mb-30"
                      data-tooltip-tit="Noah Öberg"
                      data-tooltip-sub="Co-Founder"
                    >
                      <img src="/img/team/noah.jpg" alt="" className="imago wow" />
                    </div>
                    <div
                      className="img sizmd"
                      data-tooltip-tit="Simon Rickardsson"
                      data-tooltip-sub="Co-Founder"
                    >
                      <img src="/img/team/simon.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
                <div className="col-sm-6 toleft valign">
                  <div className="full-width text-left">
                    <div
                      className="img sizmd mb-30"
                      data-tooltip-tit="Hampus Eriksson"
                      data-tooltip-sub="UX / UI"
                    >
                      <img src="/img/team/hampus.jpg" alt="" className="imago wow" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamWithSkills