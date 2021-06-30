import Head from 'next/head'
import colors from '../colors'
import Nav from '../components/Nav'

const { text } = colors

export const Home = (): JSX.Element => (
  <div className="container">
    <Head>
      <title>Joey Zink</title>
    </Head>

    <Nav />

    <main>
      <div id="about">
        about me about me about me about me about me about me about me about me
        about me about me about me about me about me about me about me about me
        about me about me about me about me about me about me about me
      </div>
      <div id="skills">
        skills skills skills skills skills skills skills skills skills skills
        skills skills skills skills skills skills skills skills skills skills
        skills skills skills skills skills skills skills skills skills skills
        skills skills skills{' '}
      </div>
      <div id="projects">
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects projects projects projects
        projects projects projects projects projects{' '}
      </div>
    </main>
    <div className="contact">contact info</div>

    <style jsx>{`
      main div {
        margin: 200px 0px;
      }

      .container {
        min-height: 100vh;
        padding: 0 0;
        display: grid;
        grid-template-rows: auto auto;
        grid-template-columns: 100vw;
        grid-template-areas:
          'main'
          'contact';
      }

      main {
        grid-area: main;
        padding: 1rem 1rem;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
      }

      .contact {
        grid-area: contact;
        padding: 1rem;
      }

      .projects {
      }

      @media only screen and (min-width: 500px) {
        .container {
          grid-template-columns: 1fr 2fr 1fr;
          grid-template-rows: 4rem auto;
          grid-template-areas:
            'menu menu menu'
            'contact main .';
        }
      }
    `}</style>

    <style jsx global>{`
      html,
      body {
        box-sizing: border-box;
        padding: 0;
        margin: 0;
        font-size: 16px;
        color: ${text};
        background-color: #0b132b;
        font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
          Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
      }

      html {
        scroll-behavior: smooth;
      }

      * {
        box-sizing: border-box;
      }
    `}</style>
  </div>
)

export default Home
