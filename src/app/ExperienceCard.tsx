import SkillsButton from './SkillsButton';
import Link from 'next/link';

interface ExperienceCardProps {
  company: string;
  date: string;
  title: string;
  description: string;
  skills: Array<string>;
  href: string;
}

export default function ExperienceCard(props: ExperienceCardProps) {
  return (
      <Link href={props.href}>
        <div className='md:hover:before:border-t md:hover:before:border-[#ffffff2c] md:hover:before:backdrop-blur-3xl md:hover:before:drop-shadow-2xl md:hover:before:stroke md:hover:before:bg-gradient-to-br md:hover:before:from-[#ffffff1a] md:hover:before:to-transparent md:hover:cursor-pointer before:rounded-md relative flex flex-col gap-4 z-10 before:absolute before:-z-10 before:-top-5 before:-bottom-5 before:-right-5 before:-left-5 md:before:-top-5 md:before:-bottom-5 md:before:-right-8 md:before:-left-8'>
          <div className='flex flex-col lg:flex-row gap-1 lg:gap-4'>
            <div className='text-neutral-color lg:text-sm flex lg:min-w-[112px]'>
              <span>{props.date}</span>
            </div>
            <div className='flex flex-col gap-4'>
              <div className='flex flex-col'>
                <span className='font-sans text-highlight-color font-bold md:font-semibold text-xl pb-1'>
                  {props.company}
                </span>
                <span className='text-neutral-color font-semibold md:font-medium font-sanstext-base'>
                  {props.title}
                </span>
              </div>
              <p className='pb-1 md:pb-2 md:text-sm'>
                {props.description}
              </p>
             </div>
          </div>
          <div className='flex gap-x-2 gap-y-2 flex-wrap'>
            {props.skills.map((skill, index) => (
              <SkillsButton key={index} skill={skill}></SkillsButton>
            ))}
          </div>
        </div>
      </Link>
  );
}
