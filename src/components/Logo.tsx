import { logo } from '@/assets/images';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface LogoProps {
  asLink?: boolean;
}

const Logo: FC<LogoProps> = ({ asLink = false }) => {
  if (asLink) return <Link href={'/'} aria-label="spartans link" />;
  return (
    <Image
      alt="spartans logo"
      quality={100}
      src={logo}
      width={100}
      height={50}
      className="object-contain"
    />
  );
};

export default Logo;
