import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import Image, { StaticImageData } from 'next/image';
import { services } from '@/lib/constants';
import MaxWidthWrapper from '../MaxWidthWrapper';

export interface ServicesCardProps {
  Icon: FC | StaticImageData;
  title: string;
  description: string;
}

const ServiceCard: FC<ServicesCardProps> = ({ Icon, title, description }) => (
  <div className="group flex w-full cursor-pointer flex-col items-center rounded-md bg-white p-6 shadow-light transition-all duration-300 hover:scale-105 hover:bg-secondary-green hover:text-white hover:shadow-lg">
    {typeof Icon === 'function' ? (
      <Icon />
    ) : (
      <Image src={Icon} alt={title} height={50} width={50} />
    )}
    <h3 className="my-3 font-semibold">{title}</h3>
    <p className="mb-5 text-sm leading-tight text-[#4C4C4C] group-hover:text-[#E0E0E0]">
      {description}
    </p>
    <p className="text-secondary-green hover:underline group-hover:text-white">Read More</p>
  </div>
);

const Services: FC = ({}) => {
  return (
    <div className="w-full bg-gradient-to-b from-primary-slate/30 to-primary-slate/0 py-14 lg:text-center">
      <MaxWidthWrapper className="flex flex-col space-y-6 lg:items-center">
        <LargeHeading>Our Services</LargeHeading>
        <p className="max-w-xl font-medium">
          There are many variations of passages of lorem ipsum available, but the majority have
          suffered alteration in some form,by injected humour.
        </p>
        <div className="!mt-20 grid w-full gap-5 sm:grid-cols-2 sm:gap-8 md:gap-14 lg:grid-cols-3">
          {services.map(({ Icon, title, description }, i) => (
            <ServiceCard key={i} Icon={Icon} title={title} description={description} />
          ))}
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default Services;
