import { NextPage } from 'next';
import React from 'react';

import Button from '@/components/common/parts/Button';
import { useDisplayFeedback } from '@/hooks/useDisplayFeedback';

const Page: NextPage = () => {
  const { feedbackList, handleInputChange, handleSubmit, inputValue } = useDisplayFeedback();
  return (
    <div className="mx-auto mt-8 max-w-4xl ">
      <div className="flex justify-center">
        <div>
          <textarea
            className="rounded-sm border px-3 py-2"
            placeholder="フィードバックを入力してください"
            value={inputValue}
            onChange={handleInputChange}
          ></textarea>
          <div className="flex justify-center">
            <Button label="送信する" variant="primary" onClick={handleSubmit}></Button>
          </div>
          <div className="mt-2">
            {feedbackList.map((feedback, index) => {
              return <li key={index}>{feedback}</li>;
            })}
            <li>フィードバック</li>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Page;
