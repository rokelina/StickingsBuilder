import { useState, useEffect } from 'react';

export const useLoadingSpinner = () => {
  const [loading, setLoading] = useState(true);
  const [startLoadingTime, setStartLoadingTime] = useState(Date.now());

  return loading;
};
