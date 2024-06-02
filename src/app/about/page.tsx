import { babyIncreep, babyabout } from '@/assets/images';
import { Icons } from '@/components/Icons';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import Articles from '@/components/about/Articles';
import Members from '@/components/about/Members';
import LargeHeading from '@/components/ui/LargeHeading';
import { ArrowRight, Play } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import { FC } from 'react';


export const metadata: Metadata = {
  title: "About us"
}

const page: FC = () => {
  return (
    <main className="w-full overflow-x-hidden pt-32">
      <MaxWidthWrapper className="flex w-full flex-col items-center justify-between gap-5 md:flex-row">
        <div className="relative h-fit max-w-lg p-5 md:p-10">
          <Icons.corner className="absolute right-0 top-0 hidden h-14 w-14 md:block" />
          <Icons.corner className="absolute bottom-0 left-0 hidden h-14 w-14 rotate-180 md:block" />
          <p className="text-lg font-bold">
            Welcome to Spartan, where our commitment to keeping safe children is rooted in a deep
            understanding of the challenges faced by parents.
          </p>
        </div>
        <Image
          src={babyabout}
          height={200}
          width={400}
          alt="baby image"
          quality={100}
          className="hidden md:block"
        />
      </MaxWidthWrapper>
      <div className="w-full bg-primary-slate/30 py-14">
        <MaxWidthWrapper className="flex flex-col">
          <LargeHeading className="mb-5">Our Team</LargeHeading>
          Our dedicated and passionate team drives the mission of Spartan forward. Meet the
          individuals behind the scenes, from experts in technology to community outreach. Together,
          we bring expertise and innovation to every aspect of our project. We are always looking
          for passionate and talented people to join our team. For information on vacancies please
          check our LinkedIn or contact <strong>hello@Spartan.com</strong>
          <Members />
          <div className="mt-10 hidden justify-center md:flex [&>*]:px-6 [&>*]:py-8">
            <h1 className="relative whitespace-nowrap text-end text-xl font-bold after:absolute after:bottom-0 after:right-0 after:h-1/2 after:w-1 after:bg-[#D9D9D9] lg:flex-1">
              Our Values
            </h1>
            <p className="text-sm font-semibold lg:flex-1">
              Our core values are the foundation of Spartan. We&apos;re committed to transparency,
              sustainability, and community-centric solutions. Learn more about the principles that
              guide our work and partnerships.
            </p>
          </div>
          <p className="ml-auto mt-8 flex items-center self-end text-[#008000] md:hidden">
            {' '}
            More <ArrowRight />
          </p>
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper className="pt-10">
        <p className="font-semi-bold max-w-md">
          Explore the Spartan tools&apos;s functionalities and their results
        </p>
        <div className="relative my-10 flex h-[35rem] w-full items-center justify-center overflow-hidden rounded-md bg-slate-300 shadow-[0_0_26px_0_RGBA(0,0,0,0.2)]">
          <Image
            src="/nuna-cove-air.jpeg"
            alt="baby in spartans creep"
            fill
            quality={100}
            className="object-cover"
          />
          <div className="ringa rounded-full bg-white/[64%] p-5">
            <Play size={50} fill="white" color="white" />
          </div>
        </div>
        <Articles />
      </MaxWidthWrapper>
    </main>
  );
};

export default page;
