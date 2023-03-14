import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faSquareArrowUpRight } from "@fortawesome/free-solid-svg-icons";

export const Project = ({ project }) => {
  const {
    projectTitle,
    projectImage,
    projectDescription,
    gitHubLink,
    websiteLink,
  } = project;
  
  return (
    <div className="project">
      <h4 className="project-title">{projectTitle}</h4>
      <div
        className="project-image"
        style={{
          backgroundImage: `url(${projectImage})`,
        }}
      >
        <div className="text-over-image">
          <h3>{projectTitle}</h3>
          <p>{projectDescription}</p>
          <div className="links">
            <a href={gitHubLink} target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a href={websiteLink} target="_blank">
              <FontAwesomeIcon icon={faSquareArrowUpRight} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
