'use client';
import { EmblaOptionsType } from 'embla-carousel';
import { FC } from 'react';
import EmblaCarousel from './EmblaCarousel';
import '@/styles/embla.css';
import { StaticImageData } from 'next/image';
import { bannerCreep } from '@/assets/images';

interface ProductsCarouselProps {}
const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true
};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());

export interface Iproduct {
  material: string;
  image: string | StaticImageData;
  name: string;
  quantityInStock: number;
  ratings: 1 | 2 | 3 | 4 | 5;
  price: number;
  prevPrice: number;
  percentage: number;
}

const product: Iproduct = {
  material: 'Electronic tools',
  image: bannerCreep,
  name: 'Original crib and gadgets',
  price: 29.99,
  prevPrice: 32.5,
  quantityInStock: 10,
  ratings: 3,
  percentage: 66
};
const products: Iproduct[] = Array(10).fill(product);

const ProductsCarousel: FC<ProductsCarouselProps> = ({}) => {
  return <EmblaCarousel slides={products} options={OPTIONS} />;
};

export default ProductsCarousel;
