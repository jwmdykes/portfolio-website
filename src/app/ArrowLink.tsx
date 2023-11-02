import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';

export default function ArrowLink(props: { href: string; text: string }) {
  return (
    <Link href={props.href}>
        <div className='flex gap-2 items-center text-dark-white-color hover:cursor-pointer hover:underline underline-offset-8 font-semibold decoration-body-highlight-color group'>
          <span className='whitespace-nowrap font-mono tracking-wide leading-5'>
            {props.text}
          </span>
          <FontAwesomeIcon icon={faArrowRight} size={'1x'} className='relative top-[1px] left-0 group-hover:translate-x-2 transition-transform duration-200 ease-in-out'/>
        </div>
    </Link>
  );
}
