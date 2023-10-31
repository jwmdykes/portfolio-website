'use client';

import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import BackgroundOvals from './BackgroundOvals';
import NavigationElement from './NavigationElement';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);
  const activeSectionUpdatedRef = useRef(activeSection);
  const disconnecting = useRef(false);

  const handleNavClick = (section: string) => {
    // Set the active section immediately.
    setActiveSection(section);

    // Temporarily disable processing in the observer's callback.
    disconnecting.current = true;

    // Reset the flag after a delay.
    setTimeout(() => {
      disconnecting.current = false;
    }, 300); // Adjust this delay as needed.
  };

  function sectionPositionInViewport(
    element: HTMLElement | null
  ): 'above' | 'below' | 'in' | 'invalid' {
    if (!element) return 'invalid';

    const rect = element.getBoundingClientRect();
    const elementMidpoint = rect.top + rect.height / 2;

    if (elementMidpoint < window.innerHeight / 2) return 'above';
    if (elementMidpoint > window.innerHeight / 2) return 'below';

    return 'in';
  }

  useEffect(() => {
    const sections = {
      about: aboutRef,
      experience: experienceRef,
      projects: projectsRef,
    };
    const sectionOrder = ['about', 'experience', 'projects'];

    const getPreviousSection = (currentSection: string): string | null => {
      const index = sectionOrder.indexOf(currentSection);
      if (index > 0) {
        return sectionOrder[index - 1];
      }
      return null; // if there's no previous section
    };

    const getNextSection = (currentSection: string): string | null => {
      const index = sectionOrder.indexOf(currentSection);
      if (index < sectionOrder.length - 1) {
        return sectionOrder[index + 1];
      }
      return null; // if there's no next section
    };

    const options = {
      root: null,
      threshold: 0.7,
      rootMargin: '0px',
    };

    const callbackFunction = (entries: any) => {
      if (disconnecting.current) return;

      entries.forEach((entry: any) => {
        if (entry.isIntersecting) {
          activeSectionUpdatedRef.current = entry.target.id;
          setActiveSection(entry.target.id);
        } else if (entry.target.id === activeSectionUpdatedRef.current) {
          // Using type assertion here:
          if (
            sectionPositionInViewport(
              sections[entry.target.id as keyof typeof sections].current
            ) === 'above'
          ) {
            const nextSection = getNextSection(activeSectionUpdatedRef.current);
            if (nextSection) {
              setActiveSection(nextSection);
              activeSectionUpdatedRef.current = nextSection;
            }
          } else {
            const previousSection = getPreviousSection(
              activeSectionUpdatedRef.current
            );
            if (previousSection) {
              setActiveSection(previousSection);
              activeSectionUpdatedRef.current = previousSection;
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    Object.values(sections).forEach(
      (sectionRef: React.RefObject<HTMLDivElement>) => {
        if (sectionRef.current) observer.observe(sectionRef.current);
      }
    );

    return () => {
      Object.values(sections).forEach(
        (sectionRef: React.RefObject<HTMLDivElement>) => {
          if (sectionRef.current) observer.unobserve(sectionRef.current);
        }
      );
    };
  }, []);

  return (
    <div className='relative bg-background-color min-h-screen flex flex-row justify-center md:px-20'>
      <BackgroundOvals></BackgroundOvals>

      <div className='container'>
        <div className='flex flex-col md:flex-row text-body-text-color justify-between gap-4'>
          {/* Fixed column */}
          <div className='flex flex-col justify-between gap-12 md:gap-4 md:max-h-screen w-full md:w-1/2 pt-8 md:py-24 z-10 md:top-0 sticky'>
            <div className='flex flex-col space-y-2'>
              <h1>John Dykes</h1>
              <h2>Programmer and Mathematician</h2>
            </div>
            <div className='hidden md:block'>
              <ul className='flex flex-col gap-4'>
                <NavigationElement
                  focused={activeSection == 'about'}
                  href='#about'
                  text='About'
                  onClick={handleNavClick}
                ></NavigationElement>
                <NavigationElement
                  focused={activeSection == 'experience'}
                  href='#experience'
                  text='Experience'
                  onClick={handleNavClick}
                ></NavigationElement>
                <NavigationElement
                  focused={activeSection == 'projects'}
                  href='#projects'
                  text='Projects'
                  onClick={handleNavClick}
                ></NavigationElement>
              </ul>
            </div>
            <div>
              <ul className='flex flex-row gap-5'>
                <li className='hover:text-highlight-color'>
                  <a
                    href='https://github.com/jwmdykes'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='GitHub'
                  >
                    <FontAwesomeIcon
                      icon={faGithub}
                      size='xl'
                      aria-hidden='true'
                    />
                  </a>
                </li>
                <li className='hover:text-highlight-color'>
                  <a
                    href='https://linkedin.com/in/your_username'
                    target='_blank'
                    rel='noopener noreferrer'
                    aria-label='LinkedIn'
                  >
                    <FontAwesomeIcon
                      icon={faLinkedin}
                      size='xl'
                      aria-hidden='true'
                    />
                  </a>
                </li>
                <li className='hover:text-highlight-color'>
                  <a href='mailto:98johndykes@gmail.com' aria-label='Email'>
                    <FontAwesomeIcon
                      icon={faEnvelope}
                      size='xl'
                      aria-hidden='true'
                    />
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* Scrollable column */}
          <div className='relative flex flex-col md:ml-auto md:w-1/2'>
            <section className='pt-24' id='about' ref={aboutRef}>
              <h3>About Me</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
                lectus, scelerisque eu tempus tristique, suscipit nec tellus.
                Aliquam ut <em>pulvinar ligula</em>. Sed rutrum urna in arcu
                lacinia, at ultrices quam pellentesque. Proin id rhoncus lectus.
              </p>
              <p>
                Pellentesque habitant morbi tristique senectus et netus et
                malesuada fames ac turpis <em>egestas</em>. Mauris tincidunt
                lobortis varius. Etiam sed volutpat purus. Curabitur consectetur
                metus in lobortis consectetur. <em>Curabitur</em> ut nisi
                consectetur, <em>tempus</em> dui at, bibendum arcu.
              </p>
              <p>
                Ut nec ipsum ac quam volutpat vehicula nec ac felis. Mauris
                scelerisque orci sit amet nisi lobortis, quis tempor tellus{' '}
                <em>tempor</em>.
              </p>
            </section>
            <section
              className='pt-24'
              id='experience'
              ref={experienceRef}
            >
              <h3>My Experience</h3>
              <div className='flex flex-col gap-20'>
                <ExperienceCard
                  skills={['Cryptography', 'Python', 'Mathematics', 'C/C++']}
                  company='Canadian Centre for Cyber Security'
                  date='2020 — Present'
                  title='Cryptanalyst'
                  description='Researching and implementing cryptographic algorithms in order to ensure cryptographic primitives used to protect Government of Canada communications continue to be effective in light of anticipated quantum computing advancements.'
                ></ExperienceCard>
                <ExperienceCard
                  skills={[
                    'Geocomputation',
                    'Python',
                    'Statistics',
                    'Machine Learning',
                  ]}
                  company='Communications Research Centre Canada'
                  date='2019 — 2020'
                  title='Computer Research Programmer'
                  description='Worked on a team applying machine learning and Geocomputation to telecommunications data, including estimating the interference that cellular towers have on each other.'
                ></ExperienceCard>
              </div>
              <div className='mt-16 flex justify-end'>
                <div className='flex gap-2 hover:cursor-pointer items-end'>
                  <span className='whitespace-nowrap text-base font-mono tracking-wide text-white-color'>
                    View Full Resume
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} width={18} />
                </div>
              </div>
            </section>
            <section
              className='pt-24'
              id='projects'
              ref={projectsRef}
            >
              <h3>Projects</h3>
              <div className='flex flex-col gap-20'>
                <ProjectCard
                  thumbnail='/images/electron-popup-dict-github.png'
                  title='Creating a Popup Dictionary with Electron'
                  description='A popup dictionary created in electron for easy access to a dictionary while reading books, browsing the web or any other task. Since it is built in electron it works in any application, and it is extensible to any language since it is based on online dictionaries.'
                  alt='Thumbnail for Popup Dictionary Project'
                  skills={['Electron', 'Javascript', 'HTML/CSS', 'Python']}
                ></ProjectCard>
                <ProjectCard
                  thumbnail='/images/korean-ebook-reader-project.png'
                  title='Reverse Engineering a Korean eBook app'
                  description='Reverse engineering the DRM of an electron-based Korean eBook app. The purpose of this project was to be able to read my Korean eBooks on my kindle reader.'
                  alt='Thumbnail for Korean eBook Project'
                  skills={[
                    'Reverse Engineering',
                    'Electron',
                    'Javascript',
                    'Cryptography',
                    'Python',
                  ]}
                ></ProjectCard>
              </div>
              <div className='mt-16 flex justify-end'>
                <div className='flex gap-2 hover:cursor-pointer items-end'>
                  <span className='whitespace-nowrap text-base font-mono tracking-wide text-white-color'>
                    View All Projects
                  </span>
                  <FontAwesomeIcon icon={faArrowRight} width={18} />
                </div>
              </div>
            </section>
            <p className='py-24'>
              Designed in <em>Figma</em>, coded in <em>Visual Studio Code</em>{' '}
              using <em>Next.js</em> and <em>Tailwind CSS</em>. Deployed with{' '}
              <em>Google Cloud</em>.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
