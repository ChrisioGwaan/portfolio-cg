import Header from '@/components/header';
import './globals.css';
import { Geist, IBM_Plex_Mono, Inter, Space_Grotesk } from 'next/font/google';
import ActiveSectionContextProvider from '@/context/active-section-context';
import Footer from '@/components/footer';
import ThemeSwitch from '@/components/theme-switch';
import ThemeContextProvider from '@/context/theme-context';
import { Toaster } from 'react-hot-toast';
import { Analytics } from '@vercel/analytics/next';
import LanguageSwitch from '@/components/language-switch';
import { SpeedInsights } from '@vercel/speed-insights/next';
import Providers from './providers';
import SiteBackground from '@/components/site-background';

const geist = Geist({ subsets: ['latin'], variable: '--font-geist' });
const inter = Inter({ subsets: ['latin'], variable: '--font-inter' });
const spaceGrotesk = Space_Grotesk({ subsets: ['latin'], variable: '--font-space-grotesk' });
const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  variable: '--font-ibm-plex-mono',
  weight: ['400', '500', '600'],
});

export const metadata = {
  title: 'Chrisio Gwaan Portfolio',
  description: 'Software engineer building full-stack, AI, and cloud product systems.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="!scroll-smooth" suppressHydrationWarning>
      <body
        className={`${geist.variable} ${inter.variable} ${spaceGrotesk.variable} ${ibmPlexMono.variable} relative min-h-screen overflow-x-hidden pb-36 pt-6 antialiased md:pb-0 md:pt-28`}
      >
        <Providers>
          <ThemeContextProvider>
            <ActiveSectionContextProvider>
              <SiteBackground />
              <Header />
              {children}
              <Footer />

              <Toaster position="top-right" />
              <div className="fixed bottom-4 right-4 z-[998] hidden gap-2 md:flex sm:bottom-5 sm:right-5 sm:gap-3">
                <LanguageSwitch />
                <ThemeSwitch />
              </div>
            </ActiveSectionContextProvider>
          </ThemeContextProvider>
        </Providers>
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  );
}
