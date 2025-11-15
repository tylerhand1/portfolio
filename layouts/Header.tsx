'use client';

import { useTheme } from 'next-themes';
import Link from 'next/link';
import ArrowBackIcon from '../app/_components/UI/Icons/ArrowBack';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';
import LightIcon from '../app/_components/UI/Icons/Light';
import DarkIcon from '../app/_components/UI/Icons/Dark';

const Header = () => {
  const { setTheme, resolvedTheme } = useTheme();
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setMounted(true);
  }, []);

  const handleToggleClick = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  if (!mounted) return null;

  return (
    <header
      role="banner"
      className="w-full flex justify-between items-center fixed top-0 px-4 h-16 z-999"
    >
      <button
        suppressHydrationWarning={true}
        className="cursor-pointer backdrop-blur-md hover:bg-bg-tertiary focus:bg-bg-tertiary outline-2 outline-fg-tertiary rounded-md p-1.5"
        onClick={handleToggleClick}
        aria-label="Toggle theme"
        aria-pressed={resolvedTheme === 'dark' ? 'true' : 'false'}
      >
        {resolvedTheme === 'light' ? (
          <LightIcon
            aria-hidden="true"
            focusable={false}
            className="size-5 md:size-7 lg:size-8 fill-amber-400"
          />
        ) : (
          <DarkIcon
            aria-hidden="true"
            focusable={false}
            className="size-5 md:size-7 lg:size-8 fill-amber-100"
          />
        )}
      </button>
      {pathname !== '/' && (
        <Link
          className="hover:bg-bg-tertiary outline-2 outline-fg-tertiary rounded-md p-1.5 fill-fg-primary"
          href={'/'}
          aria-label="Go to home page"
        >
          <ArrowBackIcon
            aria-hidden="true"
            focusable={false}
            className="size-5 md:size-7 lg:size-8"
          />
        </Link>
      )}
    </header>
  );
};

export default Header;
