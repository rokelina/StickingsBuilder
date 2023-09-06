import { useEffect } from 'react';

export function useLoadingSpinner() {
  const load = () => new Promise((resolve) => setTimeout(resolve, 750));

  useEffect(() => {
    const spinnerDiv = document.getElementById('loader');
    load().then(() => {
      if (spinnerDiv) {
        spinnerDiv.classList.add('hidden');
        setTimeout(() => {
          spinnerDiv.parentNode?.removeChild(spinnerDiv);
        }, 50);
      }
    });
  }, []);
}
