import { FC } from 'react';
import LargeHeading from '../ui/LargeHeading';
import { cn } from '@/lib/utils';
import { montserrat } from '@/lib/fonts';
import { Input } from '../ui/input';
import { Textarea } from '../ui/textarea';
import { Button } from '../ui/button';

interface ContactUsProps {}

const ContactUs: FC<ContactUsProps> = ({}) => {
  return (
    <div className="mt-4 w-full px-5">
      <div className="w-full rounded-md bg-[#F3F3F3]">
        <div className="px-7 pb-5 pt-14 sm:px-20">
          <p className="text-sm text-[#5160B3]">Ping something</p>
          <LargeHeading className={cn(montserrat.className, 'font-extrabold')}>
            Contact us
          </LargeHeading>
          <div className="mt-5 flex items-center justify-between">
            <div className="ml-10 hidden max-w-md lg:block">
              <h3 className="text-2xl font-bold text-[#3F3F3F]">
                Having a problem with our system ?
              </h3>
              <p className="text-[#6D6D6D]">
                Our support and customer care team is always ready to help you, just send a meaning
                full, we’ll get back to you as soon as it could be.
              </p>
            </div>
            <form className="flex w-full flex-col space-y-4 md:ml-auto md:w-1/2">
              <Input
                id="email"
                type="email"
                className="border-b-[#C4C4C4] bg-[#EDEDED] px-3 py-6 focus:border-b-stone-700 focus:bg-stone-500/10 focus:bg-opacity-5"
                placeholder="example@gmail.com"
              />
              <Textarea
                placeholder="Message body"
                className="border-b-[#C4C4C4] bg-[#EDEDED] px-3 py-3 text-black focus:border-b-stone-700 focus:bg-stone-500/10 focus:bg-opacity-5"
                cols={50}
              />
              <Button type="submit" className="self-end">
                Submit
              </Button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
