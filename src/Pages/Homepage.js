import React, { useRef } from 'react';
import './Homepage.css';
import photocollage from '../assets/images/photo-collage.png';
import ProgramComponents from '../components/ProgramComponents';
import StudentPlacement from '../components/StudentPlacement';
import EventsSection from '../components/events';
import CompaniesSection from '../components/CompaniesSection';
import Footer from '../components/Footer/Footer';
import p2e from '../assets/images/image.png';
import useIntersectionObserver from '../hooks/useIntersectionObserver';


const Homepage = () => {
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const programComponentsRef = useRef(null);
  const studentPlacementRef = useRef(null);
  const eventsSectionRef = useRef(null);
  const companiesSectionRef = useRef(null);

  const isContentVisible = useIntersectionObserver({ target: '.banner-text', threshold: 0.1 });
  const isAboutVisible = useIntersectionObserver({ target: '.about', threshold: 0.1 });
  const isProgramComponentsVisible = useIntersectionObserver({ target: '.key-components', threshold: 0.1 });
  const isStudentPlacementVisible = useIntersectionObserver({ target: '.student-placement', threshold: 0.1 });
  const isEventsSectionVisible = useIntersectionObserver({ target: '.event', threshold: 0.1 });
  const isCompaniesSectionVisible = useIntersectionObserver({ target: '.companies-section', threshold: 0.1 });

  return (
    <div className="homepage">
      <div className={`content`}>
        <h1 className='banner-text'>
          <img src={p2e} width={150} alt="P2E" />
          places underrepresented talent at top tech, consulting, and banking companies
        </h1>
      </div>
      <div className={`about`}>
        <div className='image-container1'>
          <img src={photocollage} width={700} alt="Photo Collage" />
        </div>
        <div className='text'>
          <h1 className='title'>Who We Are</h1>
          <h3 className='about-text'>
            Propel2Excel is a non-profit organization that places and connects ambitious students at non-targeted universities
            to professionals in top tier <span>tech, consulting, and banking companies</span> - through the "Ivy League recruiting
            experience".
          </h3>
        </div>
      </div>
      <section className={`key-components`}>
        <ProgramComponents />
      </section>
      <section className={`student-placement`}>
        <StudentPlacement />
      </section>
      <section className={`event`}>
        <EventsSection />
      </section>
      <section className={`companies-section`}>
        <CompaniesSection />
      </section>
      <section>
        <Footer />
      </section>
    </div>
  );
};

export default Homepage;
