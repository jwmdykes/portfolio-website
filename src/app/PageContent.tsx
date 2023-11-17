"use client"

import React, {useRef} from 'react';
import {SectionLinks} from "@/app/sectionLinks";
import SocialIcons from "@/app/Components/SocialIcons";
import ClosingRemarks from "@/app/Components/ClosingRemarks";
import About from "@/app/Sections/About";
import Experience from "@/app/Sections/Experience";
import Projects from "@/app/Sections/Projects";

export default function PageContent() {
    const aboutRef = useRef<HTMLDivElement | null>(null);
    const experienceRef = useRef<HTMLDivElement | null>(null);
    const projectsRef = useRef<HTMLDivElement | null>(null);

    return (
        <>
            {/* Fixed column */}
            <div
                className='flex flex-col justify-between gap-12 md:gap-4 md:max-dh-screen w-full md:w-1/2 pt-12 md:py-24 z-10 md:top-0 md:sticky'>
                <div className='flex flex-col space-y-2'>
                    <h1>John Dykes</h1>
                    <h2>Programmer and Mathematician</h2>
                </div>
                <SectionLinks refs={[aboutRef, experienceRef, projectsRef]}/>
                <SocialIcons/>
            </div>
            {/* Scrollable column */}
            <div className='relative flex flex-col md:ml-auto md:w-1/2'>
                <section className='pt-24' id='about' ref={aboutRef}>
                    <About></About>
                </section>
                <section className='pt-24' id='experience' ref={experienceRef}>
                    <Experience></Experience>
                </section>
                <section className='pt-24' id='projects' ref={projectsRef}>
                    <Projects></Projects>
                </section>
                <ClosingRemarks></ClosingRemarks>
            </div>
        </>
    )
}