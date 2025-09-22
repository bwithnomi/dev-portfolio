'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Code, Database, Cloud, Users } from 'lucide-react'

const About = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const stats = [
    { icon: Code, value: '5+', label: 'Years Experience' },
    { icon: Database, value: '50+', label: 'Projects Completed' },
    { icon: Cloud, value: '99%', label: 'Client Satisfaction' },
    { icon: Users, value: '30+', label: 'Happy Clients' },
  ]

  const skills = [
    'Laravel Development',
    'React & Next.js',
    'Vue.js & Nuxt.js',
    'Node.js & Express',
    'AWS Cloud Services',
    'Database Design',
    'API Development',
    'DevOps & CI/CD',
  ]

  return (
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            <span className="gradient-text-blue">About</span> Me
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate web developer with expertise in modern technologies and cloud solutions
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Column - Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="glass-card p-8 rounded-2xl">
              <h3 className="text-2xl font-bold mb-6 text-white">
                Full-Stack Web Developer
              </h3>
              <p className="text-gray-300 mb-6 leading-relaxed">
                I'm a passionate web developer with over 5 years of experience creating 
                robust, scalable web applications. I specialize in Laravel, React, Vue.js, 
                Node.js, and AWS cloud services, delivering high-quality solutions that 
                drive business growth.
              </p>
              <p className="text-gray-300 mb-8 leading-relaxed">
                My expertise spans the entire development lifecycle, from initial concept 
                and design to deployment and maintenance. I'm committed to writing clean, 
                maintainable code and staying up-to-date with the latest technologies and 
                best practices.
              </p>

              {/* Skills Grid */}
              <div className="grid grid-cols-2 gap-3">
                {skills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={inView ? { opacity: 1, scale: 1 } : {}}
                    transition={{ duration: 0.5, delay: 0.4 + index * 0.1 }}
                    className="glass p-3 rounded-lg text-center hover-lift"
                  >
                    <span className="text-sm text-gray-300">{skill}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Right Column - Stats */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <div className="grid grid-cols-2 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, y: 30 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
                  whileHover={{ scale: 1.05 }}
                  className="glass-card p-6 rounded-xl text-center hover-lift"
                >
                  <stat.icon className="h-8 w-8 text-blue-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.value}
                  </div>
                  <div className="text-gray-300 text-sm">
                    {stat.label}
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Experience Timeline */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.8, delay: 1 }}
              className="mt-8 glass-card p-6 rounded-xl"
            >
              <h4 className="text-xl font-bold text-white mb-4">Experience</h4>
              <div className="space-y-4">
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-semibold">Senior Full-Stack Developer At Vigorous Technologies</h5>
                    <p className="text-gray-400 text-sm">2023 - Present</p>
                    <p className="text-gray-300 text-sm">Leading development of enterprise web applications</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-semibold">Full-Stack Developer At Techhive Solution</h5>
                    <p className="text-gray-400 text-sm">2020 - 2022</p>
                    <p className="text-gray-300 text-sm">Developed scalable web solutions for various clients</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <div className="w-3 h-3 bg-blue-400 rounded-full mt-2"></div>
                  <div>
                    <h5 className="text-white font-semibold">Junior Web Developer At WTechSol</h5>
                    <p className="text-gray-400 text-sm">2019 - 2020</p>
                    <p className="text-gray-300 text-sm">Started journey in web development</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default About
