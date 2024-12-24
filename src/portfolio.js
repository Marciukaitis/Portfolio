const header = {
  // homepage: 'https://rjshkhr.github.io/cleanfolio',
  title: 'Portfolio',
}

const about = {
  
  name: 'Micaela',
  role: 'Full Stack Developer',
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
      'Se trata de una clásica pero efectiva aplicación de tareas, en la cual podemos anotar distintas actividades que nos interese realizar. Estas tareas están pendientes hasta que las completemos. ',
    stack: ['HTML 5', 'CSS', 'JavaScript'],
    sourceCode: 'https://github.com/Marciukaitis/To-Do',
    livePreview: 'https://to-do-ebon-eta.vercel.app/signup.html',
  },
 
  {
    name: 'BackEnd',
    description:
      'Consiste en una aplicacion la cual se maneja las operaciones de un CRUD con sus respectivo control de errores, conectada a una base de datos y con sus test unitarios.',
    stack: ['JAVA', 'SpringBoot', 'CSS','JavaScript'],
    sourceCode: 'https://github.com/Marciukaitis/Dentist-Java',
    
  },
]

const skills = [
  'JAVA',
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
