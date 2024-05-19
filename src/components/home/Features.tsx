import { FC } from 'react';
import VideoPulse from '../pulse/VideoPulse';
import LargeHeading from '../ui/LargeHeading';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { lexend } from '@/lib/fonts';
import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import { baby, babySuckingFinger, homeFeaturesCreep, mammy } from '@/assets/images';
import Image from 'next/image';

interface FeaturesProps {}

const Features: FC<FeaturesProps> = ({}) => {
  return (
    <div className="w-full bg-gradient-to-b from-[#FFDF8B]/20 from-0% to-white to-50% py-14">
      <LargeHeading className="text-center">Our Features</LargeHeading>
      <MaxWidthWrapper className="flex flex-col lg:flex-row">
        <div className="mt-20 flex flex-1 justify-end">
          <div className="-auto relative mr-[15%] h-56 w-3/5 rounded-md bg-black sm:ml-0 sm:h-96 sm:w-3/5">
            <Image src={mammy} alt="happy mammy" fill quality={100} className="object-cover" />
            <div className="absolute bottom-0 right-0 h-1/3 w-1/2 translate-x-1/3 translate-y-1/2 rounded-md bg-white">
              <div className="m-2 h-full w-full rounded-md bg-green-500">
                <Image
                  src={babySuckingFinger}
                  alt="happy mammy"
                  fill
                  quality={100}
                  className="object-cover"
                />
              </div>
            </div>
            <div className="absolute right-0 top-10 translate-x-1/2">
              <VideoPulse />
            </div>
            <div className="absolute -left-16 bottom-10 flex items-center gap-4 rounded-md bg-white p-2 pr-10 shadow-lg sm:-left-1/4 sm:p-3">
              <div className="h-5 w-5 rounded-full bg-[#16A034] sm:h-10 sm:w-10" />
              <div className="flex flex-col">
                <p className="text-[0.5rem] text-[#A8A8A8] sm:text-xs">call this number</p>
                <a href="tel:+250 799 999 999" className="whitespace-nowrap text-xs sm:text-sm">
                  +250 799 999 999
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-20 flex-1">
          <p className={cn(lexend.className, 'text-[#06345F]')}>$ how we protect babies</p>
          <LargeHeading className="my-6 max-w-lg lg:text-2xl">
            Connect and Learn from different care centers globally{' '}
          </LargeHeading>
          <p className="font-semibold">we connect you with other parents across the world</p>
          <p className="my-4 text-[#989898]">
            Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti
            unix.
          </p>
          <ul className="mb-8 list-inside list-disc">
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
          </ul>
          <Link
            href={'#'}
            className="group flex w-fit rounded-md bg-secondary-gray py-1 pl-3 pr-1 text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            <span className="text-sm">Discover more</span>
            <ArrowUpRight
              size={15}
              className="-rotate-1 transition-all duration-300 group-hover:-translate-y-[0.1rem] group-hover:translate-x-[0.1rem]"
            />
          </Link>
        </div>
      </MaxWidthWrapper>
      <MaxWidthWrapper className="flex flex-col lg:mt-20 lg:flex-row">
        <div className="mt-10 flex-1 lg:mt-20">
          <p className={cn(lexend.className, 'text-[#06345F]')}>$ how we protect babies</p>
          <LargeHeading className="my-6 max-w-lg lg:text-2xl">
            Connect and Learn from different care centers globally{' '}
          </LargeHeading>
          <p className="font-semibold">we connect you with other parents across the world</p>
          <p className="my-4 text-[#989898]">
            Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti
            unix.
          </p>
          <ul className="mb-8 grid list-disc grid-cols-2 gap-3 [&>li]:ml-3">
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
            <li>Lorem ipsum sat amet consectutur adionscinci</li>
          </ul>
          <Link
            href={'#'}
            className="group flex w-fit rounded-md bg-secondary-gray py-1 pl-3 pr-1 text-white transition-all hover:scale-105 hover:shadow-lg"
          >
            <span className="text-sm">Discover more</span>
            <ArrowUpRight
              size={15}
              className="-rotate-1 transition-all duration-300 group-hover:-translate-y-[0.1rem] group-hover:translate-x-[0.1rem]"
            />
          </Link>
        </div>
        <div className="order-first mt-10 flex-1 lg:order-last lg:mt-20">
          <Image src={homeFeaturesCreep} alt="spartans creep" height={600} width={800} />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Features;
