import React from "react";
import "./Introduction.css";
import { FaSignOutAlt } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";
import profilePic from "../../assets/Photo_fw14_056.png";

export const Introduction = () => {
  const [{ themename }] = React.useContext(ThemeContext);

  return (
    <>
      <section id="about">
        <div className="section" data-aos="fade-right">
          <h2 className="section__title">
            About <span className="different">Me</span>
          </h2>
          <div className={"introduction " + themename}>
            <div className="introduction_logocontainer">
              <img src={profilePic} alt="Images" />
            </div>
            <div className="introduction_datacontainer">
              <h4>
                Hi Everyone, My name is{" "}
                <span className="different">Gurank verma</span> and I am from{" "}
                <span className="different">
                  {" "}
                  Kanpur, Uttar Pradesh (India)
                </span>
                . I have completed my graduation in BTech (computer science. Engineering)
                from{" "}
                <span className="different">
                Galgotias University, greater noida (UP)
                </span>
                . Then I joined full stack development course by{" "}
                <span className="different">Function-up</span> a military type
                coding training.
               <p>
               I am growth-oriented and tend to leave no stone unturned to fulfill my dreams, goals, and aspirations. I always aspired to have a challenging career where I can contribute my knowledge and skills to the organization which will further enhance my experience through continuous learning and teamwork
               </p>
            
              </h4>
              <h4>Terms That can describe me apart from Coding :</h4>
              <h4 className="different">
                <span className="icons">
                  <FaSignOutAlt />
                </span>
                Entrepreneur
              </h4>
              <h4 className="different">
                <span className="icons">
                  <FaSignOutAlt />
                </span>
                Chess Enthusiast
              </h4>
              <h4 className="different">
                <span className="icons">
                  <FaSignOutAlt />
                </span>
                Traveling
              </h4>
              <h4 className="different">
                <span className="icons">
                  <FaSignOutAlt />
                </span>
                Swimming
              </h4>
              <h4 className="different">
                <span className="icons">
                  <FaSignOutAlt />
                </span>
                Driving car and bike 
              </h4>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};