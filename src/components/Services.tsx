'use client'

import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { 
  Code2, 
  Server, 
  Database, 
  Cloud, 
  Smartphone, 
  Palette,
  Zap,
  Shield
} from 'lucide-react'

const Services = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const services = [
    {
      icon: Code2,
      title: 'Frontend Development',
      description: 'Modern, responsive web applications using React, Vue.js, and Next.js with beautiful UI/UX design.',
      features: ['React & Next.js', 'Vue.js & Nuxt.js', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Server,
      title: 'Backend Development',
      description: 'Robust server-side applications and APIs using Laravel, Node.js, and Express with scalable architecture.',
      features: ['Laravel Framework', 'Node.js & Express', 'RESTful APIs', 'Microservices', 'Authentication'],
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: Database,
      title: 'Database Design',
      description: 'Optimized database schemas and queries for MySQL, PostgreSQL, and MongoDB with performance tuning.',
      features: ['MySQL & PostgreSQL', 'MongoDB', 'Database Optimization', 'Data Modeling', 'Query Optimization'],
      color: 'from-purple-500 to-pink-500'
    },
    {
      icon: Cloud,
      title: 'Cloud & DevOps',
      description: 'AWS cloud infrastructure setup, CI/CD pipelines, and deployment automation for scalable applications.',
      features: ['AWS Services', 'Docker & Kubernetes', 'CI/CD Pipelines', 'Server Management', 'Monitoring'],
      color: 'from-orange-500 to-red-500'
    },
    {
      icon: Smartphone,
      title: 'Mobile Development',
      description: 'Cross-platform mobile applications using React Native with native performance and beautiful design.',
      features: ['React Native', 'iOS & Android', 'PWA Development', 'Mobile UI/UX', 'App Store Deployment'],
      color: 'from-indigo-500 to-purple-500'
    },
    {
      icon: Zap,
      title: 'Performance Optimization',
      description: 'Application speed optimization, caching strategies, and performance monitoring for better user experience.',
      features: ['Speed Optimization', 'Caching Strategies', 'CDN Setup', 'Performance Monitoring', 'SEO Optimization'],
      color: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Shield,
      title: 'Security & Testing',
      description: 'Comprehensive security implementation, automated testing, and code quality assurance.',
      features: ['Security Audits', 'Automated Testing', 'Code Quality', 'Penetration Testing', 'Compliance'],
      color: 'from-red-500 to-pink-500'
    },
    {
      icon: Palette,
      title: 'UI/UX Design',
      description: 'Beautiful, user-friendly interfaces with modern design principles and accessibility standards.',
      features: ['UI/UX Design', 'Prototyping', 'Accessibility', 'Design Systems', 'User Research'],
      color: 'from-teal-500 to-cyan-500'
    }
  ]

  return (
    <section id="services" className="py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            My <span className="gradient-text-blue">Services</span>
          </h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Comprehensive web development services to bring your ideas to life
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 50 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card p-6 rounded-2xl hover-lift group"
            >
              {/* Icon */}
              <div className={`w-16 h-16 rounded-2xl bg-gradient-to-r ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300`}>
                <service.icon className="h-8 w-8 text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">
                {service.title}
              </h3>
              <p className="text-gray-300 mb-4 leading-relaxed text-sm">
                {service.description}
              </p>

              {/* Features */}
              <div className="space-y-2">
                {service.features.map((feature, featureIndex) => (
                  <motion.div
                    key={feature}
                    initial={{ opacity: 0, x: -20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) + 0.3 }}
                    className="flex items-center space-x-2"
                  >
                    <div className={`w-2 h-2 rounded-full bg-gradient-to-r ${service.color}`}></div>
                    <span className="text-gray-400 text-sm">{feature}</span>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <div className="glass-card p-8 rounded-2xl max-w-4xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">
              Ready to Start Your Project?
            </h3>
            <p className="text-gray-300 mb-6 max-w-2xl mx-auto">
              Let's discuss your requirements and create something amazing together. 
              I'm here to help you achieve your goals with cutting-edge technology and expert development.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-semibold transition-colors duration-300"
              >
                Get Started Today
              </motion.button>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="glass-card text-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all duration-300"
              >
                View Pricing
              </motion.button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}

export default Services
