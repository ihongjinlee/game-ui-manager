import './globals.css';
import type { Metadata } from 'next';
import { Open_Sans } from 'next/font/google';
import Navbar from '@/components/Navbar';
import SWRConfigContext from '@/context/SWRConfigContext';

const openSans = Open_Sans({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang='en' className={`dark`}>
      <body className={`${openSans.className} flex flex-col overflow-y-hidden`}>
        <header className='z-10 border-b border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-900'>
          <Navbar />
        </header>
        <main className='grow bg-white dark:bg-gray-800 overflow-x-hidden overflow-y-scroll'>
          <SWRConfigContext>{children}</SWRConfigContext>
        </main>
      </body>
    </html>
  );
}
