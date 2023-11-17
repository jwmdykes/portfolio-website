import Link from "next/link";
import React from "react";

export default function ClosingRemarks() {
    return (
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
            <Link href='https://www.digitalocean.com/'>
                <em className='text-dark-white-color'>Digital Ocean</em>
            </Link>
            .
        </p>
    )
}