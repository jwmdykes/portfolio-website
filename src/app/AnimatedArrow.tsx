import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

export default function AnimatedArrow(props: {top: number}) {
    return (
      <FontAwesomeIcon
        icon={faArrowRight}
        size={'1x'}
        className={`inline relative top-[${props.top}px] left-0 group-hover:translate-x-2 transition-transform duration-200 ease-in-out`}
      />
    );
}
