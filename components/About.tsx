import colors from '../colors'

const { blueGreen, blue } = colors

const About = (): JSX.Element => (
  <div id="about">
    <h2 className="intro-heading">Hi, I&apos;m Joey Zink!</h2>
    <div className="profile">
      <img className="profile-pic" src="/profilepic.jpeg" />
      <div className="who-wrapper">
        <h3 className="who-heading">Who I am</h3>
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

      .who-wrapper {
        padding: 1rem;
      }

      .who-heading {
        font-size: 1.5rem;
        margin: 0.5rem 0;
        padding: 0.5rem 0;
        border-bottom: 2px solid rgb(91, 91, 91);
        border-bottom: 2px solid rgba(91, 91, 91, 0.5);
        color: ${blueGreen};
      }

      .description {
        font-size: 1.25rem;
        margin: 0;
      }

      .profile {
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        align-items: center;
        flex-grow: 1;
      }

      .profile-pic {
        border: 4px solid ${blue};
        border-radius: 50%;
        max-width: 250px;
        max-height: 250px;
      }
      @media only screen and (min-width: 500px) {
        .profile {
          flex-direction: row;
        }

        .who-heading {
          margin: 0.25rem 1rem;
          padding: 0.5rem 0;
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
