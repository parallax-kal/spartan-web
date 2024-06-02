import Banner from '@/components/home/Banner';
import ContactUs from '@/components/home/ContactUs';
import Faqs from '@/components/home/Faqs';
import Features from '@/components/home/Features';
import GetStarted from '@/components/home/GetStarted';
import Partners from '@/components/home/Partners';
import Services from '@/components/home/Services';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Spartan | Home"
}


export default function Home() {
  return (
    <main className="w-full">
      <Banner />
      <Partners />
      <Services />
      <Features />
      <GetStarted />
      <Faqs />
      <ContactUs />
    </main>
  );
}
