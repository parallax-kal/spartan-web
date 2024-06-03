import { creep } from '@/assets/images';
import SearchInput from '@/components/SearchInput';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';
import { RadioGroup, RadioGroupItem } from '@/components/ui/radio-group';
import { FC } from 'react';
import Products from './Products';
import { Metadata } from 'next';

interface pageProps {}

export const metadata : Metadata = {
  title: "Products"
}

const product = {
  image: creep,
  price: 29.99,
  prevPrice: 34.56,
  name: 'Portable Digital Crib'
};

const colors = ['#2C2827', '#002E58', '#561500', '#DA3C00'];

const page: FC<pageProps> = ({}) => {

  return (
    <div className="mt-32 flex w-full gap-5 px-10">
      <div className="hidden space-y-6 text-sm lg:block">
        <SearchInput placeholder="Search" />

        {/* full components and devices */}
        <div className="">
          <p className="mb-3 text-lg font-bold">Filter by:</p>
          <div className="space-y-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="full-creep" />
              <label
                htmlFor="full-creep"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Full component
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="Devices" />
              <label
                htmlFor="Devices"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Devices
              </label>
            </div>
          </div>
        </div>

        {/* size options */}
        <div className="overfl">
          <p className="mb-3 text-lg font-bold">Price</p>
          <RadioGroup className="grid grid-flow-col grid-rows-3 gap-3" defaultValue="120-150">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="under75" id="under75" />
              <Label htmlFor="under75">under 75$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="100-120" id="100-120" />
              <Label htmlFor="100-120">100-120$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="120-150" id="120-150" />
              <Label htmlFor="120-150">120-150$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="150-180" id="150-180" />
              <Label htmlFor="150-180">150-180$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="180-220" id="180-220" />
              <Label htmlFor="180-220">180-220$</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="Over220" id="Over220" />
              <Label htmlFor="Over220">Over 220$</Label>
            </div>
          </RadioGroup>
        </div>

        {/* colors */}
        <div className="">
          <p className="mb-3 text-lg font-bold">Color</p>
          <div className="grid grid-cols-8 gap-2">
            {[colors, colors, colors, colors].flat().map((color, i) => (
              <div
                key={i}
                className="h-5 w-5 cursor-pointer rounded-full ring-offset-1 transition-all hover:ring-2 hover:ring-current"
                style={{ backgroundColor: color, color }}
              />
            ))}
          </div>
        </div>

        {/* material */}
        <div>
          <p className="mb-3 text-lg font-bold">Material</p>
          <div className="grid grid-cols-2 gap-3">
            <div className="flex items-center space-x-2">
              <Checkbox id="pineoak" />
              <label
                htmlFor="pineoak"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                pine / oak
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="beechwood" />
              <label
                htmlFor="beechwood"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                beech wood
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="rubberwood" />
              <label
                htmlFor="rubberwood"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                rubber wood
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="MDF" />
              <label
                htmlFor="MDF"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                MDF
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="cherrywood" />
              <label
                htmlFor="cherrywood"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                cherry wood
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="bamboo" />
              <label
                htmlFor="bamboo"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                bamboo
              </label>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full">
        <h3 className="mb-8 text-2xl font-bold">Spartan Full Cribs</h3>
        {/* products */}
        <Products />
      </div>
    </div>
  );
};

export default page;
