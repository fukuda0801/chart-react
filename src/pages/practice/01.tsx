import { NextPage } from 'next';

import ThreeBoxContent from '@/components/01/ThreeBoxContent';

const Page: NextPage = () => {
  return (
    <div className="mx-auto mt-10 max-w-4xl">
      <div className="grid grid-cols-3 gap-x-4">
        <ThreeBoxContent
          title1="こんにちは"
          content1="こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        />
        <ThreeBoxContent
          title1="こんにちは"
          content1="こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        />
        <ThreeBoxContent
          title1="こんにちは"
          content1="こんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちはこんにちは"
        />
      </div>
    </div>
  );
};

export default Page;
