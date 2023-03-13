import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faGithub,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import Image from "next/image";

export const Contacts = () => {
  return (
    <div className="contacts" id="contacts">
      <div className="container">
        <h2 className="section-title">Feel free to contact me</h2>
        <div className="logo-icons">
          <a href="https://github.com/AliEl4eikh" target="_blank">
            <FontAwesomeIcon icon={faGithub} size="3x" />
          </a>
          <a href={"https://www.linkedin.com/in/ali-elsheikh-352074102/"} target="_blank">
            <FontAwesomeIcon icon={faLinkedin} size="3x" />
          </a>
          <a href="mailto:a.emad.elsheikh@gmail.com">
            <Image
              src={"/images/tech-logos/gmail.svg"}
              alt="gmail logo"
              width={50}
              height={50}
            />
          </a>
        </div>
      </div>
    </div>
  );
};
