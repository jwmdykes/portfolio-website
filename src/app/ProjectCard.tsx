import { ReactNode } from 'react';
import SkillsButton from './SkillsButton';
import Image from 'next/image';

interface ProjectCardProps {
  thumbnail: string;
  alt: string;
  title: string;
  description: ReactNode;
  skills: Array<string>;
}

export default function ProjectCard(props: ProjectCardProps) {
  return (
    <div className='md:hover:before:border-t md:hover:before:border-[#ffffff2c] md:hover:before:backdrop-blur-3xl md:hover:before:drop-shadow-2xl md:hover:before:stroke md:hover:before:bg-gradient-to-br md:hover:before:from-[#ffffff1a] md:hover:before:to-transparent before:rounded-md before:absolute before:-z-10 before:-top-5 before:-bottom-5 before:-right-8 before:-left-8 relative z-10 flex flex-col gap-4'>
      <div className='flex flex-row gap-8'>
        <div className='relative text-neutral-color flex min-w-[142px]'>
            <Image src={props.thumbnail} alt={props.alt} layout='fill' objectFit='contain' objectPosition='top'></Image>
        </div>
        <div className='flex flex-col gap-4'>
          <div className='flex flex-col'>
            <span className='font-sans text-highlight-color font-semibold text-xl'>
              {props.title}
            </span>
          </div>
          <p className='text-sm'>
            {props.description}
          </p>
        </div>
      </div>
      <div className='flex gap-4 flex-wrap'>
        {props.skills.map((skill, index) => (
          <SkillsButton key={index} skill={skill}></SkillsButton>
        ))}
      </div>
    </div>
  );
}
