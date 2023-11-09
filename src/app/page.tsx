"use client"

import Link from 'next/link';
import ExperienceCard from './ExperienceCard';
import ProjectCard from './ProjectCard';
import BackgroundOvals from './BackgroundOvals';
import MobileOvals from './MobileOvals';
import ArrowLink from './ArrowLink';

import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faEnvelope} from '@fortawesome/free-solid-svg-icons';
import {faGithub, faLinkedin} from '@fortawesome/free-brands-svg-icons';
import React, {useRef} from 'react';
import {SectionLinks} from "@/app/sectionLinks";

export default function Home() {
  const aboutRef = useRef<HTMLDivElement | null>(null);
  const experienceRef = useRef<HTMLDivElement | null>(null);
  const projectsRef = useRef<HTMLDivElement | null>(null);


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
          <div
              className='flex flex-col justify-between gap-12 md:gap-4 md:max-h-screen w-full md:w-1/2 pt-12 md:py-24 z-10 md:top-0 md:sticky'>
            <div className='flex flex-col space-y-2'>
              <h1>John Dykes</h1>
              <h2>Programmer and Mathematician</h2>
            </div>
            <SectionLinks refs={[aboutRef, experienceRef, projectsRef]}/>
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
                      href='https://www.linkedin.com/in/john-dykes-136a9385/'
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
                I&apos;ve had an interest in mathematics and programming for almost
                as long as I can remember. I first got into programming as a kid
                tinkering around making games in Pygame, and haven&apos;t looked back
                since.
              </p>
              <p className='pb-5'>
                Outside of{' '}
                <a href={'https://www.cyber.gc.ca/en'}>
                  <em>my job</em>
                </a>{' '}
                as a cryptographic researcher, I spend most of my time
                programming making{' '}
                <Link href={'/projects'}>
                  <em>web apps</em>
                </Link>
                . Some of the web technologies I&apos;ve worked the most are React,
                TailwindCSS, Next.js. On the more mathematical and machine
                learning side of things, I have used a lot of Python (sometimes{' '}
                <Link href={'https://www.sagemath.org/'}>
                  <em>SageMath</em>
                </Link>
                ), Mathematica, and R.
              </p>
              <p>
                When I&apos;m not doing math or programming, you may find me playing
                the piano, or studying Korean!
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
                      'Geo-computation',
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
                      'Python/SageMath',
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
                    href='https://medium.com/@98johndykes'
                    text='View All Projects'
                ></ArrowLink>
              </div>
            </section>
            <p className='pt-24 md:py-24 text-dark-neutral-color'>
              Designed in{' '}
              <Link href='https://www.figma.com/'>
                <em className='text-dark-white-color'>Figma</em>
              </Link>
              , coded in{' '}
              <Link href='https://code.visualstudio.com/'>
                <em className='text-dark-white-color'>Visual Studio Code</em>
              </Link>{' '}
              using{' '}
              <Link href='https://nextjs.org/'>
                <em className='text-dark-white-color'>Next.js</em>
              </Link>{' '}
              and{' '}
              <Link href='https://tailwindcss.com/'>
                <em className='text-dark-white-color'>Tailwind CSS</em>
              </Link>
              . Deployed with{' '}
              <Link href='https://cloud.google.com/'>
                <em className='text-dark-white-color'>Google Cloud</em>
              </Link>
              .
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
