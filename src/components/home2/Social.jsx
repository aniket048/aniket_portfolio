import React from 'react';

const Social = () => {
  return (
    <div className="home__social">
      <li>
        <a
          href="https://github.com/aniket048"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer">
          {/* <i className="uli uil-github-alt"></i> */}
          <i className="bx bxl-github"></i>
        </a>
        <span className="tooltiphome">Github</span>
      </li>

      <li>
        <a
          href="https://www.linkedin.com/in/aniket-ukharde-743401205/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer">
          {/* <i className="uil uil-linkedin"></i> */}
          <i className='bx bxl-linkedin'></i>
        </a>
        <span className="tooltiphome">LinkedIn</span>
      </li>

      <li>
        <a
          href="https://leetcode.com/aniket048/"
          className="home__social-icon"
          target="_blank"
          rel="noreferrer">
          <i className='bx bx-code-alt'></i>
        </a>
        <span className="tooltiphome">Leetcode</span>
      </li>

    </div>
  )
}

export default Social
