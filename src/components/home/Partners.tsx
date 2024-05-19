import { FC } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { partners } from '@/lib/constants';
import Image from 'next/image';

interface PartnersProps {}

const Partners: FC<PartnersProps> = ({}) => {
  return (
    <MaxWidthWrapper className="mb-10 mt-24 hidden items-center justify-between lg:flex">
      {partners.map((e, i) => (
        <Image key={i} src={e} quality={100} height={50} width={200} alt="spartans parter" />
      ))}
    </MaxWidthWrapper>
  );
};

export default Partners;
