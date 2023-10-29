import React, { useState } from 'react';
// import homepage from "../../assets/Homepage.jpg";
import "./services.css";

const Services = () => {
  const [toggleState, setToggleState] = useState(0);

  const toggleTab = (index) => {
    setToggleState(index);
  };

  return (
    <section className="services section" id="project">
      <h2 className="section__title">Projects</h2>
      <span className="section__subtitle">What I have made</span>

      <div className="services__container container grid">
        <div className="services__content">
          <div>
            <i className="uil uil-web-grid services__icon"></i>
            <h3 className="services__title">IIITL Fees <br /> Portal</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(1)}>
            View More
            <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 1 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">


              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">IIITL Fees Portal</h3>
              <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum voluptatum repudiandae, rem assumenda in?</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">HTML, CSS, Javascript, NodeJS, MongoDB</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Created an intuitive fee management platform with features including secure student login, fee payment,
                    and receipt download using cloudinary.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Led the development of an admin dashboard, combining real-time chat, advanced fee tools, and seamless
                    student interaction through Firebase and Cloudinary integration, serving over 1000 users.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Used MongoDB as the database storage solution for its flexibility and efficient data storage capabilities.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info"> Enabled real-time payment updates and graphical fee analytics for informed decision-making.</p>
                </li>
              </ul>

              <div className="githubBtn">
                <a href="https://github.com/aniket048/IIITL_Fees" className="button project_button button--flex" target="_blank" rel="noreferrer">
                  View Github
                </a>
                <a href="https://iiitl-fee-portal.onrender.com/" className="button project_button button--flex" target="_blank" rel="noreferrer">
                  Live Website
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-edit services__icon"></i>
            <h3 className="services__title">IIITL Laundry <br /> System</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(2)}>View More<i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 2 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">IIITL Laundry System</h3>
              <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum voluptatum repudiandae, rem assumenda in?</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">ReactJS, CSS, NodeJS, MongoDB, Express.JS</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Created laundry system with real-time tracking, scheduled pickups, and integrated UI technologies.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Used NodeJS as the backend technology to handle server-side functionalities and ensure smooth
                    communication between the user and the application.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Enhanced user convenience through emergency services, scheduled pickups, and admin insights, serving
                    over 800 users.</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Online platform, automating tasks with features like automated invoices and laundry management.</p>
                </li>
              </ul>

              <div className="githubBtn">
                <a href="https://github.com/aniket048/laundry_webApp" className="button project_button button--flex" target="_blank" rel="noreferrer">
                  View Github
                </a>
              </div>

            </div>
          </div>
        </div>

        <div className="services__content">
          <div>
            <i className="uil uil-arrow services__icon"></i>
            <h3 className="services__title">Scrable <br /> Game</h3>
          </div>

          <span className="services__button" onClick={() => toggleTab(3)}>View More <i className="uil uil-arrow-right services__button-icon"></i></span>

          <div className={toggleState === 3 ? "services__modal active-modal" : "services__modal"}>
            <div className="services__modal-content">
              <i onClick={() => toggleTab(0)} className="uil uil-times services__modal-close"></i>
              <h3 className="services__modal-title">Scrable Game</h3>
              <p className="services__modal-description">Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum harum voluptatum repudiandae, rem assumenda in?</p>

              <ul className="services__modal-services grid">
                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">C + +, Core concepts of OOP s</p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Designed a command-line multiplayer (4-player) game using core concepts of OOPs.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Used more than 5 classes and used Abstraction, Encapsulation, Inheritance, and Polymorphism to
                    interconnect them.
                  </p>
                </li>

                <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Used Class Diagram, Individual Class Analysis and Activity Diagram for this project.
                  </p>
                </li>

                {/* <li className="services__modal-service">
                  <i className="uil uil-check-circle services__modal-icon"></i>
                  <p className="services__modal-info">Design and mockups for companies</p>
                </li> */}
              </ul>

              <div className="githubBtn">
                <a href="https://github.com/aniket048/Scrabble_Game" className="button project_button button--flex" target="_blank" rel="noreferrer">
                  View Github
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Services
