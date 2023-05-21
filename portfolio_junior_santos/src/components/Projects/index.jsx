import "./projects.sass";
import { projects } from "../../data/projects";

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <p>Confira alguns de meus projetos.</p>
      <ul className="project-container">
        {projects.map((project) => (
          <li className="project-card" id={project.id} key={project.id}>
            <h3>{project.name}</h3>
            <a href={project.url} target="blanck">
              <img src={project.image} alt="" />
            </a>
            <div className="project-information">
              <span>
                Link do Projeto:<a href={project.url}>aqui</a>
              </span>
              <span>
                Link do Repositório:<a href={project.git_url}>aqui</a>
              </span>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Projects;
