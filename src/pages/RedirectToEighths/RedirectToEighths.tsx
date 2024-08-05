import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const RedirectToEighths = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate('/menu/eighth-notes', { replace: true });
  }, [navigate]);

  return null;
};

export default RedirectToEighths;
