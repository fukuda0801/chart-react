import { NextPage } from 'next';

import Button from '@/components/common/parts/Button';
import { CHOICES, QUESTION, useQuiz } from '@/hooks/useQuiz';

const Page: NextPage = () => {
  const { handleChoice, handleSubmit, result, userChoice } = useQuiz();

  return (
    <div className="mx-auto mt-8 max-w-4xl">
      <div className="flex justify-center">
        <div>
          <h3 className="text-center text-2xl">{QUESTION}</h3>
          <div className="mt-4 flex justify-center gap-x-2">
            {CHOICES.map((choice, index) => (
              <Button
                onClick={() => handleChoice(choice)}
                label={choice}
                variant="secondary"
                className={`${userChoice === choice && 'bg-black'}`}
                key={index}
              />
            ))}
          </div>
          <div>
            <Button onClick={handleSubmit} label="送信" variant="primary" />
          </div>
          <h3 className="mt-8 text-center text-4xl">{result}</h3>
        </div>
      </div>
    </div>
  );
};

export default Page;
