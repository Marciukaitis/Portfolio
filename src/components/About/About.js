
import { about } from '../../portfolio'
import './About.css'

const About = () => {
  const { name, role, description, resume } = about

  return (
    <div className='about center'>
      {name && (
        <h1>
          Hola, soy <span className='about__name'>{name}.</span>
        </h1>
      )}

      {role && <h2 className='about__role'> {role}.</h2>}
      <p className='about__desc'>{description && description}</p>

      <div className='about__contact center'>
        {resume && (
           <a href={resume} target='_blank' rel='noopener noreferrer'>
            <span type='button' className='btn btn--outline'>
            Currículum Vitae
            </span>
          </a>
        )}
      </div>
    </div>
  )
}

export default About
