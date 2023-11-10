import ExperienceCard from "@/app/ExperienceCard";
import ArrowLink from "@/app/ArrowLink";
import React from "react";

export default function Experience() {
    return (
        <>
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

        </>
    )
}