'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import ArrowBackIcon from '../UI/Icons/ArrowBack';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LightIcon from '../UI/Icons/Light';
import DarkIcon from '../UI/Icons/Dark';

const Header = () => {
  const { theme, setTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleToggleClick = () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <header className="w-full flex justify-between items-center fixed top-0 px-5 h-20">
      <button
        suppressHydrationWarning={true}
        className="cursor-pointer hover:bg-bg-secondary outline-2 outline-fg-tertiary rounded-md p-1.5"
        onClick={handleToggleClick}
      >
        {theme === 'light' ? (
          <LightIcon className="size-5 md:size-7 lg:size-8 fill-amber-400" />
        ) : (
          <DarkIcon className="size-5 md:size-7 lg:size-8 fill-amber-100" />
        )}
      </button>
      {pathname !== '/' && (
        <Link href={'/'}>
          <button className="cursor-pointer hover:bg-bg-secondary outline-2 outline-fg-tertiary rounded-md p-1.5 fill-fg-primary">
            <ArrowBackIcon className="size-5 md:size-7 lg:size-8" />
          </button>
        </Link>
      )}
    </header>
  );
};

export default Header;
