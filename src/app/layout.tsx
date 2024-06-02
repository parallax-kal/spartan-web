import '@/styles/globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import { cn } from '@/lib/utils';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: {
    default: 'Spartan',
    template: '%s | Spartan'
  },
  description: 'Spartan - Provide a Safe and comfortable place for your child',
  applicationName: 'Spartan',
  authors: {
    name: 'Spartan corp',
    url: 'https://spartarncorp.io'
  },
  keywords: [
    'Spartan',
    'Spartan corp',
    'Baby crib',
    'Crib',
    'Baby protector',
    'Baby crib protector',
    'Innovation'
  ],
  publisher: 'KALISA INEZA Giovanni',
  metadataBase: new URL('https://spartancorp.io'),
  openGraph: {
    url: 'https://spartancorp.io',
    title: 'Spartan',
    description: 'Spartan - Provide a Safe and comfortable place for your child',
    images: [
      {
        url: 'https://spartancorp.io/spartan.png',
        width: 1200,
        height: 630,
        alt: 'Spartan'
      }
    ],
    siteName: 'Spartan',
    countryName: 'Rwanda',
    emails: [
      'giovanni@spartancorp.io',
      'ghislain@spartancorp.io',
      'chance@spartancorp.io',
      'faith@spartancorp.io',
      'fadhili@spartancorp.io'
    ],
    phoneNumbers: ['+250785964206', '+250793085164']
  }
};

export default function RootLayout({
  children
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(inter.className, 'w-full overflow-x-hidden bg-white antialiased')}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
