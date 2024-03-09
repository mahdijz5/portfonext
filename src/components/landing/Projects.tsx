import Title from '@/components/utils/Title'
import { projects } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'
import Project from './Project'

export default function Projects() {
  return (
    <div id="projects" className={`animated-container ${styles.container}`}>
      <Title title="Showcasing My Passion Projects:" description="Where Creativity Takes Flight" />

      <div className={styles.projectcontainer}>
        {projects.map((item, index) => {
          return <Project key={index} item={item} />
        })}
      </div>
    </div>
  )
}
