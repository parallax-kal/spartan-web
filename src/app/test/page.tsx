import { FC } from 'react';
import './index.css';

interface pageProps {}

const page: FC<pageProps> = ({}) => {
  return (
    <div className="w-full bg-slate-700 p-32">
      <button className="border-gradient m-20 p-5">hello world</button>
      {/* <img className='thumb' src="https://phantom-marca.unidadeditorial.es/35d0b727252fec53fd993c76f9750aa3/resize/828/f/webp/assets/multimedia/imagenes/2023/05/24/16849500271539.jpg" alt="" /> */}
      <div className="ringa h-52 w-52 p-5"></div>
    </div>
  );
};

export default page;
