'use client';

import packageJson from '../../package.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const menu = [
  {
    href: '/',
    name: '홈',
  },
  {
    href: '/year',
    name: '영화',
  },
];

export default function Navbar() {
  useEffect(() => {
    const darkModeMediaQuery = window.matchMedia(
      '(prefers-color-scheme: dark)'
    );

    const toggleDarkMode = (
      e: MediaQueryListEvent | MediaQueryList | Event
    ) => {
      if ('matches' in e) {
        document.documentElement.classList.toggle('dark', e.matches);
      }
    };

    toggleDarkMode(darkModeMediaQuery);
    darkModeMediaQuery.addEventListener('change', toggleDarkMode);

    return () => {
      darkModeMediaQuery.removeEventListener('chagne', toggleDarkMode);
    };
  }, []);

  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center h-[70px] sm:h-[90px] px-4 py-1 text-gray-900 dark:text-gray-300'>
      <div className='flex flex-col items-start'>
        <h1 className='text-2xl'>
          <Link href={`/`} aria-label='Home'>
            MCU 캐릭터
          </Link>
        </h1>
        {process.env.NEXT_PUBLIC_RUN_MODE !== 'production' && (
          <h2 className='text-sm text-center text-gray-500'>
            {process.env.NEXT_PUBLIC_RUN_MODE} v{packageJson.version}
          </h2>
        )}
      </div>
      <nav>
        <ul className='flex gap-6 items-center'>
          {menu.map(({ href, name }) => (
            <li
              key={href}
              className={`${
                pathName === href
                  ? 'text-lg font-bold dark:text-yellow-400'
                  : ''
              }`}
            >
              <Link href={href} aria-label={name}>
                {name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
