import { useEffect, useState } from 'react';

type UseQuote = () => {
  currentQuote: string;
};

export const QUOTES = [
  '人生に失敗がないと、失敗する',
  '夢見ることができればそれは実現する',
  '行動の起点は全て夢にある',
  '習慣は第二の性格である',
  '唯一の失敗は挑戦しなかったことである',
];

export const useQuote: UseQuote = () => {
  const [currentQuote, setCurrentQuote] = useState('');

  useEffect(() => {
    const randomIndex = Math.floor(Math.random() * QUOTES.length);
    setCurrentQuote(QUOTES[randomIndex]);
  }, []);
  return { currentQuote };
};
