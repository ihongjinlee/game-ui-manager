import { useTheme } from '@/context/ThemeContext';
import { BarLoader } from 'react-spinners';

export default function BarSpinner() {
  const { isDarkMode } = useTheme();

  return <BarLoader color={`${isDarkMode ? 'yellow' : 'black'}`} />;
}
