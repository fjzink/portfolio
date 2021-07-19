import { Linkedin, Mail, GitHub } from 'react-feather'
import colors from '../colors'

const { lBlue } = colors

const Contact = (): JSX.Element => {
  return (
    <div id="contact">
      <div className="contact-info">
        <a href="mailto:joeyzink@gmail.com">
          <Mail color={lBlue} size={32} />
        </a>
        <a href="https://github.com/fjzink">
          <GitHub color={lBlue} size={32} />
        </a>
        <a href="https://www.linkedin.com/in/joeyzink/">
          <Linkedin color={lBlue} size={32} />
        </a>
      </div>
      <style jsx>{`
        #contact {
          grid-area: contact;
        }

        .contact-info {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
          padding: 1rem;
          padding-bottom: 2rem;
        }

        .contact-info > a {
          margin: 0 1.5rem;
        }

        .contact-info > a:first-child {
          margin-left: 0;
        }

        @media only screen and (min-width: 500px) {
          #contact {
            justify-content: flex-start;
          }

          .contact-header {
            transform: rotate(90deg);
          }

          .contact-info {
            position: sticky;
            top: 4rem;
            flex-direction: column;
            justify-content: flex-start;
          }

          .contact-info > a {
            margin: 1rem 0;
          }
        }
      `}</style>
    </div>
  )
}

export default Contact
