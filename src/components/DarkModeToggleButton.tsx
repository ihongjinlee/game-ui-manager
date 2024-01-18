import { useState } from 'react';
import SunIcon from './ui/icons/SunIcon';
import MoonIcon from './ui/icons/MoonIcon';

export default function DarkModeToggle() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const handleDarkMode = () => {
    setIsDarkMode((prevMode) => !prevMode);
    document.documentElement.classList.toggle('dark');
  };

  return (
    <button className='text-sm font-bold' onClick={handleDarkMode}>
      {isDarkMode ? <SunIcon /> : <MoonIcon />}
    </button>
  );
}
