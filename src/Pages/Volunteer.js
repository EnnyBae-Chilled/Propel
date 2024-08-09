import React, { useState, useEffect } from 'react';
import './Volunteer.css';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faInstagram, faTwitter } from '@fortawesome/free-brands-svg-icons';
import apply from '../assets/images/apply.svg';
import mic from '../assets/images/mic.svg';
import mentor from '../assets/images/mentor.svg';
import linkedin from '../assets/images/linkedin (2).svg';
import interview from '../assets/images/interview.svg';
import decision from '../assets/images/tick.svg';
import QuestionOverlay from '../Pages/QuestionOverlay.js';

const Volunteer = () => {
    const [isOverlayVisible, setIsOverlayVisible] = useState(false);
    const [userType, setUserType] = useState(null);

    const showOverlay = () => setIsOverlayVisible(true);
    const hideOverlay = () => setIsOverlayVisible(false);


    const calculateTimeLeft = () => {
        const targetDate = new Date('2024-10-01T00:00:00');
        const currentDate = new Date();
        const difference = targetDate - currentDate;

        let timeLeft = {};

        if (difference > 0) {
            timeLeft = {
                days: Math.floor(difference / (1000 * 60 * 60 * 24)),
                hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
                minutes: Math.floor((difference / 1000 / 60) % 60),
                seconds: Math.floor((difference / 1000) % 60),
            };
        } else {
            timeLeft = {
                days: 0,
                hours: 0,
                minutes: 0,
                seconds: 0,
            };
        }

        return timeLeft;
    };

    const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

    useEffect(() => {
        const timer = setInterval(() => {
            setTimeLeft(calculateTimeLeft());
        }, 1000);

        return () => clearInterval(timer);
    }, []);

    return(
        <div className="volunteer">
            <div className="content2">
                <div className="heroSection-text">
                    <h1>Become A Volunteer</h1>
                </div>
            </div>
            <div className="about2">
                <p className='about-text2'> 
                    At Propel2Excel, each fellow is uniquely positioned to work with personalized mentors in their chosen field. 
                    With access to over 50 mentors from diverse industries and universities, all members can expand their networks 
                    and gain exposure to a wide array of perspectives and experiences. <br></br>
                    The mentor-fellow relationship is a cornerstone of the Propel2Excel experience, 
                    playing a crucial role in helping fellows achieve their goals and succeed in their selected fields.
                </p>
            </div>
            <div className='program2'>
                <h1 className="program-title2">The Program</h1>
                <p className="program-subtitle2">Why Join Propel2Excel?</p>
                <div className="program-cards2">
                    <div className={`card2`}>
                        <div className="icon2">
                            <img src={mic} width={30} alt="mic icon" />
                        </div>
                        <h3>Speaker Series</h3>
                        <p>
                            As industry professionals in tech, banking, and consulting companies, 
                            you will deliver Speaker Series lectures hosted by P2E. 
                            These events allows you to share insights and perspectives gained from years of experience. 
                            By volunteering, you have the opportunity to connect with and groom talented individuals.
                        </p>
                    </div>
                    <div className={`card2`}>
                        <div className="icon2">
                            <img src={mentor} width={30} alt="mentor icon" />
                        </div>
                        <h3>Mentorship</h3>
                        <p>
                            As a volunteer, you would be paired with a talented P2E fellow in your career field who would be your mentee.
                            As a mentor, you will provide career guidance and help your mentee in every step of their application journey.
                        </p>
                    </div>
                    <div className={`card2`}>
                        <div className="icon2">
                            <img src={linkedin} width={30} alt="linkedin icon" />
                        </div>
                        <h3>LinkedIn Rebrand</h3>
                        <p>
                            As a mentor, you would share your insights on having a good LinkedIn profile and resume.
                        </p>
                    </div>
                </div>
            </div>
            <div className='fellowship-requirements2'>
                <h1>Volunteer Requirements</h1>
                <div className="requirements-section2">
                    <h2>Successful mentors should..</h2>
                    <ul>
                        <h3>Academics</h3>
                        <li>At least have a Bachelors Degree in either the tech, banking, or consulting fields.</li>
                        <h3>Relevant Industry Experience</h3>
                        <li>
                            Mentors should have a robust background and a demonstrated history of success in their field, 
                            coupled with a comprehensive understanding of the industry landscape and current trends.
                        </li>
                        <h3>Adaptability and Open-Mindedness</h3>
                        <li>
                            Mentors should be adaptable and open-minded, 
                            capable of working effectively with individuals from diverse backgrounds 
                            and varying skill sets and experiences.
                        </li>
                        <h3>Availability and Commitment</h3>
                        <li>
                            Mentors should be available and committed to meeting with their mentees regularly, 
                            dedicating the time and energy required to cultivate a strong and supportive mentor-mentee relationship.
                        </li>
                        <h3>Passion for Mentorship</h3>
                        <li>
                            Mentors should be passionate about helping others achieve their goals and dedicated to supporting and empowering 
                            their mentees to reach their full potential.
                        </li>
                    </ul>
                </div>
            </div>
            <div className="ready">
                <h1>Interested in becoming a Volunteer?</h1>
                <h4>October Cohort Applications closes in:</h4>
                <div className="application-countdown countdown">
                    <div className="time-section">
                        <div className="time">{timeLeft.days}</div>
                        <div className="label">D</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.hours}</div>
                        <div className="label">H</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.minutes}</div>
                        <div className="label">M</div>
                    </div>
                    <div className="time-section">
                        <div className="time">{timeLeft.seconds}</div>
                        <div className="label">S</div>
                    </div>
                </div>
            </div>
            <div className='footer1'>
                <div className="footer-content1">
                    <div className=''>
                        <button className="footer-button1" onClick={showOverlay}>Apply Now</button>
                    </div>
                    <h2>Not a Volunteer?</h2>
                    <div className="footer-buttons1">
                        <Link to="/fellow">
                            <button className="footer-button1">Become a Fellow</button>
                        </Link>
                        <Link to="/partners">
                            <button className="footer-button1">Become a Partner</button>
                        </Link>
                    </div>
                </div>
                <div className="footer-bottom1">
                    <p>&copy; Propel2Excel 2024. All rights reserved.</p>
                    <div className="footer-social1">
                        <a href="https://www.linkedin.com/company/propel2excel/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faLinkedin} style={{ color: '#fff' }} />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} style={{ color: '#fff' }} />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faTwitter} style={{ color: '#fff' }} />
                        </a>
                    </div>
                    <a href="/privacy-policy">Privacy Policy</a>
                </div>
            </div>
            {isOverlayVisible && (
            <QuestionOverlay
            onClose={hideOverlay}
            isChangingAnswers={true} // Pass appropriate props as needed
            answers={{}}
            setAnswers={() => {}}
            fromHomePage={false}
            initialQuestionIndex={0}
            />
            )}
        </div>
    )
}

export default Volunteer;