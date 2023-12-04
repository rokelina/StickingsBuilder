import { useEffect } from 'react';

/** Called at the top level, removes spinner from the DOM after App.tsx is mounted*/
export function useLoadingSpinner() {
  const load = () => new Promise((resolve) => setTimeout(resolve, 50));

  useEffect(() => {
    const spinnerDiv = document.getElementById('loader');
    load().then(() => {
      if (spinnerDiv) {
        spinnerDiv.classList.add('hidden');
        setTimeout(() => {
          spinnerDiv.parentNode?.removeChild(spinnerDiv);
        }, 700);
      }
    });
  }, []);
}
