import {
  isRouteErrorResponse,
  useNavigate,
  useRouteError,
} from 'react-router-dom';
import Button from '../../components/Button/Button';
import './ErrorPage.css';

export default function ErrorPage() {
  const navigate = useNavigate();
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
      <Button
        idName="back-to-home-page"
        children="Back To Home Page"
        onBtnClick={() => navigate('/menu/eighth-notes', { replace: true })}
      />
    </div>
  );
}
