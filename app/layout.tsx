import type { Metadata } from 'next';
import { Roboto_Flex } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import Header from './_components/Header';

const robotoFlex = Roboto_Flex({
  variable: '--font-roboto-flex',
  weight: ['300', '400', '700', '900'],
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: "Tyler Hand's Portfolio",
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
        <ThemeProvider enableSystem scriptProps={{ 'data-cfasync': 'false' }}>
          <Header />
          <main className="min-h-[calc(100dvh-5rem)]">{children}</main>
        </ThemeProvider>
      </body>
    </html>
  );
}
