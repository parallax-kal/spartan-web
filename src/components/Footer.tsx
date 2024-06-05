import { FC } from 'react';
import { footerItems } from '@/lib/constants';
import Link from 'next/link';
import { Mail, Phone } from 'lucide-react';
import { Icons } from './Icons';

const Footer: FC = () => {
  return (
    <div className="mt-14 flex w-full flex-col items-center px-4 sm:px-10">
      <div className="mt-10 flex">
        <div className="grid w-full grid-cols-2 gap-5 md:grid-cols-4 md:gap-10 lg:grid-cols-[1.5fr,repeat(4,minmax(0,1fr))] xl:grid-cols-[2.5fr,repeat(4,minmax(0,1fr))]">
          <div className="col-span-2 space-y-3 place-self-center md:col-span-4 lg:col-span-1 lg:place-self-auto">
            <h3 className="text-lg font-bold">Contact information</h3>
            <div className="flex items-center gap-2">
              <Link href={'#'}>
                <Icons.contact.instagram />
              </Link>
              <Link href={'#'}>
                <Icons.contact.whatsup />
              </Link>
              <Link href={'#'}>
                <Icons.contact.twitter />
              </Link>
              <Link href={'#'}>
                <Icons.contact.phone />
              </Link>
            </div>
            <div className="flex items-center gap-2">
              <Mail size={15} />
              spartan@gmail.com
            </div>
            <div className="flex items-center gap-2">
              <Phone size={15} />
              0045 26 71 99 53
            </div>
          </div>
          {footerItems.map((e, i) => (
            <div key={i} className="flex w-fit flex-col">
              <h2 className="xs:text-lg mb-4 text-base font-bold leading-tight">{e.title}</h2>
              {e.items.map((e, i) =>
                e.as == 'link' ? (
                  <Link
                    key={i}
                    href={e.link}
                    className="xs:text-sm my-1 text-xs leading-tight text-[#5D5C5C]"
                  ></Link>
                ) : (
                  <p key={i} className="my-1 text-sm text-[#5D5C5C]">
                    {e.value}
                  </p>
                )
              )}
            </div>
          ))}
        </div>
      </div>
      <div className="w-full border-t-2 py-3 text-center">
        <p className="text-sm text-[#606060] sm:text-base">Privacy Policy | Terms & Conditions</p>
      </div>
    </div>
  );
};

export default Footer;
