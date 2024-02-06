'use client';

import packageJson from '../../package.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useEffect } from 'react';

const menu = [
  {
    href: 'ui',
    name: 'UI 목록',
  },
  {
    href: 'year',
    name: '연도별',
  },
  {
    href: 'user',
    name: '개발자',
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
    <div className='flex justify-between items-center h-[90px] px-4 py-1 text-gray-900 dark:text-gray-300'>
      <div className='flex flex-col items-start'>
        <h1 className='text-2xl'>
          <Link href={`/`}>GAME UI</Link>
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
                pathName?.split('/')[1] === href
                  ? 'text-lg font-bold dark:text-yellow-400'
                  : ''
              }`}
            >
              <Link href={`/${href}`}>{name}</Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
}
