import React, { useState } from 'react'
import classnames from 'classnames'
import colors from '../colors'

const { text, blue, lBlue, dBlue } = colors

const Nav = (): JSX.Element => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <nav className={classnames({ open })}>
        <a href="#about" onClick={() => setOpen(false)}>
          About
        </a>
        <a href="#skills" onClick={() => setOpen(false)}>
          Skills
        </a>
        <a href="#projects" onClick={() => setOpen(false)}>
          Projects
        </a>
      </nav>
      <button className="nav-button" onClick={() => setOpen(!open)}>
        <div className={classnames('bar-one', { open })} />
        <div className={classnames('bar-two', { open })} />
        <div className={classnames('bar-three', { open })} />
      </button>
      <style jsx>{`
        nav {
          grid-area: menu;
          background-color: ${blue};
          position: fixed;
          top: 0px;
          left: 105vw;
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0;
          visibility: hidden;
          transition: opacity 0.3s ease-in-out, visibility 0.3s ease-in-out,
            left 0.3s ease-in-out;
        }

        nav.open {
          opacity: 1;
          visibility: visible;
          left: 0;
        }

        .nav-button {
          position: fixed;
          background-color: ${blue};
          border: 1px solid ${lBlue};
          border-radius: 50%;
          height: 3.5rem;
          width: 3.5rem;
          bottom: 1.5rem;
          right: 1.5rem;
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
          opacity: 0.9;
        }

        .bar-one,
        .bar-two,
        .bar-three {
          position: relative;
          background-color: ${text};
          height: 3px;
          width: 1.8rem;
          margin: 0.2rem 0;
          transition: all 0.3s ease-in-out;
          transform-origin: 2px;
        }

        .bar-one {
          transform: rotate(0);
          left: 0px;
        }

        .bar-two {
          opacity: 1;
        }

        .bar-three {
          transform: rotate(0);
          left: 0px;
        }

        .bar-one.open {
          transform: rotate(45deg);
          left: 4px;
        }

        .bar-two.open {
          opacity: 0;
        }

        .bar-three.open {
          transform: rotate(-45deg);
          left: 4px;
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
            position: sticky;
            top: 0px;
            flex-direction: row;
            justify-content: center;
            height: unset;
            width: unset;
            opacity: 1;
            visibility: visible;
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

          .nav-button {
            display: none;
          }
        }
      `}</style>
    </>
  )
}

export default Nav
