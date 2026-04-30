import Header from '@/components/header';
import './globals.css';
import { Inter } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/next';
import LanguageSwitch from '@/components/language-switch';
import { SpeedInsights } from '@vercel/speed-insights/next';

const inter = Inter({ subsets: ['latin'] });

export const metadata = {
  title: 'Chrisio Gwaan Portoflio',
  description: 'Chrisio is a full-stack software developer with 1 year of experience.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${inter.className} overflow-x-hidden bg-gray-50 text-gray-950 relative pt-24 md:pt-36 dark:bg-gray-900 dark:text-gray-50 dark:text-opacity-90`}
      >
        <ThemeContextProvider>
          <ActiveSectionContextProvider>
            <Header />
            {children}
            <Footer />

            <Toaster position="top-right" />
            <div className="fixed bottom-4 right-4 z-[998] flex gap-2 sm:bottom-5 sm:right-5 sm:gap-3">
              <LanguageSwitch />
              <ThemeSwitch />
            </div>
          </ActiveSectionContextProvider>
        </ThemeContextProvider>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
