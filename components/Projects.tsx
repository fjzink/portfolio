import ProjectCard from './ProjectCard'
import colors from '../colors'

const { blueGreen } = colors

const Projects = (): JSX.Element => {
  return (
    <div id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-wrapper">
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
        <ProjectCard />
      </div>
      <style jsx>{`
        #projects {
          width: 100%;
          padding: 1rem;
        }

        .projects-wrapper {
          display: grid;
          grid-template-columns: 1fr;
          gap: 1rem;
        }

        .projects-header {
          font-size: 1.5rem;
          margin: 1rem 0;
          padding: 0.5rem 0;
          border-bottom: 2px solid rgb(91, 91, 91);
          border-bottom: 2px solid rgba(91, 91, 91, 0.5);
          color: ${blueGreen};
        }

        @media only screen and (min-width: 500px) {
          .projects-wrapper {
            grid-template-columns: repeat(2, 1fr);
          }
        }
      `}</style>
    </div>
  )
}

export default Projects
