import Link from 'next/link';
import AnimatedArrow from './AnimatedArrow';

export default function ArrowLink(props: { href: string; text: string }) {
  return (
    <Link href={props.href}>
        <div className='flex gap-2 items-center text-dark-white-color hover:cursor-pointer hover:underline underline-offset-8 font-semibold decoration-body-highlight-color group'>
          <span className='whitespace-nowrap font-mono tracking-wide leading-5'>
            {props.text}
          </span>
          <AnimatedArrow top={1}></AnimatedArrow> 
        </div>
    </Link>
  );
}
