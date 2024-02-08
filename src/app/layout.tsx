import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: { default: 'MCU CHARACTERS', template: 'MCU CHARACTERS | %s' },
  description: 'MCU 캐릭터와 레고',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en'>
      <body
        className={`${openSans.className} w-full bg-neutral-100 dark:bg-gray-800 overflow-auto`}
      >
        <header className='sticky top-0 z-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
          <Navbar />
        </header>
        <main className='w-full flex justify-center max-w-screen-xl mx-auto'>
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
      </body>
    </html>
  );
}
