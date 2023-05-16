import "./technologies.sass";
import { techs } from "../../data/techs";

const Technologies = () => {
  return (
    <section className="technologies-container">
      <h2>Tecnologias</h2>
      <div className="technologies-grid">
        {techs.map((tech) => (
          <div className="technology-card" id={tech.id} key={tech.id}>
            {tech.icon}
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Technologies;
