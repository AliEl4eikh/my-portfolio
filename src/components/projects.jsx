import { useEffect, useState } from "react";
import { Project } from "./single-project";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    const getData = async () => {
        const { data } = await import("../../data/data.json");
        setProjects(data);
    }
    getData();
        
  }, []);
  return (
    <div className="projects" id="projects">
      <div className="container">
        <h2 className="section-title">A Few Personal Projects</h2>
        <div className="projects-grid">
          {projects?.map((project) => (
            <Project key={project.id} project={project} />
          ))}
        </div>
      </div>
    </div>
  );
};
