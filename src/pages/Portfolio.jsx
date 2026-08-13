import React from 'react'
import Navbar from './Navbar.jsx'
import "./Portfolio.css"

import image from "../assets/Meghna.jpeg"
import hand from "../assets/hand.png"
import mail from "../assets/mail.png"
import linkdlin from "../assets/linkdlin.png"
import github from "../assets/github.png"
import arrow from "../assets/arrow.png"
import job from "../assets/job.png"
import order from "../assets/order.png"
import vehcile from "../assets/vechile.png"

function Portfolio() {
  return (
    <div>
      <Navbar />

      {/* HERO SECTION */}
      <div className="hero">

        <div className="first">
          <h2>
            Meghna Parashar
            <img className="hand" src={hand} alt="" />
          </h2>

          <h1>Mern stack developer</h1>

          <h4>
            I’m a passionate MERN Stack Developer and a Computer Science student
            who enjoys building modern, <br />
            responsive, and user-friendly web applications.
            I work with HTML, CSS, JavaScript, React.js, Node.js, <br />
            Express.js, and MongoDB, and I’m continuously improving my DSA and
            problem-solving skills. <br />
            I love turning ideas into real-world projects and learning new
            technologies along the way. <br />
            I’m currently looking for an opportunity where I can learn,
            contribute, and grow as a developer.
          </h4>
        </div>


        {/* IMAGE */}
        <div className="image-container">
          <img className="image" src={image} alt="Meghna" />
        </div>


        {/* BUTTONS */}
        <div className="second">
          <button className='firstbtn'>View My Work</button>
          <button className='secondbtn'>Contact</button>
        </div>


        {/* SOCIAL ICONS */}
        <div className="third">
          <img className="icons" src={github} alt="Github" />
          <img className="icons" src={linkdlin} alt="LinkedIn" />
          <img className="icons" src={mail} alt="Mail" />
        </div>

      </div>


      {/* ARROW */}
      <div className="arrow">
        <img src={arrow} alt="" />
      </div>


      {/* ABOUT SECTION */}
      <div className="about" id='about'>

        <div className="section-title">
          <h6>01---</h6>
          <h3>About</h3>
        </div>

        <div className="about-content">

          <p>
            I like building things that start as a simple idea and slowly turn
            into something real. That’s probably what I enjoy most about
            development — writing the code is only one part of it; figuring out
            why something isn’t working, trying a different approach, and
            finally seeing it work is the part that keeps me going.
          </p>

          <p>
            I work mainly with the <strong>MERN stack</strong> and enjoy
            creating web applications that are clean, practical, and easy to
            use. Along the way, I’ve built projects involving authentication,
            APIs, databases, dashboards, maps, and real-world problem solving.
          </p>

          <p>
            I’m also working on my <strong>DSA and problem-solving skills</strong>,
            because I want to become better at not just building applications,
            but understanding how to solve problems efficiently.
          </p>

          <p>
            There’s still a lot left to learn — and honestly, that’s what makes
            development exciting for me.
          </p>

        </div>

      </div>


      <hr />


      {/* EXPERIENCE SECTION */}
      <div className="Experince" id='experience'>

        <div className="section-title">
          <h6>02---</h6>
          <h3>Work Experience</h3>
        </div>


        <div className="experience-name">
          <h5>
            DRDO INTERNSHIP
          </h5>

          <h4>
            Defence Research & Development Organisation
          </h4>
        </div>


        <div className="experience-content">

          <p>
            Worked on a technical project involving GPS-based vehicle tracking
            and location visualization. Gained hands-on experience with
            JavaScript, Leaflet, OpenStreetMap, APIs, and real-time location
            tracking while improving my understanding of practical software
            development and problem-solving.
          </p>

          <h6>
            • JavaScript &nbsp; • HTML &nbsp; • CSS &nbsp; • Leaflet.js
            <br />
            • OpenStreetMap &nbsp; • Node.js &nbsp; • Express.js
            <br />
            • MongoDB &nbsp; • Socket.io
          </h6>
        </div>
      </div>
      <hr />

      {/* projects */}

      <div className='p' id='project'>

        <div className='project'>

          <h2><h5>03---</h5>  project
          </h2>
        </div>
        <h3>Featured :- Job Portal</h3>
        <div className='project-content'>

          <div className='box1'> A MERN-based job portal designed to connect students with job and internship opportunities, featuring role-based
            authentication, student and faculty dashboards, job posting, and application management.

          </div>
          <div className='box2'> <img src={job} alt="" /></div>
        </div>
      </div>


      <div className='p'>
        <h3>Featured :- Food delivery website</h3>
        <div className='project-content'>

          <div className='box1'> A responsive food delivery website built with HTML, CSS, and JavaScript, focusing on clean UI, responsive design,
            food browsing, and an intuitive user experience. Developed with the help of ChatGPT for UI ideas, implementation guidance, and debugging.</div>
          <div className='box2'> <img src={order} alt="" /></div>
        </div>

      </div>


      <div className='p'>
        <h3>Featured :- Vechile Tracking </h3>
        <div className='project-content'>

          <div className='box1'> A real-time vehicle tracking system developed to visualize and monitor vehicle locations on an interactive map. The project uses Leaflet.js
            and OpenStreetMap for map visualization, with Node.js, Express.js, MongoDB, and Socket.io for backend services and real-time location updates.</div>
          <div className='box2'> <img src={vehcile} alt="" /></div>
        </div>
      </div>



      {/* skills */}
      <div className="skills-section" id='skills'>

        <div className="skills">
          <h2>
            <span>04 —</span>
            Skills
          </h2>
          <p>Technologies and tools I work with</p>
        </div>

        <div className="skill-content">

          <div className="sbox">
            <div className="skill-icon">⚡</div>
            <h3>Frontend</h3>

            <div className="skill-list">
              <button>HTML</button>
              <button>CSS</button>
              <button>JavaScript</button>
              <button>React.js</button>
              <button>React Router</button>
              <button>Redux Toolkit</button>
              <button>Bootstrap</button>
              <button>Responsive Design</button>
            </div>
          </div>


          <div className="sbox">
            <div className="skill-icon">⚙</div>
            <h3>Backend</h3>

            <div className="skill-list">
              <button>Node.js</button>
              <button>Express.js</button>
              <button>REST APIs</button>
              <button>JWT</button>
              <button>Cookies</button>
              <button>Socket.io</button>
            </div>
          </div>


          <div className="sbox">
            <div className="skill-icon">◆</div>
            <h3>Database</h3>

            <div className="skill-list">
              <button>MongoDB</button>
              <button>Mongoose</button>
              <button>MongoDB Atlas</button>
              <button>Cloudinary</button>
            </div>
          </div>


          <div className="sbox">
            <div className="skill-icon">🛠</div>
            <h3>Tools & Technologies</h3>

            <div className="skill-list">
              <button>Git</button>
              <button>GitHub</button>
              <button>Postman</button>
              <button>VS Code</button>
              <button>Vite</button>
              <button>Leaflet.js</button>
              <button>OpenStreetMap</button>
            </div>
          </div>

        </div>
      </div>

      {/* CONTACT SECTION */}

      <div className="contact-section" id='contact'>

        <div className="skills contact-heading">
          <h2>
            <span>05 —</span>
            Contact Me
          </h2>

          <p>Let's build something amazing together.</p>
        </div>


        <div className="contact-content">

          {/* LEFT SIDE */}

          <div className="contact-intro">

            <h3>Let's talk.</h3>

            <p>
              I’m always open to discussing new opportunities, projects,
              collaborations, or just having a conversation about technology.
            </p>

            <p>
              Feel free to reach out through any of the platforms below.
            </p>

          </div>


          {/* RIGHT SIDE */}

          <div className="contact-links">

            <a
              href="parasharmeghna8@gmail.com"
              className="contact-card"
            >
              <div className="contact-card-icon">
                ✉
              </div>

              <div>
                <span>Email</span>
                <h4>parasharmeghna8@gmail.com</h4>
              </div>

              <span className="contact-arrow">↗</span>
            </a>


            <a
              href="https://www.linkedin.com/in/meghna-parashar-suthar-18a915397"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                in
              </div>

              <div>
                <span>LinkedIn</span>
                <h4>Connect with me</h4>
              </div>

              <span className="contact-arrow">↗</span>
            </a>


            <a
              href="https://github.com/Meghnaparashar810"
              target="_blank"
              rel="noreferrer"
              className="contact-card"
            >
              <div className="contact-card-icon">
                ◉
              </div>

              <div>
                <span>GitHub</span>
                <h4>View my projects</h4>
              </div>

              <span className="contact-arrow">↗</span>
            </a>

          </div>

        </div>

      </div>


      {/* FOOTER */}

      <footer className="footer">

        <div className="footer-left">
          <h3>Meghna Parashar</h3>
          <p>MERN Stack Developer</p>
        </div>

        <div className="footer-center">
          <p>© 2026 Meghna Parashar. All rights reserved.</p>
        </div>
        <div className="footer-right">
          <a
            href="https://github.com/Meghnaparashar810"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/meghna-parashar-suthar-18a915397"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
          <a href="parasharmeghna8@gmail.com">
            Email
          </a>

        </div>
      </footer>

    </div>
  )
}

export default Portfolio