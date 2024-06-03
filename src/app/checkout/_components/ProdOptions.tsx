"use client"
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import type Stripe from 'stripe'
import { FC, useState } from 'react'
import { toast } from 'sonner';
import { products } from '@/mocks/products';
import { IProduct } from '@/types';

interface ProdOptionsProps {
 product: IProduct
}
const colors = ['#2C2827', '#002E58', '#561500', '#DA3C00'] as const;

const ProdOptions: FC<ProdOptionsProps> = ({ product }) => {
    const [selectedOptions, setSelectedOptions] = useState<{ color: typeof colors[number], quantity: number }>({ color: colors[0], quantity: 1 })
    
    const handleCheckout = async () => {
        const { default: getStripe } = await import("@/lib/getStripe");
        
        const stripe = await getStripe();
        
        if (!stripe) return;
        const line_items: (IProduct & {quantity: number})[] = [
            {...product, quantity: selectedOptions.quantity}
        ]
        
        const response = await fetch("/api/checkout", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(line_items),
        });
    
        if (response.status === 500) return;
    
        const data = await response.json();

        console.log({data})
    
        toast.promise(stripe.redirectToCheckout({ sessionId: data?.id }), {
            loading: 'Loading...',
            success: (data) => {
              return `Successfuly redirected to checkout`;
            },
            error: 'Error when redirecting to checkout',
          });
    
        ;
      };

    return <> <div className="py-5 border-y-2 border-zinc-200">
        <div className="flex justify-between">
            <div className="flex items-center gap-3">
                <p className="font-bold text-xl">Color</p>
                <div className="flex items-center gap-2">
                    {colors.map((color, i) => (
                        <div
                            key={i}
                            className={cn("h-5 w-5 cursor-pointer rounded-full ring-offset-1 transition-all hover:ring-2 hover:ring-current", { "ring-2 ring-current": selectedOptions.color === color })}
                            style={{ backgroundColor: color, color }}
                            onClick={() => setSelectedOptions((opts) => ({ ...opts, color: color }))}
                        />
                    ))}
                </div>
            </div>
            <div className="flex gap-3">
                <p className="font-bold text-xl">Quantity</p>
                <div className="flex items-center gap-3 font-bold text-lg">
                    <button className='cursor-pointer select-none' onClick={() => setSelectedOptions((opts) => ({ ...opts, opts: opts.quantity > 1 && opts.quantity-- }))}>-</button>
                    <div className="h-8 w-8 border border-black rounded-sm flex items-center justify-center">
                        {selectedOptions.quantity}
                    </div>
                    <button className='cursor-pointer select-none' onClick={() => setSelectedOptions((opts) => ({ ...opts, opts: opts.quantity++ }))}>+</button>
                </div>
            </div>
        </div>
    </div>
        <Button className='rounded-full mt-5 px-10' onClick={() => handleCheckout()}>Buy now</Button>
    </>

}

export default ProdOptions