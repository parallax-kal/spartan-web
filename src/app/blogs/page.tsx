import { mammy } from '@/assets/images';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import LargeHeading from '@/components/ui/LargeHeading';
import { Button } from '@/components/ui/button';
import { Metadata } from 'next';
import Image from 'next/image';
import { title } from 'process';
import { FC } from 'react';

export const metadata: Metadata = {
  title: "Blog"
}


interface IBlog {
  title: string;
  image?: string;
  desc: string;
  date: string;
}

const blog = {
  title: 'Revolutionizing with Technology',
  desc: 'Discover the care and protection youcan give to your child to grow safer with affection today.Join for more article Discover the care and protection youcan give to your child to grow safer with affection today.Join for more articleDiscover the care and protection youcan give to your child to grow safer with affection today.Join for more articleDiscover the care and protection youcan give to your child to grow safer with affection today.Join for more article',
  date: 'September 8,2018'
};

const blogs: IBlog[] = [
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog,
  blog
];

const page: FC = ({}) => {
  return (
    <main className="w-full overflow-x-hidden">
      <div className="absolute right-0 top-0 z-0 hidden h-screen w-1/4 bg-primary md:block xl:w-1/3" />
      <div className="absolute left-0 top-[100vh] z-0 hidden h-screen w-40 bg-primary md:block" />
      <MaxWidthWrapper className="relative z-10 flex flex-col p-4 pt-32 sm:pb-10 md:flex-row">
        <div className="h-fit rounded-b-3xl p-4 shadow-[rgba(0,0,0,0.1)0px_4px_10px_-1px,rgba(0,0,0,0.06)_0px_2px_4px_-1px] sm:p-8 sm:pr-14 md:translate-x-4 md:rounded-3xl">
          <LargeHeading>Spartan</LargeHeading>
          <p className="mt-2 max-w-md text-xs text-[#C4C4C4] xs:text-sm sm:text-lg md:text-sm lg:text-base">
            Newest article - September 8,2018
          </p>
          <p className="my-5 max-w-md text-xs text-[#C4C4C4] xs:text-sm sm:text-lg md:my-10 md:text-sm lg:text-base">
            Discover the care and protection youcan give to your child to grow safer with affection
            today.Join for more article
          </p>
          <Button className="h-8 bg-[#333333] px-5 hover:bg-[#333333]/90">Read Article</Button>
        </div>
        <div className="relative order-first h-60 w-full overflow-hidden rounded-t-3xl xs:h-80 sm:h-[30rem] md:order-last md:rounded-3xl">
          <Image
            src={mammy}
            alt="happy mom satisfied with spartans creep"
            fill
            className=" object-cover"
          />
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="relative z-10 mt-16 space-y-8 bg-[#FAFAFA] py-6 md:rounded-3xl ">
        <LargeHeading className="">Most recent blog posts</LargeHeading>
        {blogs.map(({ title, desc, image, date }, i) => (
          <div key={i} className="flex flex-col rounded-md bg-white p-2 md:flex-row">
            <div className="h-64 rounded-md bg-[#D9D9D9] md:w-1/3"></div>
            <div className="flex flex-col justify-between px-4 pb-3 pt-7 md:w-2/3  md:px-10">
              <div className="w-full">
                <h3 className="text-2xl font-bold">{title}</h3>
                <p className="mt-5 text-sm text-[#C4C4C4]">{desc}</p>
              </div>
              <p className="mt-3 text-end text-[#C4C4C4]">{date}</p>
            </div>
          </div>
        ))}
      </MaxWidthWrapper>
    </main>
  );
};

export default page;
