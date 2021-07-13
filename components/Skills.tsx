import colors from '../colors'

interface Skills {
  languages: string[]
  frameworks: string[]
  databases: string[]
  professional: string[]
}

const skills: Skills = {
  languages: [
    'JavaScript',
    'TypeScript',
    'Node.js',
    'Ruby',
    'HTML',
    'CSS',
    'SQL',
  ],
  frameworks: [
    'React',
    'Redux',
    'Jest',
    'React Native',
    'Webpack',
    'Ruby on Rails',
    'RSpec',
    'Git',
    'Docker',
  ],
  databases: ['PostgreSQL', 'MongoDB', 'SQLite'],
  professional: [
    'Test Driven Development',
    'Agile Methodology',
    'Project Management',
  ],
}

const { blueGreen, blue, lBlue } = colors

function renderSkills(skills: Skills) {
  const lists = Object.keys(skills)
  return lists.map((list) => {
    return (
      <div className="skill-card" key={list}>
        <h3 className="list-heading">{list}</h3>
        <ul className="skill-list">{renderList(skills[list])}</ul>
        <style jsx>{`
          .skill-card {
            border: 2px solid ${lBlue};
            border-radius: 0.5rem;
            padding: 0 2rem;
            margin: 0 1rem;
            background-color: ${blue};
            scroll-snap-align: start;
          }

          .skill-list {
            padding-left: 1rem;
          }

          .list-heading {
            padding: 1rem;
            text-transform: capitalize;
            color: ${blueGreen};
            border-bottom: 2px solid rgb(91, 91, 91);
            border-bottom: 2px solid rgba(91, 91, 91, 0.5);
          }
        `}</style>
      </div>
    )
  })
}

function renderList(list: string[]) {
  return list.map((skill) => (
    <li key={skill} className="skill">
      {skill}
      <style jsx>{`
        .skill {
          font-size: 1.25rem;
          margin-top: 0.5rem;
        }
      `}</style>
    </li>
  ))
}

const Skills = (): JSX.Element => (
  <div id="skills">
    <h2 className="skills-header">Skills</h2>
    <div className="skills-wrapper">{renderSkills(skills)}</div>
    <style jsx>{`
      #skills {
        width: 100vw;
      }

      .skills-wrapper {
        display: flex;
        flex-direction: row;
        overflow: auto;
        scroll-snap-type: x mandatory;
        scroll-padding-left: 1rem;
      }

      .skills-header {
        font-size: 1.5rem;
        margin: 1rem 1rem;
        padding: 0.5rem 0;
        border-bottom: 2px solid rgb(91, 91, 91);
        border-bottom: 2px solid rgba(91, 91, 91, 0.5);
        color: ${blueGreen};
      }

      @media only screen and (min-width: 500px) {
        #skills {
          width: 100%;
          margin-top: 2rem;
        }
      }
    `}</style>
  </div>
)

export default Skills
