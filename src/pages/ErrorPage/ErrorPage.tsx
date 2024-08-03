import { isRouteErrorResponse, useRouteError } from 'react-router-dom';
import './ErrorPage.css';

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h1>Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p>
        <i>
          {isRouteErrorResponse(error)
            ? error.statusText || error.status
            : 'Unknown error'}
        </i>
      </p>
    </div>
  );
}
