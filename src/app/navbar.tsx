import Link from "next/link";

export default function Navbar() {
      return (
        <div className='navbar bg-neutral text-neutral-content'>
          <div className='flex-none'>
            <button className='btn btn-square btn-ghost'>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                fill='none'
                viewBox='0 0 24 24'
                className='inline-block w-5 h-5 stroke-current'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth='2'
                  d='M4 6h16M4 12h16M4 18h16'
                ></path>
              </svg>
            </button>
          </div>
          <div className='flex-1'>
            <Link className='btn btn-ghost normal-case text-xl' href="/">John's Projects</Link>
          </div>
          <div className='flex-none'>
            <ul className='menu menu-horizontal px-1'>
              <li>
                <Link href='/blog'>Blog</Link>
              </li>
              <li>
                <Link href='/resume'>Resume</Link>
              </li>
            </ul>
          </div>
        </div>
      );
}