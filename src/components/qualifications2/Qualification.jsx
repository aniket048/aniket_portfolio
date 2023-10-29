import React from 'react';
import { useState } from 'react';
import "./qualification.css";

const Qualification = () => {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <section className="qualification section" id="qualification">
      <h2 className="section__title">Qualification</h2>
      <span className="section__subtitle">My Personal Journey</span>

      <div className="qualification__container container">
        <div className="qualification__tabs">
          <div className={toggleState === 1 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(1)}>
            <i className="uil uil-graduation-cap qualification__icon"></i>{" "}
            Education
          </div>

          <div className={toggleState === 2 ? "qualification__button qualification__active button--flex" : "qualification__button button--flex"} onClick={() => toggleTab(2)}>
            <i className="uil uil-book-alt qualification__icon"></i>{" "}
            Courses
          </div>
        </div>

        <div className="qualification__sections">
          <div className={toggleState === 1 ? "qualification__content qualification__content-active" : "qualification__content"}>
            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">BTech in IT</h3>
                <span className="qualification__subtitle">IIIT Lucknow</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2020 - Present
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">IIT-JEE</h3>
                <span className="qualification__subtitle">Narayana Coaching Center</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2018 - 2020
                </div>
              </div>

            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">HSC 12th</h3>
                <span className="qualification__subtitle">Maharashtra State Board</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2019-2020
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">SSC 10th</h3>
                <span className="qualification__subtitle">CBSE Board</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  2017 - 2018
                </div>
              </div>

            </div>

          </div>

          <div className={toggleState === 2 ? "qualification__content qualification__content-active" : "qualification__content"}>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Database Management System</h3>
                <span className="qualification__subtitle">SEM IV</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  January 2022
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Computer Networks</h3>
                <span className="qualification__subtitle">SEM IV</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  January 2022
                </div>
              </div>

            </div>

            <div className="qualification__data">

              <div>
                <h3 className="qualification__title">Object Oriented Programming</h3>
                <span className="qualification__subtitle">SEM II</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  February 2021
                </div>
              </div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

            </div>

            <div className="qualification__data">
              <div></div>

              <div>
                <span className="qualification__rounder"></span>
                <span className="qualification__line"></span>
              </div>

              <div>
                <h3 className="qualification__title">Operating System</h3>
                <span className="qualification__subtitle">SEM IV</span>
                <div className="qualification__calendar">
                  <i className="uil uil-calendar-alt"></i>{" "}
                  January 2022
                </div>
              </div>

            </div>

          </div>
        </div>
      </div>

    </section>
  )
}

export default Qualification
