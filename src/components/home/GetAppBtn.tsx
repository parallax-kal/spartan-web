import { cn } from '@/lib/utils';
import { LucideProps } from 'lucide-react';
import { FC } from 'react';

interface GetAppBtnProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: FC<LucideProps>;
  desc: string;
  app: string;
}

const GetAppBtn: FC<GetAppBtnProps> = ({ Icon, className, desc, app, ...props }) => {
  return (
    <button
      {...props}
      className={cn('flex items-center gap-3 rounded-md bg-white p-2 pr-8 text-black', className)}
    >
      <Icon className="h-full" />
      <div className="flex flex-col text-start">
        <p className="whitespace-nowrap text-[0.6rem] font-semibold">{desc}</p>
        <p className="whitespace-nowrap text-[0.8rem] font-bold">{app}</p>
      </div>
    </button>
  );
};

export default GetAppBtn;
