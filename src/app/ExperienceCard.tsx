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
      <div className='hover:before:border-t hover:before:border-[#ffffff2c] hover:before:backdrop-blur-3xl hover:before:drop-shadow-2xl hover:before:stroke hover:before:bg-gradient-to-br hover:before:from-[#ffffff1a] hover:before:to-transparent before:rounded-md before:absolute before:-z-10 before:-top-5 before:-bottom-5 before:-right-8 before:-left-8 relative z-10 flex flex-col gap-4'>
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
