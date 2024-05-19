'use client';
import { TabName, articles, tabs } from '@/lib/constants';
import { motion } from 'framer-motion';
import Image, { StaticImageData } from 'next/image';
import { useEffect, useRef, useState } from 'react';
import { Button } from '../ui/button';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface TabProps {
  text: TabName;
  selected: boolean;
  setSelected: (text: TabName) => void;
  customID?: string;
}

const Tab = ({ text, selected, setSelected }: TabProps) => {
  return (
    <button
      onClick={() => setSelected(text)}
      className={` ${
        selected ? '!text-[#026200]' : ' hover:text-gray-900'
      } relative whitespace-nowrap  rounded-md px-2 py-1 text-xs font-medium text-[#5B5A5A] transition-colors duration-300 focus-within:outline-[#026200]/50 sm:text-sm`}
    >
      <span className="relative z-10">{text}</span>
      {selected && (
        <motion.div
          className="absolute left-0 top-0 flex size-full h-full w-full items-end justify-center"
          layoutId={'linetab'}
          transition={{ type: 'spring', duration: 0.4, bounce: 0, delay: 0.1 }}
        >
          <span className="z-0 h-[3px] w-[100%] rounded-t-full bg-[#026200]"></span>
        </motion.div>
      )}
    </button>
  );
};

const Articles = () => {
  const [selected, setSelected] = useState<TabName>(tabs[0]);

  const [chevAppear, setChevApp] = useState<any>({ left: false, right: false });
  const [winObje, setWindow] = useState({});
  const sliderRef = useRef(null);
  const curRef: any = sliderRef.current;

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
    slider.scrollLeft -= 200;
  };
  const handleRightChevClick = () => {
    const slider: any = sliderRef.current;
    slider.scrollLeft += 200;
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
    <div className="flex w-full flex-col">
      <div className="x-10 relative mb-8 flex w-full items-center justify-center">
        <div
          ref={sliderRef}
          onScroll={handleSliderScroll}
          className={`scrollbar-hidden border-black-500/25 flex w-full flex-nowrap items-center justify-between overflow-scroll border-b`}
        >
          {tabs.map((title, i) => (
            <Tab key={i} text={title} selected={selected === title} setSelected={setSelected} />
          ))}
        </div>
        {chevAppear.left && (
          <ChevronLeft
            onClick={handleLeftChevClick}
            size={20}
            className="bg-light-green absolute left-[-0.3em] top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#026200] p-1 text-2xl text-white transition-colors duration-300 hover:scale-105 "
          />
        )}
        {chevAppear.right && (
          <ChevronRight
            onClick={handleRightChevClick}
            size={20}
            className="bg-light-green absolute right-[-0.3em] top-1/2 z-10 -translate-y-1/2 cursor-pointer rounded-full bg-[#026200] p-1 text-2xl text-white transition-colors duration-300 hover:scale-105 "
          />
        )}
      </div>
      <div className="grid w-full grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3">
        {articles
          .filter((e) => {
            if (selected === 'View All') {
              return true; // Include all articles if the tag is 'view all'
            }
            return e.tag === selected; // Include articles with the selected tag
          })
          .slice(0, 6)
          .map(({ image, title, desc }, i) => (
            <div
              key={i}
              className="w-full overflow-hidden rounded-xl shadow-[0_3PX_7px_1px_RGBA(0,0,0,0.1)]"
            >
              <div className="flex h-52 items-center justify-center overflow-hidden bg-black/90">
                <Image
                  src={image}
                  alt={title}
                  height={700}
                  quality={100}
                  width={700}
                  className="h-full object-cover"
                />
              </div>
              <div className="space-y-5 p-4 pb-8">
                <h1 className="text-base font-bold leading-tight">{title}</h1>
                <p className="text-[12px] leading-tight text-[#838383]">{desc}</p>
              </div>
            </div>
          ))}
      </div>
      <Button className="mt-14 self-center">Read More</Button>
    </div>
  );
};

export default Articles;
