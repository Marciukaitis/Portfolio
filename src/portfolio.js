const header = {
  homepage: 'https://marciukaitis.github.io/',
  title: 'Portfolio',
}

const about = {
  
  name: 'Micaela',
  role: 'Full Stack Developer',
  description: " En búsqueda de mi primera oportunidad en el mundo del desarrollo de software.",
  resume: 'https://docs.google.com/document/d/1gyvottuN1XU4h7Yt9_C-rtYitRqCXRIzxZEplqc9Onw/edit?tab=t.0',
  social: {
    linkedin: 'https://www.linkedin.com/in/micaela-marciukaitis-870025152/',
    github: 'https://github.com/Marciukaitis',
  },
}

const projects = [
  {
    name: 'FrontEnd',
    description:
      'Una aplicación que realiza consultas a una API de dentistas, integrando validaciones y manejo de errores. Incluye una funcionalidad de destacados, en el cual se evitan los duplicados y con la opción de poder eliminarlos. Existe la opción de alternar entre modo claro y oscuro para preferencias del usuario. ',
    stack: ['CSS', 'JavaScript', 'React'],
    sourceCode: 'https://github.com/Marciukaitis/Dentistas-React',
    livePreview: 'https://fe-3-final-gamma.vercel.app/',
  },
  {
    name: 'To Do List',
    description:
      'Se trata de una aplicación de tareas, que incluye un proceso de registro (sign up) y un inicio de sesión (login) con sus respectivas validaciones. En ella, los usuarios pueden registrar diversas actividades que desean realizar. Estas tareas permanecen pendientes hasta que sean completadas.',
    stack: ['HTML 5', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Marciukaitis/To-Do',
    livePreview: 'https://to-do-ebon-eta.vercel.app/signup.html',
  },
 
  {
    name: 'BackEnd',
    description:
      'La aplicación consiste en un sistema que gestiona las operaciones de un CRUD con el correspondiente control de errores, estando conectada a una base de datos. Además, incluye la implementación de pruebas unitarias para garantizar el correcto funcionamiento de sus funcionalidades.',
    stack: ['Java', 'SpringBoot', 'CSS','JavaScript'],
    sourceCode: 'https://github.com/Marciukaitis/Dentist-Java',
    
  },
]

const skills = [
  'Java',
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'SpringBoot',
  'Postman',
  'SQL',
  'Git',
  'CI/CD',
  'AWS',
  'Diseño UX/UI',
  'Scrum',
  'Design Thinking',
]

const contact = {
  email: 'micaelamarciukaitis@gmail.com',
}

export { header, about, projects, skills, contact }
