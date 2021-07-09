import colors from '../colors'

const { blueGreen } = colors

const About = (): JSX.Element => (
  <div id="about">
    <h2 className="intro-heading">Hi, I&apos;m Joey Zink!</h2>
    <div className="profile">
      <img className="profile-pic" src="/profilepic.jpeg" />
      <div className="who">
        <p className="description">
          I am a full stack engineer with experience in JavaScript, TypeScript,
          and React. I feel equally comfortable working on the frontend and
          backend of the stack. I strive to do quality work with best practices
          and modern technology, but I can also move quickly and get a solution
          working when needed.
        </p>
      </div>
    </div>

    <style jsx>{`
      #about {
        display: flex;
        flex-direction: column;
        justify-content: center;
        width: 100%;
      }

      .intro-heading {
        font-size: 3rem;
        text-align: center;
        margin: 0;
        margin-bottom: 1rem;
        color: ${blueGreen};
      }

      .who {
        padding: 1rem;
      }

      .description {
        font-size: 1.25rem;
      }

      .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
      }

      .profile-pic {
        border-radius: 50%;
        max-width: 250px;
        max-height: 250px;
      }
      @media only screen and (min-width: 500px) {
        .profile {
          flex-direction: row;
        }

        .description {
          margin: 1rem;
          font-size: 1.35rem;
        }
      }
    `}</style>
  </div>
)

export default About
