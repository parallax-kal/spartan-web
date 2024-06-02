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
    question: 'How does the rotating surface help keep my baby safe?',
    answer:
      'The rotating surface ensures that if your baby rolls onto their stomach while sleeping, it gently rotates to bring them back to a safer position. This reduces the risk of suffocation and helps prevent Sudden Infant Death Syndrome (SIDS).'
  },
  {
    question: 'Is the rotating surface safe for my baby to sleep on?',
    answer:
      "Yes, the rotating surface has been designed with safety in mind. It uses smooth, gentle movements to adjust your baby's position without causing discomfort. The materials used are non-toxic and baby-friendly, ensuring a safe sleeping environment."
  },
  {
    question: "How does the AI in the mobile app detect the baby's sleeping position?",
    answer:
      'The AI utilizes advanced image recognition and movement detection algorithms to monitor your baby’s position in real-time. It alerts the rotating surface mechanism if your baby is in a potentially unsafe position, prompting the surface to adjust accordingly.'
  },
  {
    question: 'Can I customize the sensitivity of the position detection?',
    answer:
      "Yes, the mobile app allows parents to customize the sensitivity settings according to their baby's sleeping patterns. You can adjust how quickly the surface responds to changes in your baby's position to ensure optimal safety and comfort."
  },
  {
    question: 'What happens if the rotating surface malfunctions or the app loses connection?',
    answer:
      'The rotating surface is equipped with fail-safe mechanisms to prevent malfunctions. In case of a power outage or app disconnection, the surface will lock into a neutral, safe position. Additionally, the app will send you an alert to check on your baby’s safety manually.'
  },
  {
    question: "What is the price of the rotating baby sleep surface?",
    answer: "The rotating baby sleep surface is priced at $99.9. This includes the surface itself, the accompanying mobile app, and access to our customer support for any assistance you might need."
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
