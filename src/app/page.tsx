'use client';

import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import BackgroundOvals from './BackgroundOvals';
import NavigationElement from './NavigationElement';
import MobileOvals from './MobileOvals';
import ArrowLink from './ArrowLink';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { useState, useEffect, useRef } from 'react';

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const activeSectionUpdatedRef = useRef(activeSection);
  activeSectionUpdatedRef.current = activeSection;
  const disconnecting = useRef(false);

  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);

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
            }
          } else {
            const previousSection = getPreviousSection(
              activeSectionUpdatedRef.current
            );
            if (previousSection) {
              setActiveSection(previousSection);
            }
          }
        }
      });
    };

    const observer = new IntersectionObserver(callbackFunction, options);

    Object.values(sections).forEach(
      (sectionRef: React.RefObject<HTMLDivElement>) => {
        console.log(sectionRef.current)
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
    <div className='relative bg-background-color min-h-screen flex flex-row justify-center p-4 md:py-0 md:px-20'>
      <div className='hidden md:block'>
        <BackgroundOvals></BackgroundOvals>
      </div>
      <div className='block md:hidden'>
        <MobileOvals></MobileOvals>
      </div>

      <div className='container'>
        <div className='flex flex-col md:flex-row text-body-text-color justify-between gap-4 md:gap-20'>
          {/* Fixed column */}
          <div className='flex flex-col justify-between gap-12 md:gap-4 md:max-h-screen w-full md:w-1/2 pt-12 md:py-24 z-10 md:top-0 md:sticky'>
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
              <p className='pb-5'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. In elit
                lectus, scelerisque eu tempus tristique, suscipit nec tellus.
                Aliquam ut <em>pulvinar ligula</em>. Sed rutrum urna in arcu
                lacinia, at ultrices quam pellentesque. Proin id rhoncus lectus.
              </p>
              <p className='pb-5'>
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
            <section className='pt-24' id='experience' ref={experienceRef}>
              <h3>My Experience</h3>
              <div className='flex flex-col gap-20'>
                <ExperienceCard
                  href='https://www.cyber.gc.ca/en'
                  skills={['Cryptography', 'Python', 'Mathematics', 'C/C++']}
                  company='Canadian Centre for Cyber Security'
                  date='2020 — Present'
                  title='Cryptanalyst'
                  description='Researching and implementing cryptographic algorithms in order to ensure cryptographic primitives used to protect Government of Canada communications continue to be effective in light of anticipated quantum computing advancements.'
                ></ExperienceCard>
                <ExperienceCard
                  href='https://ised-isde.canada.ca/site/communications-research-centre-canada/en'
                  skills={[
                    'Geocomputation',
                    'Python',
                    'R',
                    'Statistics',
                    'Machine Learning',
                  ]}
                  company='Communications Research Centre Canada'
                  date='2019 — 2020'
                  title='Computer Research Programmer'
                  description='Worked on a team applying machine learning and Geocomputation to telecommunications data, including estimating the interference that cellular towers have on each other.'
                ></ExperienceCard>
                <ExperienceCard
                  href='https://uwaterloo.ca/pure-mathematics/'
                  company='University of Waterloo'
                  title='Master of Mathematics'
                  date='Jan — Dec 2018'
                  description="For my master's degree in Pure Mathematics, I worked with Dr. Yu-Ru Liu from the University of Waterloo. Studied Waring’s problem in Number Theory, in particular using Vinogradov’s Mean Value Theorem."
                  skills={[
                    'Mathematics',
                    'Number Theory',
                    'Mathematica',
                    'Pathon/SageMath',
                  ]}
                ></ExperienceCard>
                <ExperienceCard
                  href='https://carleton.ca/math/'
                  company='Carleton University'
                  date='2014 — 2017'
                  title='Bachelor of Mathematics, Honours'
                  description="After taking two courses at Carleton University during the summer while being homeschooled and receiving A+s in both, I was accepted into the math program in the fall of 2014. I graduated with high distinction in December 2017. I made use of my Python programming skills during a Dean Summer Research Internship (DSRI) scholarship with Dr. Yuly Billig and during my Honour's project with Dr. Brett Stevens."
                  skills={['Mathematics', 'MATLAB', 'Python']}
                ></ExperienceCard>
              </div>
              <div className='mt-16 flex justify-end'>
                <ArrowLink
                  href='/resume.pdf'
                  text='View Full Resume'
                ></ArrowLink>
              </div>
            </section>
            <section className='pt-24' id='projects' ref={projectsRef}>
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
                <ProjectCard
                  thumbnail='/images/web-synthesizer.png'
                  title='Building a Synthesizer Using the Web Audio API'
                  alt='Thumbnail for synthesizer project'
                  description='Creating a basic subtractive synthesizer using tools provided by the web audio API. Works both with a midi keyboard, or via the provided virtual keyboard. The interface was created using the DaisyUI tailwind component library, and ReactJS.'
                  skills={[
                    'Javascript',
                    'Typescript',
                    'HTML',
                    'CSS',
                    'TailwindCSS',
                    'React',
                    'DaisyUI',
                  ]}
                ></ProjectCard>
              </div>
              <div className='mt-16 flex justify-end'>
                <ArrowLink
                  href='#'
                  text='View All Projects'
                ></ArrowLink>
              </div>
            </section>
            <p className='pt-24 md:py-24 text-dark-neutral-color'>
              Designed in{' '}
              <Link href='https://www.figma.com/'>
                <em>Figma</em>
              </Link>
              , coded in{' '}
              <Link href='https://code.visualstudio.com/'>
                <em>Visual Studio Code</em>
              </Link>{' '}
              using{' '}
              <Link href='https://nextjs.org/'>
                <em>Next.js</em>
              </Link>{' '}
              and{' '}
              <Link href='https://tailwindcss.com/'>
                <em>Tailwind CSS</em>
              </Link>
              . Deployed with{' '}
              <Link href='https://cloud.google.com/'>
                <em>Google Cloud</em>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
