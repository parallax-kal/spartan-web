import { baby} from '@/assets/images';
import MaxWidthWrapper from '@/components/MaxWidthWrapper';
import { Button } from '@/components/ui/button';
import { glory } from '@/lib/fonts';
import { cn } from '@/lib/utils';
import { products } from '@/mocks/products';
import { Star } from 'lucide-react';
import Image from 'next/image';
import { FC } from 'react';
import ProdOptions from './_components/ProdOptions';
import { Metadata } from 'next';

interface pageProps { 
  searchParams: {
    product: string | number;
  }
}

export const metadata : Metadata = {
  title: "Checkout"
}

const page = ({ searchParams }:pageProps) => {

  const product = products.find((_, id) => id === Number(searchParams.product))

  if (!product) {
    return <div className="w-full flex items-center justify-center h-[70vh]">
      <h1 className='text-5xl font-bold'>!Ooops, Product not found</h1>
    </div>
  }

  return (
    <div className={cn(glory.className, 'w-full overflow-x-hidden pt-36')}>
      <MaxWidthWrapper>
        <div className='aspect-h-1 relative aspect-w-1 overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-[30rem]'>
          <Image
            src={product?.image}
            alt='product image'
            quality={100}
            fill
            className='h-full w-full object-contain object-center'
          />
        </div>

        <h1 className="text-4xl font-semibold mt-10">{product.name}</h1>

        <div className="flex justify-between items-center border-b-2 border-gray-200 pb-2">
          <div className="">
            <span className="text-2xl">${product.price}</span> <sup className="text-xs font-medium line-through">${product.prevPrice}</sup>
          </div>
          <div className="flex items-center">
            <div className="flex items-center">
              {Array(5)
                .fill('')
                .map((_, i) =>
                  i < product.ratings ? (
                    <Star key={i} color="#FFA800" size={20} fill="#FFA800" />
                  ) : (
                    <Star key={i} size={20} color="#C4C4C4" />
                  )
                )}
              <span className='ml-2 text-stone-600'>{product.ratings} reviews</span>
            </div>
          </div>
        </div>

        <p className="py-5 text-zinc-600">{product.description}</p>

        <ProdOptions product={product} />
      </MaxWidthWrapper>
    </div>
  );
};

export default page;
