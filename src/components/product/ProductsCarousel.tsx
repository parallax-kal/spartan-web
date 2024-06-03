'use client';
import { EmblaOptionsType } from 'embla-carousel';
import { FC } from 'react';
import EmblaCarousel from './EmblaCarousel';
import '@/styles/embla.css';
import { products } from '@/mocks/products';
import { IProduct } from '@/types';

interface ProductsCarouselProps {}
const OPTIONS: EmblaOptionsType = {
  align: 'start',
  loop: true
};
const SLIDE_COUNT = 6;
const SLIDES = Array.from(Array(SLIDE_COUNT).keys());


const sproducts: (IProduct & {percentage: number, material: string})[] = products.map((product) => ({...product, percentage: Math.random() * 100, material: 'Electronic tools'}));

const ProductsCarousel: FC<ProductsCarouselProps> = ({}) => {
  return <EmblaCarousel slides={sproducts} options={OPTIONS} />;
};

export default ProductsCarousel;
