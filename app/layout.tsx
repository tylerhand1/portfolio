import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  weight: ['400'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tyler's Portfolio",
  description:
    'Tyler Hand is a web developer who specializes in fullstack development.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${robotoFlex.className} antialiased`}>
        <ThemeProvider enableSystem>{children}</ThemeProvider>
      </body>
    </html>
  );
}
