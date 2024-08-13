import { useState } from 'react';
type UseTextShowHidden = () => {
  isHidden: boolean;
  handleClickIndicate: () => void;
  handleClickHidden: () => void;
};

export const useTextShowHidden: UseTextShowHidden = () => {
  const [isHidden, setIsHidden] = useState(false);
  const handleClickHidden = () => {
    setIsHidden(true);
  };
  const handleClickIndicate = () => {
    setIsHidden(false);
  };
  return { isHidden, handleClickHidden, handleClickIndicate };
};
