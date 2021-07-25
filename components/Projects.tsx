import ProjectCard from './ProjectCard'
import colors from '../colors'
import { Project } from './ProjectCard'

const { blueGreen } = colors

const projects = [
  {
    title: 'RoadWarriors',
    description:
      'A mobile app for planning road trips. You can plan a route and add stops for gas and restaurants.',
    tech: ['React Native', 'Javascript', 'Google Maps API'],
  },
  {
    title: 'Elite Skills',
    description:
      'A web app for improving any skill you want to work on. You can track empirical metrics to measure progress and make sure you are improving over time.',
    tech: ['React', 'JavaScript', 'Rails'],
  },
  {
    title: 'Gains Tracker',
    description:
      'When you are hitting the gym and lifting weights it is important to track your progress over time. This web app allows you to plan your workouts and track progress.',
    tech: ['React', 'TypeScript', 'Node.js'],
  },
  {
    title: 'My PUBG Stats',
    description:
      'A stat tracker web app for checking your in game stats for PUBG. See what your Kill/Death ratio is on each mode, see recent games, and more.',
    tech: ['React', 'Javascript', 'PUBG API'],
  },
]

function renderProjects(projects: Project[]) {
  return projects.map((project) => (
    <ProjectCard
      key={project.title}
      title={project.title}
      description={project.description}
      tech={project.tech}
    />
  ))
}

const Projects = (): JSX.Element => {
  return (
    <div id="projects">
      <h2 className="projects-header">Projects</h2>
      <div className="projects-wrapper">{renderProjects(projects)}</div>
      <style jsx>{`
        #projects {
          width: 100%;
          padding: 1rem;
        }

        .projects-wrapper {
          display: grid;
          grid-template-columns: calc(100vw - 2rem);
          gap: 1rem;
          width: 100%;
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
            grid-template-columns: repeat(2, minmax(45%, 1fr));
          }
        }
      `}</style>
    </div>
  )
}

export default Projects
