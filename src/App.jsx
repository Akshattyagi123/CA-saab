import { useState } from 'react'
import './assets/swiper.css';
import './App.css'
import TestimonialSlider from './components/TestimonialSlider';
import { IoLogoInstagram } from "react-icons/io";
import { CiLinkedin } from "react-icons/ci";
import { FaLongArrowAltDown } from "react-icons/fa";
import { LuMouse } from "react-icons/lu";
import { IoIosArrowDown } from "react-icons/io";
import { IoIosArrowRoundForward } from "react-icons/io";


function App() {

  const [openSection, setOpenSection] = useState("");
  const [activeTab, setActiveTab] = useState("work");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? "" : section);
  };

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <div className=''>
      <header className="header" id="header">
        <nav className="nav container">
          <a href="#" className="nav__logo">
            CA Divy Jain
          </a>
          <div className="nav__menu" id="nav-menu">
            <ul className="nav__list grid">
              <li className="nav__item">
                <a href="#home" className="nav__link">
                  <i className="uil uil-estate nav__icon" />
                  Home
                </a>
              </li>
              <li className="nav__item">
                <a href="#about" className="nav__link">
                  <i className="uil uil-user nav__icon" />
                  About
                </a>
              </li>
              <li className="nav__item">
                <a href="#skills" className="nav__link">
                  <i className="uil uil-file-alt nav__icon" />
                  Skills
                </a>
              </li>
              <li className="nav__item">
                <a href="#qualification" className="nav__link">
                  <i className="uil uil-briefcase-alt nav__icon" />
                  Experience
                </a>
              </li>
              <li className="nav__item">
                <a href="#services" className="nav__link">
                  <i className="uil uil-setting nav__icon" />
                  Services
                </a>
              </li>
              <li className="nav__item">
                <a href="#contact" className="nav__link">
                  <i className="uil uil-message nav__icon" />
                  Contact
                </a>
              </li>
            </ul>
            <i className="uil uil-times nav__close" id="nav-close" />
          </div>
          <div className="nav__btns">
            <i className="uil uil-moon change-theme" id="theme-button" />
            <div className="nav__toggle" id="nav-toggle">
              <i className="uil uil-apps" />
            </div>
          </div>
        </nav>
      </header>

      <div className="home__container container grid">
        <div className="home__content grid">
          <div className="home__social">
            <a
              href="https://www.linkedin.com/in/ca-divy-jain-a97922132/"
              target="_blank"
              className="home__social-icon"
            >
              <CiLinkedin />
            </a>
            <a href="https://www.linkedin.com/in/ca-divy-jain-a97922132/"
              target="_blank"
              className="home__social-icon"
            >
              <IoLogoInstagram />
            </a>

          </div>
          <div className="home__img">
            <svg
              className="home__blob"
              viewBox="0 0 200 187"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <mask id="mask0" mask-type="alpha">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346 165.547
                        130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403 129.362C2.45775
                        97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028 -0.149132 97.9666
                        0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
              </mask>
              <g mask="url(#mask0)">
                <path
                  d="M190.312 36.4879C206.582 62.1187 201.309 102.826 182.328 134.186C163.346
                        165.547 130.807 187.559 100.226 186.353C69.6454 185.297 41.0228 161.023 21.7403
                        129.362C2.45775 97.8511 -7.48481 59.1033 6.67581 34.5279C20.9871 10.1032 59.7028
                        -0.149132 97.9666 0.00163737C136.23 0.303176 174.193 10.857 190.312 36.4879Z"
                />
                <image
                  className="home__blob-img"
                  xlinkHref="/CA saab website.jpg"
                />
              </g>
            </svg>
          </div>
          <div className="home__data">
            <h3 className="home__intro">Hi, my name is</h3>
            <h1 className="home__title">CA Divy Jain</h1>
            <h3 className="home__subtitle">
              <span id="introduction">DI</span>
              <span className="input__cursor" />
            </h3>
            <p className="home__description">
              I'm a passionate Chartered Accountant with experience in handling
              Accounting, Auditing, and Taxation matters.
            </p>
            <a href="#contact" className="button button--flex">
              Contact Me
              <i className="uil uil-message button__icon" />
            </a>
          </div>
        </div>
        <div className="home__scroll">
          <a href="#about" className="home__scroll-button button--flex">
            <LuMouse />
            <span className="home__scroll-name">Scroll Down</span>
            <FaLongArrowAltDown />
          </a>
        </div>
      </div>


      <div className="about__container container grid">
        <img
          src="/CA saab.jpg"
          alt="My Beautiful Pic"
          className="about__img"
        />
        <div className="about__data">
          <p className="about__description">
            A tech-savvy Chartered Accountant with the mindset of delivering excellent
            Accounting, Auditing, and Taxation (Direct and Indirect) services to
            clients.
            <br />
            <br />
            Always up for solving client problems, learning new things and playing
            with numbers!
          </p>
          <div className="about__info">
            <div>
              <span className="about__info-title">7+</span>
              <span className="about__info-name">
                Years <br /> Experience
              </span>
            </div>
            <div>
              <span className="about__info-title">₹ 2 Cr+</span>
              <span className="about__info-name">
                Client <br /> Cost Savings
              </span>
            </div>
            <div>
              <span className="about__info-title">4+</span>
              <span className="about__info-name">
                Organizations <br /> Exposure
              </span>
            </div>
          </div>
          <div className="about__buttons">
            <a
              download=""
              href="./packages/pdf/CA Divy Jain_Resume.pdf"
              className="button button--flex"
            >
              Download Resume
              <i className="uil uil-download-alt button__icon" />
            </a>
          </div>
        </div>
      </div>

      <section className="skills section" id="skills">
      <h2 className="section__title">Skills</h2>
      <span className="section__subtitle">Technical Skillset</span>
      <div className="skills__container container grid">
        <div className=''>
          {/* Direct Taxation Section */}
          <div className={`skills__content ${openSection === "taxation" ? "skills__open" : "skills__close"} `}>
            <div className="skills__header flex justify-between items-center " onClick={() => toggleSection("taxation")}>
              <div>
                <i className="uil uil-bill skills__icon" />
                <h1 className="skills__title">Direct Taxation</h1>
                <span className="skills__subtitle">More than 7 years</span>
              </div>
              <IoIosArrowDown className={`text-[#57b2e0] ${openSection === "taxation" ? "rotate-180" : ""} transition-all duration-300`} />
            </div>
            {openSection === "taxation" && (
              <div className="skills__list grid  ">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Search, Scrutiny and Appeal Proceedings</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Faceless E Assessment Proceedings</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Income Tax Returns</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__70" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Intimations</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__70" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Audit Management Section */}
          <div className={`skills__content ${openSection === "audit" ? "skills__open" : "skills__close"}`}>
            <div className="skills__header flex justify-between items-center" onClick={() => toggleSection("audit")}>
              <div>
                <i className="uil uil-file-lock-alt skills__icon" />
                <h1 className="skills__title">Audit Management</h1>
                <span className="skills__subtitle">More than 7 years</span>
              </div>
              <IoIosArrowDown className={`text-[#57b2e0] ${openSection === "audit" ? "rotate-180" : ""} transition-all duration-300`} />
            </div>
            {openSection === "audit" && (
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Statutory Audits</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Internal Audits</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Government / ULB Audits</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__70" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Bank Audits</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__70" />
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Softwares and Utilities Section */}
          <div className={`skills__content ${openSection === "software" ? "skills__open" : "skills__close"}`}>
            <div className="skills__header flex justify-between items-center" onClick={() => toggleSection("software")}>
              <div>
                <i className="uil uil-desktop skills__icon" />
                <h1 className="skills__title">Softwares and Utilities</h1>
                <span className="skills__subtitle">More than 9 years</span>
              </div>
              <IoIosArrowDown className={`text-[#57b2e0] ${openSection === "software" ? "rotate-180" : ""} transition-all duration-300`} />
            </div>
            {openSection === "software" && (
              <div className="skills__list grid">
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">CompuOffice (Tax/TDS/GST)</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Tally 7.2/9/ERP</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">Finacle, BaNCS (Banking)</h3>
                    <span className="skills__number">70%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__70" />
                  </div>
                </div>
                <div className="skills__data">
                  <div className="skills__titles">
                    <h3 className="skills__name">MS Office</h3>
                    <span className="skills__number">80%</span>
                  </div>
                  <div className="skills__bar">
                    <span className="skills__percentage skills__80" />
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>


      <section className="qualification__section section" id="qualification">
        <h2 className="section__title">Experience</h2>
        <span className="section__subtitle">The Journey</span>
        <div className="qualification__container container">
          <div className="qualification__tabs">
            <div
              className={`qualification__button button--flex ${
                activeTab === "work" ? "qualification__active" : ""
              }`}
              onClick={() => setActiveTab("work")}
            >
              <i className="uil uil-briefcase-alt qualification__icon" />
              Work
            </div>
            <div
              className={`qualification__button button--flex ${
                activeTab === "education" ? "qualification__active" : ""
              }`}
              onClick={() => setActiveTab("education")}
            >
              <i className="uil uil-graduation-cap qualification__icon" />
              Education
            </div>
          </div>
          <div className="qualification__sections">
            {/*==================== QUALIFICATION CONTENT 1 ====================*/}
            <div
              className={`qualification__content ${
                activeTab === "work" ? "qualification__active" : "hidden"
              }`}
              id="work"
            >
              {/*==================== QUALIFICATION 1 ====================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Audit and Tax Partner</h3>
                  <span className="qualification__subtitle3">
                    Agrawal Mahendra &amp; Co.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2022 - Present
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
              {/*==================== QUALIFICATION 2 ====================*/}
              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualification__title">Audit and Tax Partner</h3>
                  <span className="qualification__subtitle3">
                    Agrawal Jain &amp; Co.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2020 - 2022
                  </div>
                </div>
              </div>
              {/*==================== QUALIFICATION 3 ====================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">Audit and Tax Manager</h3>
                  <span className="qualification__subtitle3">
                    Sanjay Jhabak &amp; Co.
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2018 - 2020
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
              {/*==================== QUALIFICATION 4 ====================*/}
              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualification__title">Articleship</h3>
                  <span className="qualification__subtitle3">Begani And Begani</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2013 - 16
                  </div>
                </div>
              </div>
            </div>
            {/*==================== QUALIFICATION CONTENT 2 ====================*/}
            <div className={`qualification__content ${
              activeTab === "education" ? "qualification__active" : " hidden"
            }`}
            id="education">
              {/*==================== QUALIFICATION 1 ====================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Diploma in Information Systems (DISA)
                  </h3>
                  <span className="qualification__subtitle3">ICAI</span>
                  <br />
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2019
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
              {/*==================== QUALIFICATION 2 ====================*/}
              <div className="qualification__data">
                <div />
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
                <div>
                  <h3 className="qualification__title">Chartered Accountant</h3>
                  <span className="qualification__subtitle3">ICAI</span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2012 - 2018
                  </div>
                </div>
              </div>
              {/*==================== QUALIFICATION 3 ====================*/}
              <div className="qualification__data">
                <div>
                  <h3 className="qualification__title">
                    Bachelor of Commerce (BCom)
                  </h3>
                  <span className="qualification__subtitle3">
                    Pt. Ravishankar Shukla University
                  </span>
                  <div className="qualification__calendar">
                    <i className="uil uil-calendar-alt" />
                    2012 - 2015
                  </div>
                </div>
                <div>
                  <span className="qualification__rounder" />
                  <span className="qualification__line" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>


      <section className="services section" id="services">
        <h2 className="section__title">Services</h2>
        <span className="section__subtitle">Freelance Offerings</span>
        <div className="services__container container grid">
        <div className="services__content">
      <div>
        <i className="uil uil-rupee-sign skills__icon" />
        <h3 className="services__title">
          Taxation
          <br />
        </h3>
      </div>
      <span
        className="button button--flex button--small button--link services__button"
        onClick={toggleModal}
      >
        View more
        <IoIosArrowRoundForward/>
      </span>
      {isModalOpen && (
        <div className="services__modal">
          <div className="services__modal-content">
            <h4 className="services__modal-title">
              Direct and Indirect Taxation
              <br />
            </h4>
            <i
              className="uil uil-times services__modal-close"
              onClick={toggleModal}
            />
            <ul className="services__modal-services grid">
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon" />
                <p>Tax Planning and Consultation</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon" />
                <p>Preparation and filing of Tax Returns</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon" />
                <p>Attending Assessment Proceedings</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon" />
                <p>Preparation and filing of Tax Appeals</p>
              </li>
              <li className="services__modal-service">
                <i className="uil uil-check-circle services__modal-icon" />
                <p>Attending Appellate Proceedings</p>
              </li>
            </ul>
          </div>
        </div>
      )}
    </div>
          <div className="services__content">
            <div>
              <i className="uil uil-file-lock-alt skills__icon" />
              <h3 className="services__title">
                Auditing
                <br />{" "}
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View more
              <i className="uil uil-arrow-right button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Auditing Services
                  <br />
                </h4>
                <i className="uil uil-times services__modal-close" />
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Statutory Audit under Corporate and Income Tax Laws</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Diligent Audit and Investigation</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Statutory Audits of Bank Branches</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Accounting and Preparation of Accounting Procedure Manuals</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="services__content">
            <div>
              <i className="uil uil-arrow skills__icon" />
              <h3 className="services__title">
                Advisory
                <br />
              </h3>
            </div>
            <span className="button button--flex button--small button--link services__button">
              View more
              <i className="uil uil-arrow-right button__icon" />
            </span>
            <div className="services__modal">
              <div className="services__modal-content">
                <h4 className="services__modal-title">
                  Consultation and Advisory
                  <br />
                </h4>
                <i className="uil uil-times services__modal-close" />
                <ul className="services__modal-services grid">
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Business Planning and Cost Management</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Tax Advisory - New and Pending Matters</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Consultancy - Procedures and Legal Matters</p>
                  </li>
                  <li className="services__modal-service">
                    <i className="uil uil-check-circle services__modal-icon" />
                    <p>Business Registration and Enablement</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>


      <TestimonialSlider />


      <section className="contact section" id="contact">
        <h2 className="section__title">Contact Me</h2>
        <span className="section__subtitle">Get In Touch</span>
        <div className="contact__container container grid">
          <div>
            <div className="contact__information">
              <i className="uil uil-linkedin home__social-icon" />
              <div>
                <h3 className="contact__title">Let's Connect !</h3>
                <span className="contact__subtitle">
                  <a
                    href="https://www.linkedin.com/in/ca-divy-jain-a97922132/"
                    target="_blank"
                    className="contact__link"
                  >
                    CA Divy Jain (LinkedIn)
                  </a>
                </span>
              </div>
            </div>
            <div className="contact__information">
              <i className="uil uil-envelope-alt home__social-icon" />
              <div>
                <h3 className="contact__title">E-mail</h3>
                <span className="contact__subtitle">ca.divyjain@gmail.com</span>
              </div>
            </div>
            <div className="contact__information">
              <i className="uil uil-map-marker home__social-icon" />
              <div>
                <h3 className="contact__title">Office</h3>
                <span className="contact__subtitle">
                  46, Vivekanand Nagar, Raipur (CG)
                </span>
              </div>
            </div>
          </div>
          <form
            method="post"
            onsubmit="sendEmail(); reset(); return false;"
            className="contact__form grid"
          >
            <div className="contact__inputs grid">
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  Name
                </label>
                <input type="text" id="name" className="contact__input" required="" />
              </div>
              <div className="contact__content">
                <label htmlFor="" className="contact__label">
                  E-mail
                </label>
                <input
                  type="email"
                  id="email"
                  className="contact__input"
                  required=""
                />
              </div>
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                className="contact__input"
                required=""
              />
            </div>
            <div className="contact__content">
              <label htmlFor="" className="contact__label">
                Description
              </label>
              <textarea
                name=""
                id="description"
                cols={0}
                rows={5}
                className="contact__input"
                required=""
                defaultValue={""}
              />
            </div>
            <div className="contact__button">
              <button type="submit" className="button button--flex">
                Send Message
                <i className="uil uil-message button__icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </div>
  )
}

export default App
