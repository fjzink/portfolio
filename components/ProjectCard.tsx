import colors from '../colors'

const { blue, lBlue } = colors

const ProjectCard = (): JSX.Element => {
  return (
    <div className="project-card">
      <h4 className="project-title">Title</h4>
      <p className="project-description">description</p>
      <div className="tech-wrapper">tech used</div>
      <style jsx>{`
        .project-card {
          background-color: ${blue};
          border: 2px solid ${lBlue};
          border-radius: 0.5rem;
        }
      `}</style>
    </div>
  )
}

export default ProjectCard
