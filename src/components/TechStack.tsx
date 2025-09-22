'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  SiLaravel,
  SiReact,
  SiVuedotjs,
  SiNodedotjs,
  SiNextdotjs,
  SiNuxtdotjs,
  SiTypescript,
  SiJavascript,
  SiPhp,
  SiMysql,
  SiPostgresql,
  SiMongodb,
  SiRedis,
  SiAmazonaws,
  SiDocker,
  SiKubernetes,
  SiGit,
  SiTailwindcss,
  SiSass,
  SiWebpack,
  SiJest,
  SiCypress
} from 'react-icons/si'

const TechStack = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const techCategories = [
    {
      title: 'Frontend',
      description: 'Modern frontend technologies for creating beautiful user interfaces',
      technologies: [
        { name: 'React', icon: SiReact, color: '#61DAFB', level: 95 },
        { name: 'Vue.js', icon: SiVuedotjs, color: '#4FC08D', level: 90 },
        { name: 'Next.js', icon: SiNextdotjs, color: '#000000', level: 88 },
        { name: 'Nuxt.js', icon: SiNuxtdotjs, color: '#00DC82', level: 85 },
        { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', level: 92 },
        { name: 'JavaScript', icon: SiJavascript, color: '#F7DF1E', level: 95 },
        { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#06B6D4', level: 90 },
        { name: 'Sass', icon: SiSass, color: '#CC6699', level: 85 },
      ]
    },
    {
      title: 'Backend',
      description: 'Robust backend solutions and server-side technologies',
      technologies: [
        { name: 'Laravel', icon: SiLaravel, color: '#FF2D20', level: 95 },
        { name: 'Node.js', icon: SiNodedotjs, color: '#339933', level: 90 },
        { name: 'PHP', icon: SiPhp, color: '#777BB4', level: 92 },
        { name: 'Express', icon: SiNodedotjs, color: '#000000', level: 88 },
      ]
    },
    {
      title: 'Database',
      description: 'Database management and optimization expertise',
      technologies: [
        { name: 'MySQL', icon: SiMysql, color: '#4479A1', level: 90 },
        { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', level: 85 },
        { name: 'MongoDB', icon: SiMongodb, color: '#47A248', level: 80 },
        { name: 'Redis', icon: SiRedis, color: '#DC382D', level: 75 },
      ]
    },
    {
      title: 'Cloud & DevOps',
      description: 'Cloud infrastructure and deployment automation',
      technologies: [
        { name: 'AWS', icon: SiAmazonaws, color: '#FF9900', level: 85 },
        { name: 'Docker', icon: SiDocker, color: '#2496ED', level: 80 },
        { name: 'Kubernetes', icon: SiKubernetes, color: '#326CE5', level: 70 },
        { name: 'Git', icon: SiGit, color: '#F05032', level: 90 },
      ]
    },
    {
      title: 'Tools & Testing',
      description: 'Development tools and quality assurance',
      technologies: [
        { name: 'Webpack', icon: SiWebpack, color: '#8DD6F9', level: 80 },
        { name: 'Jest', icon: SiJest, color: '#C21325', level: 75 },
        { name: 'Cypress', icon: SiCypress, color: '#17202C', level: 70 },
      ]
    }
  ]

  return (
    <section id="tech" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Tech <span className="gradient-text-blue">Stack</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Technologies and tools I use to build amazing web applications
          </p>
        </motion.div>

        <div className="space-y-16">
          {techCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-2">
                  {category.title}
                </h3>
                <p className="text-gray-400">
                  {category.description}
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
                {category.technologies.map((tech, techIndex) => (
                  <motion.div
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ 
                      duration: 0.5, 
                      delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.3 
                    }}
                    whileHover={{ y: -5, scale: 1.05 }}
                    className="glass-card p-6 rounded-xl text-center group hover-lift"
                  >
                    {/* Tech Icon */}
                    <div className="mb-4 flex justify-center">
                      <tech.icon 
                        className="h-12 w-12 transition-all duration-300 group-hover:scale-110" 
                        style={{ color: tech.color }}
                      />
                    </div>

                    {/* Tech Name */}
                    <h4 className="text-lg font-semibold text-white mb-3">
                      {tech.name}
                    </h4>

                    {/* Skill Level */}
                    <div className="space-y-2">
                      <div className="flex justify-between text-sm text-gray-400">
                        <span>Proficiency</span>
                        <span>{tech.level}%</span>
                      </div>
                      <div className="w-full bg-gray-700 rounded-full h-2">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={inView ? { width: `${tech.level}%` } : {}}
                          transition={{ 
                            duration: 1, 
                            delay: (categoryIndex * 0.2) + (techIndex * 0.1) + 0.8 
                          }}
                          className="h-2 rounded-full"
                          style={{ backgroundColor: tech.color }}
                        />
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Experience Summary */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1 }}
          className="mt-16 glass-card p-8 rounded-2xl"
        >
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <div>
              <div className="text-3xl font-bold text-white mb-2">5+</div>
              <div className="text-gray-400">Years Experience</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">25+</div>
              <div className="text-gray-400">Technologies Mastered</div>
            </div>
            <div>
              <div className="text-3xl font-bold text-white mb-2">50+</div>
              <div className="text-gray-400">Projects Completed</div>
            </div>
          </div>
        </motion.div>

        {/* Learning Philosophy */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 1.2 }}
          className="mt-12 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Always Learning, Always Growing
            </h3>
            <p className="text-gray-300 leading-relaxed">
              Technology evolves rapidly, and I'm committed to staying at the forefront of innovation. 
              I continuously explore new frameworks, tools, and methodologies to deliver the best 
              solutions for my clients. My passion for learning drives me to master emerging 
              technologies and apply them to solve real-world problems.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default TechStack
