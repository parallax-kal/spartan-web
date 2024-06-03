import { bannerCreep, creep, creep1, shoppingCart, spartansCreep, toys } from '@/assets/images';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import MailInput from '@/components/product/MailInput';
import ProductsCarousel from '@/components/product/ProductsCarousel';
import LargeHeading from '@/components/ui/LargeHeading';
import { Button, buttonVariants } from '@/components/ui/button';
import { qualities } from '@/lib/constants';
import { glory } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { SparkleIcon } from 'lucide-react';
import { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';

interface pageProps {}

export const metadata : Metadata = {
  title: "Product"
} 

const page: FC<pageProps> = ({}) => {
  return (
    <div className={cn(glory.className, 'w-full overflow-x-hidden pt-36')}>
      <MaxWidthWrapper className="w-full">
        <div className="grid w-full gap-7 text-white md:grid-cols-3">
          <div className="relative col-span-2 hidden items-center justify-between rounded-xl bg-[#06345F]/[64%] p-5 md:flex lg:p-10">
            <Image
              src={shoppingCart}
              alt="shopping cart icon"
              width={100}
              height={100}
              className="absolute left-0 top-0 -translate-x-1/2 -translate-y-2/3"
            />
            <div className="max-w-md">
              <h4 className="text-xl font-semibold">Handmade decorative clothes</h4>
              <p className="mb-6 mt-3 max-w-sm">
                New arrivals from handmade masters,Cotton and aluminum in bright red
              </p>
              <Link href={'/products'} className={cn(buttonVariants(),"bg-white px-3 py-1 text-xl font-medium text-black")}>
                Shop now
              </Link>
            </div>
            <div className="h-52 w-52 overflow-hidden rounded-3xl">
              <Image
                src={spartansCreep}
                height={200}
                width={200}
                quality={100}
                alt="spartans creep"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          <div className="relative h-72 overflow-hidden rounded-2xl bg-black font-semibold md:h-full">
            <div className="relative z-10 space-y-5 p-10 md:p-5 lg:p-10">
              <h3 className="text-base sm:text-2xl md:text-base">SALE - 20%</h3>
              <p className="text-base sm:text-2xl md:text-base">
                New arrivals from handmade masters,Cotton and aluminum in bright red
              </p>
              <Link href={'/products'} className={cn(buttonVariants(),"bg-white px-3 py-1  text-xl text-black")}>Shop now</Link>
            </div>
            <Image
              src={toys}
              height={300}
              width={300}
              quality={100}
              alt="toys"
              className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-60"
            />
          </div>
        </div>
      </MaxWidthWrapper>
      <div className="relative py-20">
        <div className="absolute -right-16 top-0  h-[33rem] w-[33rem] translate-x-1/2 rounded-full bg-gradient-to-t from-[#0085FF]/60 from-0% to-[#0085FF]/[0.1] to-90%"></div>
        <MaxWidthWrapper>
          <div className="mb-10 flex items-center justify-between">
            <h3 className="text-2xl font-semibold" style={{ fontStretch: 'condensed' }}>
              FEATURED PRODUCTS
            </h3>
            <Link
              href="#"
              className="hidden text-primary transition-colors hover:underline md:block"
            >
              view all
            </Link>
          </div>
          <ProductsCarousel />
        </MaxWidthWrapper>
      </div>
      <MaxWidthWrapper>
        <div className="flex w-full items-center justify-center rounded-xl  bg-primary-gray">
          <div className="relative m-4 flex w-fit sm:m-12">
            <LargeHeading className="py-5 text-center font-semibold text-white sm:mx-10 sm:max-w-sm sm:py-10">
              Discover Our Latest Trending Product
            </LargeHeading>
            <SparkleIcon className="absolute right-0 top-0 text-3xl" fill="black" />
            <SparkleIcon className="absolute bottom-0 left-0 text-3xl" fill="black" />
          </div>
        </div>
        <div className="my-20 grid gap-5 md:grid-cols-2">
          <div className="relative h-[90vw] w-full overflow-hidden rounded-xl bg-black p-[5vw] md:h-full md:p-4 lg:p-12">
            <Image
              src={creep}
              alt="spartans creep"
              height={500}
              width={500}
              className="absolute left-0 top-0 z-0 h-full w-full object-cover opacity-80"
            />
            <div className="relative z-10">
              <p className="text-[3vw] text-white md:text-base lg:text-xl">LIMITED TIME OFFER</p>
              <p className="text-[5vw] font-extrabold text-primary md:text-2xl lg:text-4xl">
                SAVE
                <br />
                20%
              </p>
            </div>
          </div>
          <div className="hidden flex-col gap-7 md:flex">
            <div className="flex h-full justify-between overflow-hidden rounded-3xl bg-primary-slate">
              <div className="px-5 py-6 lg:px-7 lg:py-10">
                <p className="text-lg font-semibold leading-tight md:max-w-md lg:text-xl">
                  Free shipping on Orders Over
                </p>
                <p className="mt-2 text-3xl text-[#FFA800] lg:mt-5">$50</p>
              </div>
              <div className="w-2/3">
                <Image
                  src={creep1}
                  alt="spartans creep"
                  height={200}
                  width={300}
                  quality={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <div className="flex h-full justify-between overflow-hidden rounded-3xl bg-primary-slate">
              <div className="px-5 py-6 lg:px-7 lg:py-10">
                <p className="max-w-md text-lg font-semibold leading-tight lg:text-xl">
                  {' '}
                  Exclusive discount for new customers
                </p>
              </div>
              <div className="w-2/3">
                <Image
                  src={'/c1.png'}
                  alt="spartans creep"
                  height={200}
                  width={300}
                  quality={100}
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-3 sm:gap-5">
          {qualities.map(({ Icon, title }, i) => {
            return (
              <div
                key={i}
                className="flex min-w-40 flex-col items-center justify-center gap-3 rounded-3xl border border-[#939393] p-3 sm:min-w-60 sm:p-5"
              >
                {typeof Icon === 'function' ? <Icon /> : <Image src={Icon} alt={title} />}
                <p>{title}</p>
              </div>
            );
          })}
        </div>
        <div className="mt-10 flex flex-col justify-between gap-2 lg:flex-row">
          <p className="max-w-2xl text-xl font-bold sm:text-3xl lg:max-w-md">
            Join our resources of Spartan and get the latest activity update into your inbox
            monthly.
          </p>
          <MailInput placeholder="Enter your email here" />
        </div>
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
