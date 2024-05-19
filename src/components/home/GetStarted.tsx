import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import { gettingStartedSteps } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';

interface GetStartedProps {}

const GetStarted: FC<GetStartedProps> = ({}) => {
  return (
    <div className="relative h-full w-full">
      <div className="absolute left-0 top-0 z-0 h-full w-full -skew-y-6 bg-primary-green/[18%]" />
      <div className="relative z-10 flex w-full flex-col items-center py-32">
        <LargeHeading>How to get started</LargeHeading>
        <p className="mt-10 px-8 text-center sm:max-w-lg">
          Here&apos;s the services that we offer to you, to ensure both your baby&apos;s health and
          your personal security
        </p>
        <MaxWidthWrapper className="mt-10 flex w-full flex-wrap items-center justify-center gap-10">
          {gettingStartedSteps.map(({ title, description }, i) => (
            <div
              key={i}
              className="flex max-w-[20rem] rounded-2xl bg-white p-5 pb-10 shadow-[0_3px_10px_rgb(0,0,0,0.2)]"
            >
              <div className="font-semibold">
                <span className="m-2 border-r-2 border-r-[#D9D9D9] px-2 py-1 text-lg">{i + 1}</span>
              </div>
              <div className="">
                <h3 className="mb-4 text-lg font-bold text-[#3F3F3F]">{title}</h3>
                <p className="text-sm leading-tight">{description}</p>
              </div>
            </div>
          ))}
        </MaxWidthWrapper>
        <p className="mt-20 max-w-md px-8 text-center text-[#3949D2]">
          We offer you 2 months trying our system for free
        </p>
      </div>
    </div>
  );
};

export default GetStarted;
