import Link from "next/link";
import React from "react";

export default function About() {
    return (
        <>
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
                <Link href={'https://medium.com/@98johndykes'}>
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
        </>
    )
}