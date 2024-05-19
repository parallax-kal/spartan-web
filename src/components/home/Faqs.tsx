import { FC } from 'react';
import MaxWidthWrapper from '../MaxWidthWrapper';
import { cn } from '@/lib/utils';
import { montserrat } from '@/lib/fonts';
import Image from 'next/image';
import { faqsimg } from '@/assets/images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '../ui/accordion';

interface FaqsProps {}

const faqs: { question: string; answer: string }[] = [
  {
    question:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic,  aliquem in , handerti unix.Lorem ipsum',
    answer:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum '
  },
  {
    question:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic,  aliquem in , handerti unix.Lorem ipsum',
    answer:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum '
  },
  {
    question:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic,  aliquem in , handerti unix.Lorem ipsum',
    answer:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum '
  },
  {
    question:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic,  aliquem in , handerti unix.Lorem ipsum',
    answer:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum '
  },
  {
    question:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic,  aliquem in , handerti unix.Lorem ipsum',
    answer:
      'Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum Lorem ipsum sat amet consectutur adionscing erit ut et musca nic, aliquem in , handerti unix.Lorem ipsum '
  }
];

const Faqs: FC<FaqsProps> = ({}) => {
  return (
    <MaxWidthWrapper className="mt-28">
      <div className="border-l border-l-[#008F39] px-5 py-2 font-semibold">
        <h1 className={cn(montserrat.className, 'text-lg font-bold')}>FAQs</h1>
        <p className="text-sm">
          Different questions about our product addressed to us with their corresponding solutions
        </p>
      </div>

      <div className="flex flex-col items-start md:flex-row">
        <Image
          src={faqsimg}
          alt="faqs"
          height={500}
          width={500}
          className="w-[29rem] object-contain"
        />
        <Accordion type="single" collapsible className="w-full ">
          {faqs.map(({ question, answer }, i) => (
            <AccordionItem value={'item' + i} key={i}>
              <AccordionTrigger className="text-start">{question}</AccordionTrigger>
              <AccordionContent>{answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </MaxWidthWrapper>
  );
};

export default Faqs;
