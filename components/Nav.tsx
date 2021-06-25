import colors from '../colors'

const { text, blue } = colors

export const Nav = (): JSX.Element => (
  <nav>
    <a href="#about">About</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>

    <style jsx>{`
      nav {
        grid-area: menu;
        background-color: ${blue};
        position: sticky;
        top: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
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

      a:hover {
        border: 1px solid ${text};
        border-radius: 5px;
      }
    `}</style>
  </nav>
)
