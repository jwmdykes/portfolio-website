import { ReactNode } from 'react';
import SkillsButton from './SkillsButton';

interface ExperienceCardProps {
  company: string;
  date: string;
  title: string;
  description: string;
  skills: Array<string>;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
      <div className='md:hover:before:border-t md:hover:before:border-[#ffffff2c] md:hover:before:backdrop-blur-3xl md:hover:before:drop-shadow-2xl md:hover:before:stroke md:hover:before:bg-gradient-to-br md:hover:before:from-[#ffffff1a] md:hover:before:to-transparent md:hover:cursor-pointer before:rounded-md relative flex flex-col gap-4 z-10 before:absolute before:-z-10 before:-top-5 before:-bottom-5 before:-right-5 before:-left-5 md:before:-top-5 md:before:-bottom-5 md:before:-right-8 md:before:-left-8'>
        <div className='flex flex-row gap-8'>
          <div className='text-neutral-color flex min-w-[142px]'>
            <span>{props.date}</span>
          </div>
          <div className='flex flex-col gap-4'>
            <div className='flex flex-col'>
              <span className='font-sans text-highlight-color font-semibold text-xl'>
                {props.company}
              </span>
              <span className='text-neutral-color font-medium font-sans text-base'>
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
