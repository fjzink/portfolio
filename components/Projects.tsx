import ProjectCard from './ProjectCard'

const Projects = (): JSX.Element => {
  return (
    <div id="projects">
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
          grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
          gap: 1rem;
        }
      `}</style>
    </div>
  )
}

export default Projects
