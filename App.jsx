import React, { useState } from 'react';
import './index.css';
import { motion } from 'framer-motion';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  return (
    <div className={`${darkMode ? 'bg-gray-900 text-white' : 'bg-gradient-to-br from-blue-100 to-white text-black'} font-sans min-h-screen transition-colors duration-500`}>

      {/* Navbar */}
      <nav className="flex items-center justify-between px-6 py-4 shadow-md bg-white dark:bg-gray-800">
        <h1 className="text-2xl font-bold">Narasimha Reddy</h1>
        <div className="space-x-4">
          <a href="#about" className="hover:underline">About</a>
          <a href="#skills" className="hover:underline">Skills</a>
          <a href="#resume" className="hover:underline">Resume</a>
          <a href="#contact" className="hover:underline">Contact</a>
          <a href="#certifications" className="hover:underline">Certifications</a>

          <button onClick={() => setDarkMode(!darkMode)} className="ml-4 bg-blue-500 text-white px-3 py-1 rounded">
            {darkMode ? '☀️ Light' : '🌙 Dark'}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="text-center py-16 px-6">
        <motion.h1
          className="text-4xl md:text-6xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Hi, I'm Potireddy Narasimha Reddy
        </motion.h1>
        <motion.p
          className="text-lg md:text-xl text-gray-700 dark:text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          Final Year IT Student | Python Developer | AWS Enthusiast
        </motion.p>
      </section>

      {/* About Me */}
      <section id="about" className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>
        <motion.div
          className="bg-white dark:bg-gray-800 shadow-xl rounded-2xl p-8 text-gray-800 dark:text-gray-100 text-lg leading-relaxed border-l-4 border-blue-500"
          initial={{ opacity: 0, x: 100 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
        >
          <p className="mb-4">
            👋 I’m <strong>Potireddy Narasimha Reddy</strong>, an enthusiastic B.Tech IT final-year student at QIS College of Engineering & Technology.
          </p>
          <p className="mb-4">
            💻 I specialize in Python development, cloud engineering with AWS, and IoT-based smart systems. I enjoy building solutions that connect software and the real world.
          </p>
          <p className="mb-4">
            🚀 Projects like the <strong>Smart Bee Hive Monitoring System</strong> and the AI-powered <strong>Nani Voice Assistant</strong> reflect my passion for innovative tech.
          </p>
          <p className="mb-4">
            🎯 I’m a self-learner who loves exploring new tools and technologies to create something impactful.
          </p>
          <p>📍 Ongole, Andhra Pradesh &nbsp;|&nbsp; 📧 nr178045@gmail.com</p>
        </motion.div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="max-w-4xl mx-auto py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Skills
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center text-lg">
          <div className="hover:scale-105 transition-transform">🐍 Python</div>
          <div className="hover:scale-105 transition-transform">☁️ AWS</div>
          <div className="hover:scale-105 transition-transform">🌐 HTML/CSS</div>
          <div className="hover:scale-105 transition-transform">⚛️ React</div>
          <div className="hover:scale-105 transition-transform">🎨 Tailwind CSS</div>
          <div className="hover:scale-105 transition-transform">🗃️ MySQL</div>
          <div className="hover:scale-105 transition-transform">🛡️ Ethical Hacking</div>
          <div className="hover:scale-105 transition-transform">📱 Android Studio</div>
          <div className="hover:scale-105 transition-transform">🧠 Machine Learning</div>
          <div className="hover:scale-105 transition-transform">📊 Power BI</div>
          <div className="hover:scale-105 transition-transform">🐙 Git & GitHub</div>
          <div className="hover:scale-105 transition-transform">📜 JavaScript</div>
          <div className="hover:scale-105 transition-transform">🔧 Node.js</div>
          <div className="hover:scale-105 transition-transform">🐳 Docker</div>
          <div className="hover:scale-105 transition-transform">🐧 Linux</div>
        </div>
      </section>
      {/* Certifications Section */}
<section id="certifications" className="max-w-4xl mx-auto py-16 px-6">
  <motion.h2
    className="text-3xl md:text-4xl font-bold text-center mb-8"
    initial={{ opacity: 0, y: -30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    Certifications
  </motion.h2>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

    {/* AICTE Python Internship Certificate (Image) */}
    <motion.div
      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-blue-500 hover:scale-105 transition-transform"
      initial={{ opacity: 0, x: -50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">🎓 AICTE Python Full Stack Internship</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        10-week internship focused on full stack Python development and project building.
      </p>
      <img
        src="/narasimha.jpg"
        alt="AICTE Internship Certificate"
        className="rounded-lg border shadow-md w-full"
      />
    </motion.div>

    {/* HP LIFE Certificate (PDF link) */}
    <motion.div
      className="p-4 bg-white dark:bg-gray-800 rounded-xl shadow-lg border-l-4 border-green-500 hover:scale-105 transition-transform"
      initial={{ opacity: 0, x: 50 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className="text-xl font-semibold mb-2">📊 HP LIFE – Data Science & Analytics</h3>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        Completed online course on data science fundamentals with HP LIFE.
      </p>
      <a
        href="/certificate (2).pdf"
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block text-blue-600 dark:text-blue-400 underline font-medium"
      >
        📄 View Certificate
      </a>
    </motion.div>

  </div>
</section>



      {/* Resume Section */}
      <section id="resume" className="text-center py-10 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          My Resume
        </motion.h2>

        <div className="flex justify-center">
          <img
            src={`${process.env.PUBLIC_URL}/resume.jpg`}
            alt="Potireddy Narasimha Reddy Resume"
            className="w-full max-w-3xl border rounded-lg shadow-lg"
          />
        </div>

        <div className="mt-6">
          <a
            href={`${process.env.PUBLIC_URL}/resume.jpg`}
            download="resume.jpg"
            className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition"
          >
            ⬇️ Download Resume
          </a>
        </div>
      </section>

      {/* Contact Form */}
      <section id="contact" className="max-w-2xl mx-auto py-16 px-6">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-center mb-8"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <form className="space-y-6">
          <input type="text" placeholder="Enter your name" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <input type="email" placeholder="Your email" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500" />
          <textarea placeholder="Your Message" rows="5" className="w-full p-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"></textarea>
          <button type="submit" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition">
            Send Message
          </button>
        </form>
      </section>

    </div>
  );
}

export default App;
