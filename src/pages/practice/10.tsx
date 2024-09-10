import { NextPage } from 'next';

import { useQuote } from '@/hooks/useQuote';

const Page: NextPage = () => {
  const { currentQuote } = useQuote();
  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{currentQuote}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
