import React from "react";
import "./Timeline.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

import { FaSuitcase, FaGraduationCap, FaStar } from "react-icons/fa";
import { ThemeContext } from "../../Context/theme";

export const Timeline = () => {
  const [{ themename }] = React.useContext(ThemeContext);
  const [linecolor, setlinecolor] = React.useState(
    themename === "light" ? "#23283e" : "#fcfcfc"
  );

  React.useEffect(() => {
    if (themename === "dark") {
      setlinecolor("#fcfcfc");
    } else {
      setlinecolor("#23283e");
    }
  }, [themename]);

  return (
    <>
      <div className="section mainsection">
        <h2 className="section__title" data-aos="fade-right">
          My <span className="different">Timeline 💫</span>
        </h2>
        <VerticalTimeline lineColor={linecolor}>
          <VerticalTimelineElement
            date={"April 2013 - June 2014"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaSuitcase />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              School
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Oxford model Senior Secondary School, CBSE
            </h4>
            <p data-aos="fade-right">
              I passed my Intermediate in June 2014 with CGPA: 5.8
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July-2014 - July 2017"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaSuitcase />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Diploma
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Glocal University 
            </h4>
            <p data-aos="fade-right">
              I passed my diploma in computer science from Glocal University with SGPA:6.3.
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            date={"July 2020 - August-2023"}
            contentStyle={{
              boxShadow: `var(--shadow)`,
              border: "3px solid var(--clr-primary)",
              backgroundColor: `var(--clr-bg)`,
              textAlign: "center",
              color: `var(--clr-fg-alt)`,
            }}
            contentArrowStyle={{
              borderRight: "16px solid  var(--clr-primary)",
            }}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            icon={<FaGraduationCap />}
          >
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              College(B.Tech)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Galgotias University – B.Tech
            </h4>
            <p data-aos="fade-right">
              I am completed B.Tech from Galgotias University in Computer science my last SGPA was 6.5 in 8th semester.
            </p>
          </VerticalTimelineElement>
          {/* Rest of the elements */}
          <VerticalTimelineElement
          date={"April 2023 - August 2023"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
            icon={<FaStar />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            
          > 
          
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Function-up (TRAINING )
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Front-end Developer 
            </h4>
            <p data-aos="fade-right">
            Training in Frontend Development using React.js, Javascript, HTML, and CSS, Competent in Git, familiar with Node.js, MongoDB, and DBMS. 
Create Wireframes, prototypes, and high-fidelity mockups for a variety of website projects. 
Worked closely with teams to understand the goals and translate them 
Into effective work solutions.
Participated in various coding competitions organized by Function-up on platforms like Code-wars, and code-zinger.

            </p></VerticalTimelineElement>
            <VerticalTimelineElement
          date={"JAN 2024- FEB 2024"}
          contentStyle={{
            boxShadow: `var(--shadow)`,
            border: "3px solid var(--clr-primary)",
            backgroundColor: `var(--clr-bg)`,
            textAlign: "center",
            color: `var(--clr-fg-alt)`,
          }}
            icon={<FaStar />}
            iconStyle={{
              border: ` 3px solid var(--clr-primary)`,
              backgroundColor: `var(--clr-bg)`,
              color: `var(--clr-primary)`,
            }}
            
          > 
          
            <h3
              className="vertical-timeline-element-title"
              data-aos="fade-right"
            >
              Codsoft (INTERNSHIP IN WEB Development)
            </h3>
            <h4
              className="vertical-timeline-element-subtitle"
              data-aos="fade-right"
            >
              Front-end Developer 
            </h4>
            <p data-aos="fade-right">
            During my Internship, I spearheaded the development of a dynamic website gaining invaluable experience in both collaborative advanced  
Web technologies. These hands-on projects refined my expertise in responsive design, UX, and database management, while significantly enhancing my project-solving skills. 
By actively seeking feedback and staying abreast of industry trends, I ensured continuous improvement and adaptability in a fast-paced environment. 

            </p></VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
};