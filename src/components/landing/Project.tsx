import ImageSlider from '@/components/utils/ImagePackContainer'
import StyledButton from '@/components/utils/StyledButton'
import StyledCard from '@/components/utils/StyledCard'
import { type ProjectInterface } from '@/data/projects'
import styles from '@/styles/landing/Projects.module.scss'
import Image from 'next/image'

interface Props {
  item: ProjectInterface
}

export default function Project({ item }: Props) {
  return (
    <StyledCard
      move={false}
      glow={item.color}
      className={`${styles.project} ${item.direction === 'reverse' ? styles.reverse : ''}`}
      variant="narrowbottom"
    >
      <ImageSlider
        className={styles.slider}
        title={item.title}
        accent={item.accent}
        images={item.images}
      />
      <div className={styles.content}>
        <div className={styles.section}>
          <div className={styles.title}>
            {item.title} <span className={styles.accent}>{item.accent}</span>
          </div>
          <div className={styles.description}>{item.description}</div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            Skills <span className={styles.accent}>used in this project</span>
          </div>
          <div className={styles.skillcontainer}>
            {item.skills.map((skill, i) => {
              if (skill) {
                return (
                  <div key={i} className={styles.skill}>
                    <Image
                      quality={85}
                      placeholder="blur"
                      src={skill.image}
                      alt={skill.name}
                      className={styles.image}
                    />
                    <div className={styles.name}>{skill.name}</div>
                  </div>
                )
              }
            })}
          </div>
        </div>
        <div className={styles.section}>
          <div className={styles.title}>
            Links <span className={styles.accent}>to access the code or view the project</span>
          </div>
          <div className={styles.linkcontainer}>
            {item.links.map((link, i) => (
              <StyledButton
                key={i}
                className={styles.link}
                externalLink={link.link}
                icon="ci:chevron-right"
                staticIcon={link.icon}
                color={link.color}
                background="glass"
                barHeight="4px"
              >
                {link.text}
              </StyledButton>
            ))}
          </div>
        </div>
      </div>
    </StyledCard>
  )
}
