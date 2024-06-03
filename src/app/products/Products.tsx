"use client"
import { glory } from '@/lib/fonts'
import { cn } from '@/lib/utils'
import { products } from '@/mocks/products'
import Image from 'next/image'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

interface ProductsProps {

}

const Products: FC<ProductsProps> = ({ }) => {
    const router = useRouter()
    return <div className="grid w-full gap-5 min-[555px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4">
        {products
            .map(({ image, prevPrice, price, name }, i) => (
                <div key={i} className="w-full overflow-hidden rounded-md bg-[#EBEBEB]">
                    <div className="relative h-[80vw] w-full min-[555px]:h-60 lg:h-[20vw]">
                        <Image src={image} alt={name} fill className="object-cover hover:scale-105 transition-all duration-300" />
                    </div>
                    <div className="p-4">
                        <h4 className="text-sm font-semibold xl:text-lg cursor-pointer transition-all duration-300 hover:underline" onClick={() => router.push(`/checkout?product=${i}`)}>{name}</h4>
                        <div className="flex items-center justify-between">
                            <p className={cn(glory.className, 'text-sm font-semibold xl:text-lg')}>
                                ${price} <sup className="text-xs font-medium line-through">${prevPrice}</sup>
                            </p>
                            <p className="cursor-pointer text-[#FFA800] transition-colors hover:underline">
                                Buy
                            </p>
                        </div>
                    </div>
                </div>
            ))}
    </div>
}

export default Products