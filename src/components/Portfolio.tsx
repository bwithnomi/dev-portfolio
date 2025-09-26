'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { ExternalLink, Github, Eye } from 'lucide-react'

const Portfolio = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const projects = [
    {
      id: 1,
      title: 'Titans Pet',
      description: 'Full-stack e-commerce solution built with Laravel and Vue.js, Sell your pets online.',
      image: './titans.png',
      technologies: ['Laravel', 'Vue.js', 'MySQL', 'AWS'],
      live: 'https://titanspet.pk/',
      featured: true,
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'Modern task management application with real-time collaboration features built with React and Laravel.',
      image: './medhr.png',
      technologies: ['React', 'Laravel', 'MySQL', 'Socket.io', 'AWS'],
      live: 'https://medaxishr.com/',
      featured: true,
    },
    {
      id: 3,
      title: 'Appointly',
      description: 'Appointment booking system for businesses.',
      image: './appiontly.png',
      technologies: ['Next.js', 'TypeScript', 'Chart.js', 'AWS', 'Tailwind CSS', 'MySQL'],
      live: 'https://appointly.co.uk/',
      featured: true,
    },
    {
      id: 4,
      title: 'Global Links',
      description: 'Global Links is a platform for businesses to connect with customers.',
      image: './globallinks.png',
      technologies: ['Laravel','socket.io','MySQL', 'AWS'],
      live: 'https://globallinks.se/',
      featured: false,
    },
    {
      id: 5,
      title: 'Carelinks',
      description: 'Carelinks is a platform for care providers to connect with patients.',
      image: './carelinks.png',
      technologies: ['Laravel','socket.io','MySQL', 'AWS'],
      live: 'https://carelinks.se/',
      featured: true,
    },
    {
      id: 6,
      title: 'Sultanate',
      description: 'Sultanate is a platform for businesses to connect with customers.',
      image: './sultan.png',
      technologies: ['Vue.js','Laravel', 'AWS'],
      live: 'https://sultanate.co.uk/',
      featured: false,
    },
    {
      id: 7,
      title: 'Clickmage',
      description: 'Clickmage is a platform for businesses to connect with customers.',
      image: './xadmin.png',
      technologies: ['react','Laravel', 'AWS'],
      live: 'https://xadmin.clickmage.com/l',
      featured: false,
    },
  ]

  return (
    <section id="portfolio" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text-blue">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            A showcase of my recent projects and the technologies I've worked with
          </p>
        </motion.div>

        {/* Featured Projects */}
        <div className="mb-16">
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-2xl font-bold mb-8 text-white"
          >
            Featured Projects
          </motion.h3>
          <div className="grid lg:grid-cols-2 gap-8">
            {projects
              .filter(project => project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.3 + index * 0.2 }}
                  whileHover={{ y: -10 }}
                  className="glass-card rounded-2xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-4">
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass-card p-3 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Github className="h-6 w-6" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass-card p-3 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <ExternalLink className="h-6 w-6" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-xl font-bold text-white mb-3">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 mb-4 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-blue-600 bg-opacity-20 text-blue-300 text-sm rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <motion.h3
            initial={{ opacity: 0, x: -30 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="text-2xl font-bold mb-8 text-white"
          >
            Other Projects
          </motion.h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {projects
              .filter(project => !project.featured)
              .map((project, index) => (
                <motion.div
                  key={project.id}
                  initial={{ opacity: 0, y: 50 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: 0.9 + index * 0.1 }}
                  whileHover={{ y: -5 }}
                  className="glass-card rounded-xl overflow-hidden group"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center space-x-3">
                      <motion.a
                          href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass p-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Github className="h-4 w-4" />
                      </motion.a>
                      <motion.a
                        href={project.live}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        className="glass p-2 rounded-full hover:bg-blue-600 transition-colors"
                      >
                        <Eye className="h-4 w-4" />
                      </motion.a>
                    </div>
                  </div>
                  <div className="p-4">
                    <h4 className="text-lg font-bold text-white mb-2">
                      {project.title}
                    </h4>
                    <p className="text-gray-300 text-sm mb-3 leading-relaxed">
                      {project.description}
                    </p>
                    <div className="flex flex-wrap gap-1">
                      {project.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2 py-1 bg-blue-600 bg-opacity-20 text-blue-300 text-xs rounded"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
          </div>
        </div>

        {/* View More Button */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 1.2 }}
          className="text-center mt-12"
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="glass-card px-8 py-3 rounded-full text-white hover:bg-blue-600 transition-all duration-300"
          >
            View More Projects
          </motion.button>
        </motion.div>
      </div>
    </section>
  )
}

export default Portfolio
