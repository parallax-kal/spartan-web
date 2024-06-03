import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import Paragraph from '../Paragraph';
import GetAppBtn from './GetAppBtn';
import { Icons } from '../Icons';
import Image from 'next/image';
import { bannerCreep } from '@/assets/images';

interface BannerProps {}

const Banner: FC<BannerProps> = ({}) => {
  return (
    <div className="flex w-full flex-col md:flex-row">
      <div className="flex w-full flex-col items-center px-10 md:w-1/2 md:items-start md:pt-32 lg:w-2/5 lg:items-center lg:p-5 lg:pt-52">
        <LargeHeading size={'sm'} className="text-center sm:max-w-md md:text-start">
          <span className="text-primary-yellow">Provide</span> a Safe and comfortable place for your
          child
        </LargeHeading>
        <h2 className="my-1 text-base font-semibold leading-tight sm:my-0 sm:mt-8 sm:text-lg">
          Place your order right now
        </h2>
        <button className="mt-3 w-fit rounded-md bg-black px-4 py-1 text-white shadow-[1px_1px_0px_2px_#BDBDBD] transition-all hover:scale-105">
          Order now
        </button>
        <Paragraph size={'large'} className="mt-6 text-[#A8A8A8] lg:hidden">
          Download app || available on
        </Paragraph>
        <div className="!mt-4 ml-20 flex w-fit items-center gap-5 flex-wrap lg:hidden">
          <GetAppBtn
            className="bg-black text-white"
            Icon={Icons.playstore}
            desc="GET IT ON"
            app="Google play"
          />
          <GetAppBtn
            className="bg-black text-white"
            Icon={Icons.apple}
            desc="Download on the"
            app="App Store"
          />
          <a href="/spartan.apk">
            <GetAppBtn
              className="bg-black text-white"
              Icon={Icons.downIcon}
              desc="Download"
              app="Download here"
            />
          </a>
        </div>
      </div>
      <div className="relative right-0 order-first flex w-full flex-col space-y-10 pt-10 text-white md:order-last md:w-1/2 lg:w-3/4 lg:bg-primary-navy lg:px-40 lg:py-52">
        <LargeHeading className="hidden font-extrabold lg:block">
          AI-Powered Child Sleep Safety System
        </LargeHeading>
        <Paragraph size={'large'} className="hidden lg:block">
          Provide parents with a reliable, technologically advanced solution that addresses multiple
          risk factors associated with SIDS, offers peace of mind, and supports better sleep for
          both children and parents.
        </Paragraph>
        <Paragraph size={'large'} className="ml-10 hidden lg:block">
          Available on
        </Paragraph>
        <div className="!mt-4 hidden w-fit items-center gap-5 self-center lg:flex">
          <GetAppBtn Icon={Icons.playstore} desc="GET IT ON" app="Google play" />
          <GetAppBtn Icon={Icons.apple} desc="Download on the" app="App Store" />
          <a href="/spartan.apk">
            <GetAppBtn
              // className="bg-black text-white"
              Icon={Icons.downIcon}
              desc="Download"
              app="Download here"
            />
          </a>
        </div>

        <div className="absolute -bottom-12 right-10 hidden lg:block">
          <Icons.bannerLines />
        </div>
        <div className="-bottom-24 -left-48 self-center px-10 sm:px-0 lg:absolute">
          <Image src={bannerCreep} alt="baby creep" width={400} quality={100} height={400} />
        </div>
      </div>
    </div>
  );
};

export default Banner;
