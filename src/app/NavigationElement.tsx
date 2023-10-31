export default function NavigationElement(props: {
  focused: boolean;
  href: string;
  text: string;
}) {
  if (props.focused) {
    return (
      <>
        <li>
          <a href={props.href} className='flex items-center gap-2'>
            <div className='border-white-color w-16 border-t'></div>
            <span className='font-mono text-white-color tracking-wider'>
              {props.text}
            </span>
          </a>
        </li>
      </>
    );
  } else {
    return (
      <>
        <li className='flex items-center gap-2'>
          <a href={props.href} className='flex items-center gap-2'>
            <div className='border-neutral-color w-8 border-t'></div>
            <span className='font-mono text-neutral-color tracking-wider'>
              {props.text}
            </span>
          </a>
        </li>
      </>
    );
  }
}
