'use client';

import packageJson from '../../package.json';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import DarkModeToggleButton from './DarkModeToggleButton';

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
  const pathName = usePathname();

  return (
    <div className='flex justify-between items-center h-[90px] px-4 py-1 text-gray-900 dark:text-gray-300'>
      <div className='flex items-end'>
        <h1 className='text-2xl'>
          <Link href={`/`}>GAME UI</Link>
        </h1>
        <h2 className='text-sm text-center text-gray-500 ml-2 hover:text-gray-400'>
          ver{packageJson.version}
        </h2>
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
      <div>
        <ul>
          <li>
            <DarkModeToggleButton />
          </li>
        </ul>
      </div>
    </div>
  );
}
