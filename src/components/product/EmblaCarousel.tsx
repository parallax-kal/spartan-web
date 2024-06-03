'use client';
import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import { PrevButton, NextButton, usePrevNextButtons } from './EmblaCarouselArrowButtons';
import useEmblaCarousel from 'embla-carousel-react';
import Image from 'next/image';
import { cn } from '@/lib/utils';
import { glory } from '@/lib/fonts';
import { Star } from 'lucide-react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import Link from 'next/link';
import { IProduct } from '@/types';

type PropType = {
  slides: (IProduct&{material: string, percentage: number})[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);
  const { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick } =
    usePrevNextButtons(emblaApi);

  return (
    <section className="embla relative">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map(
            (
              { name, image, material, ratings, percentage, price, prevPrice, amountInStock },
              i
            ) => (
              <Link href={`checkout?product=${i}`} className={cn(glory.className, 'embla__slide')} key={i}>
                <div className="flex flex-col items-center text-center leading-3">
                  <div className="rounded-xl bg-white shadow-[0_0_8px_1px_RGBA(0,0,0,0.2)]">
                    <Image
                      src={image}
                      alt={name}
                      width={200}
                      height={200}
                      quality={100}
                      className="h-52 w-full object-contain"
                    />
                  </div>
                  <p className="mt-3 font-[400]">{material}</p>
                  <p className="text-lg font-semibold leading-4">{name}</p>
                  <div className="flex items-center justify-center gap-3">
                    <p className="text-lg font-semibold">${price}</p>
                    <p className="text-sm line-through">${prevPrice}</p>
                  </div>
                  <div className="flex items-center">
                    {Array(5)
                      .fill('')
                      .map((_, i) =>
                        i < ratings ? (
                          <Star key={i} color="#FFA800" size={16} fill="#FFA800" />
                        ) : (
                          <Star key={i} size={16} color="#C4C4C4" />
                        )
                      )}
                  </div>
                  <div className="relative mt-1 h-2 w-full overflow-hidden rounded-full bg-slate-200">
                    <div
                      className={`absolute h-full bg-gradient-to-b from-primary to-black/70 `}
                      style={{ width: `${percentage}%` }}
                    />
                  </div>
                  <p className="mt-2 text-[#727272]">Stock: {amountInStock}</p>
                </div>
              </Link>
            )
          )}
        </div>
      </div>
      <PrevButton
        className="absolute -left-2 top-1/2 h-20 w-20 -translate-y-1/2 md:-left-10"
        onClick={onPrevButtonClick}
        disabled={prevBtnDisabled}
      />
      <NextButton
        className="absolute -right-[4.5rem] top-1/2 h-20 w-20 -translate-y-1/2 md:-right-24"
        onClick={onNextButtonClick}
        disabled={nextBtnDisabled}
      />
    </section>
  );
};

export default EmblaCarousel;
