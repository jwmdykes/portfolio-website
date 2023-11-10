import ProjectCard from "@/app/ProjectCard";
import ArrowLink from "@/app/ArrowLink";
import React from "react";

export default function Projects() {
    return (
        <>
            <h3>Projects</h3>
            <div className='flex flex-col gap-20'>
                <ProjectCard
                    thumbnail='/images/electron-popup-dict-github.webp'
                    title='Creating a Popup Dictionary with Electron'
                    description='A popup dictionary created in electron for easy access to a dictionary while reading books, browsing the web or any other task. Since it is built in electron it works in any application, and it is extensible to any language since it is based on online dictionaries.'
                    alt='Thumbnail for Popup Dictionary Project'
                    skills={['Electron', 'Javascript', 'HTML/CSS', 'Python']}
                ></ProjectCard>
                <ProjectCard
                    thumbnail='/images/korean-ebook-reader-project.webp'
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
                    thumbnail='/images/web-synthesizer.webp'
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
        </>
    )
}