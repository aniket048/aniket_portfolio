import React from 'react';
import "./footer.css";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Aniket</h1>

                <ul className="footer__list">
                    <li>
                        <a href="#about" className="footer__link">About</a>
                    </li>

                    <li>
                        <a href="#project" className="footer__link">Projects</a>
                    </li>
                    <li>
                        <a href="#skills" className="footer__link">Skills</a>
                    </li>
                </ul>

                <div className="footer__social">
                    <li>
                        <a
                            href="https://github.com/aniket048"
                            className="footer__social-link"
                            target="_blank"
                            rel="noreferrer">
                            <i className="bx bxl-github"></i>
                        </a>
                        <span className="tooltip">Github</span>
                    </li>

                    <li>
                        <a
                            href="https://www.linkedin.com/in/aniket-ukharde-743401205/"
                            className="footer__social-link"
                            target="_blank"
                            rel="noreferrer">
                            <i className='bx bxl-linkedin'></i>
                        </a>
                        <span className="tooltip">LinkedIn</span>
                    </li>

                    <li>
                        <a
                            href="https://leetcode.com/aniket048/"
                            className="footer__social-link"
                            target="_blank"
                            rel="noreferrer">
                            <i className='bx bx-code-alt'></i>
                        </a>
                        <span className="tooltip">Leetcode</span>
                    </li>
                    
                </div>

                <span className="footer__copy">&#169; aniket048. All rights reserved 2023</span>

            </div>
        </footer>
    )
}

export default Footer
