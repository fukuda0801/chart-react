import React, { useState } from 'react';
type UseCelsiusToFahrenheit = () => {
  celsius: number;
  handleChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  convertFromCelsiusToFahrenheit: (celsius: number) => number;
};

export const useCelsiusToFahrenheit: UseCelsiusToFahrenheit = () => {
  const [celsius, setCelsius] = useState<number>(0);
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCelsius(Number(e.target.value));
  };

  const convertFromCelsiusToFahrenheit = (celsius: number) => {
    return (celsius * 9) / 5 + 32;
  };
  return { celsius, handleChange, convertFromCelsiusToFahrenheit };
};

export default useCelsiusToFahrenheit;
