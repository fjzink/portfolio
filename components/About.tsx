const About = (): JSX.Element => (
  <div id="about">
    <div className="profile">
      <h2 className="intro-heading">Hi, I&apos;m Joey Zink!</h2>
      <img className="profile-pic" src="/profilepic.jpeg" />
    </div>
    <p className="description">
      I am a full stack engineer with experience with JavaScript, TypeScript,
      and React.
    </p>

    <style jsx>{`
      #about {
        display: flex;
        flex-direction: column;
        width: 100%;
      }

      .description {
        padding: 0.5rem;
      }

      .profile {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 0.5rem;
      }

      .profile-pic {
        border-radius: 50%;
        max-width: 250px;
        max-height: 250px;
      }
      @media only screen and (min-width: 500px) {
        #about {
          flex-direction: row;
        }
      }
    `}</style>
  </div>
)

export default About
