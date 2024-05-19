import { FC } from 'react';

interface notFoundProps {}

const notFound: FC<notFoundProps> = ({}) => {
  return (
    <div className="flex min-h-screen items-center justify-center">
      <h1>not found</h1>
    </div>
  );
};

export default notFound;
