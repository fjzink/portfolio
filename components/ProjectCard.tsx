import colors from '../colors'

const { blue, lBlue, blueGreen, turquoise } = colors

export interface Project {
  title: string
  description: string
  tech: string[]
}

function renderTech(techList: string[]) {
  return techList.map((tech) => (
    <span key={tech} className="tech">
      {tech}
      <style jsx>{`
        .tech {
          border: 2px solid ${turquoise};
          background-color: ${lBlue};
          border-radius: 10px;
          padding: 0.5rem;
          margin: 0 0.5rem;
        }
      `}</style>
    </span>
  ))
}

const ProjectCard = ({ title, description, tech }: Project): JSX.Element => {
  return (
    <div className="project-card">
      <h4 className="project-title">{title}</h4>
      <p className="project-description">{description}</p>
      <div className="tech-wrapper">{renderTech(tech)}</div>
      <style jsx>{`
        .project-card {
          background-color: ${blue};
          border: 2px solid ${lBlue};
          border-radius: 0.5rem;
        }

        .project-title {
          color: ${blueGreen};
          width: 100%;
          border-bottom: 2px solid ${lBlue};
          text-align: center;
          padding: 1rem;
          margin: 0;
        }

        .project-description {
            padding: 1rem;
        }

        .tech-wrapper {
            display: flex;
            flex-direction: row;
            justify-content: flex-start:
            align-items: center;
            border-top: 2px solid ${lBlue};
            padding: 1rem;
            overflow: auto;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard
