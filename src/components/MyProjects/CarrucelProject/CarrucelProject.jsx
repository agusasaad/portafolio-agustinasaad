import { forwardRef } from 'react'
import { getProjects } from '@/utils/info/Info'
import styles from './CarrucelProject.module.css'
import Image from 'next/image'
import Link from 'next/link'
import { useLanguageStore } from '@/app/store'

const CarrucelProject = forwardRef((props, ref) => {
  const projects = getProjects()
  const copyProject = [...projects, ...projects]

  const { setViewProject } = useLanguageStore()

  return (
    <div className={styles.slider}>
      <div className={styles.move}>
        {copyProject.map((project, index) => (
          <Link
            href={`/detail/${project.id}`}
            key={index}
            className={styles.card}
            ref={(el) => (ref.current[index] = el)}
            onMouseEnter={() => setViewProject(true)}
            onMouseLeave={() => setViewProject(false)}
            onClick={() => setViewProject(false)}
          >
            <div className={styles.content_image}>
              <Image
                src={project.imageCard}
                width={550}
                height={650}
                alt={project.name}
              />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
})

export default CarrucelProject
