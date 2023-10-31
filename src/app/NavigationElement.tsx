export default function NavigationElement(props: {
  focused: boolean;
  href: string;
  text: string;
  onClick: (section: string) => void;
}) {
  const borderColor = props.focused
    ? 'border-white-color'
    : 'border-neutral-color group-hover:border-white-color';

  const textColor = props.focused
    ? 'text-white-color'
    : 'text-neutral-color group-hover:text-white-color';

  const borderWidth = props.focused ? 'w-16' : 'w-8 group-hover:w-16';

  return (
    <li className='flex w-fit items-center gap-2 transition-all duration-300 group'>
      <a
        href={props.href}
        className='flex items-center gap-2'
        onClick={() => props.onClick(props.text.toLowerCase())}
      >
        <div
          className={`${borderColor} ${borderWidth} border-t transition-all duration-300`}
        ></div>
        <span
          className={`font-mono ${textColor} tracking-wider transition-all duration-300`}
        >
          {props.text}
        </span>
      </a>
    </li>
  );
}
