import colors from '../colors'

const { text, blue } = colors

const Nav = (): JSX.Element => (
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>

    <style jsx>{`
      nav {
        grid-area: menu;
        background-color: ${blue};
        position: fixed;
        top: 0px;
        left: 0px;
        width: 100vw;
        height: 100vh;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
      }

      a {
        text-decoration: none;
        font-size: 1.75rem;
        color: ${text};
        border-bottom: 1px solid ${text};
        border-top: 1px solid transparent;
        border-left: 1px solid transparent;
        border-right: 1px solid transparent;
        margin: 1rem 1rem;
        padding: 5px;
        transition: all 0.2s ease-in-out;
      }

      a:hover {
        border: 1px solid ${text};
        border-radius: 5px;
      }

      @media only screen and (min-width: 500px) {
        nav {
          grid-area: menu;
          background-color: ${blue};
          position: sticky;
          top: 0px;
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center;
          height: unset;
          width: unset;
        }

        a {
          text-decoration: none;
          font-size: 1.25rem;
          color: ${text};
          border-bottom: 1px solid ${text};
          border-top: 1px solid transparent;
          border-left: 1px solid transparent;
          border-right: 1px solid transparent;
          margin: 1rem 1rem;
          padding: 5px;
          transition: all 0.2s ease-in-out;
        }
      }
    `}</style>
  </nav>
)

export default Nav
