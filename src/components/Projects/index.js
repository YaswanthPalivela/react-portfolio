import { useContext } from 'react'
import FormContext from '../../context/FormContext'
import ProjectList from '../ProjectsList.js'
import './index.css'

const Projects = () => {
  const { projectsList } = useContext(FormContext)
  console.log(projectsList)

  return (
    <div className='projects-section'>
      <h4 style={{ textAlign: "center" }}>Projects</h4>
      {projectsList.map(eachProject => (
        <ProjectList eachProject={eachProject} key={eachProject} />
      ))}
    </div>
  )
}

export default Projects