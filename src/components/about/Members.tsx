'use client';
import { members } from '@/lib/constants';
import { ArrowUpRight, ChevronLeft, ChevronRight, Phone } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { FC, useEffect, useRef, useState } from 'react';

const Members: FC = ({}) => {
  const [chevAppear, setChevApp] = useState<any>({ left: false, right: false });
  const [winObje, setWindow] = useState({});
  const sliderRef = useRef(null);
  const curRef: any = sliderRef.current;
  const memberCardRef = useRef<HTMLDivElement>(null);

  const handleSliderScroll = (e: any) => {
    const slider: any = sliderRef.current;
    const scrollWidth = slider.scrollLeft + slider.offsetWidth;
    const isLeft = slider.scrollLeft > 2;
    const isRight = scrollWidth + 15 <= slider.scrollWidth;

    if (isLeft) {
      if (isRight && isRight) {
        setChevApp({ right: true, left: true });
      } else {
        setChevApp({ right: false, left: true });
      }
    } else {
      setChevApp({ right: true, left: false });
    }
  };
  const handleLeftChevClick = () => {
    const slider: any = sliderRef.current;
    slider.scrollLeft -= memberCardRef.current?.clientWidth || 300;
  };
  const handleRightChevClick = () => {
    const slider: any = sliderRef.current;
    slider.scrollLeft += memberCardRef.current?.clientWidth || 300;
  };

  useEffect(() => {
    if (typeof window !== undefined) setWindow(window);
    const slider: any = sliderRef.current;
    if (slider.scrollWidth > slider.offsetWidth) {
      setChevApp({ left: false, right: true });
    }

    window.addEventListener('resize', () => {
      if (slider.scrollWidth > slider.offsetWidth) setChevApp({ left: false, right: true });
      else setChevApp({ left: false, right: false });
    });
  }, [winObje]);
  return (
    <div className="relative mt-10 w-full">
      {chevAppear.left && (
        <ChevronLeft
          onClick={handleLeftChevClick}
          size={40}
          className="bg-light-green absolute left-[-0.3em] top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary-navy p-2 text-3xl text-white transition-colors duration-300 hover:bg-primary-pantone "
        />
      )}
      {chevAppear.right && (
        <ChevronRight
          onClick={handleRightChevClick}
          size={40}
          className="bg-light-green absolute right-[-0.3em] top-1/2 -translate-y-1/2 cursor-pointer rounded-full bg-primary-navy p-2 text-3xl text-white transition-colors duration-300 hover:bg-primary-pantone "
        />
      )}
      <div
        ref={sliderRef}
        onScroll={handleSliderScroll}
        className="scrollbar-hidden flex items-center gap-4 overflow-x-scroll scroll-smooth"
      >
        {members.map((e, i) => (
          <div key={i} className="flex flex-col items-center rounded-lg bg-white px-14 py-8">
            <div className="mb-4 flex h-40 w-40 items-center justify-center rounded-full border-2 border-[#C4C4C4]">
              <Image
                src={e.image}
                height={100}
                width={100}
                alt={e.name + 'photo'}
                className="h-5/6 w-5/6 object-cover rounded-full"
              />
            </div>
            <h1 className="text-xl font-bold">{e.name}</h1>
            <p className="mb-5 font-semibold">{e.role}</p>
            <div className="flex items-center gap-2 whitespace-nowrap text-sm">
              <Phone size={15} />
              +250 799 999 999
            </div>
            <Link
              href={'#'}
              className="group mt-6 flex w-fit transition-all hover:scale-105 hover:underline"
            >
              <span className="text-lg font-bold">Explore More</span>
              <ArrowUpRight
                size={15}
                className="-rotate-1 transition-all duration-300 group-hover:-translate-y-[0.1rem] group-hover:translate-x-[0.1rem]"
              />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Members;
