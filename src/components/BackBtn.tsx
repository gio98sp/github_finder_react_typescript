import { useNavigate } from 'react-router-dom';

import classes from './BackBtn.module.css';

export const BackBtn = () => {
  const navigate = useNavigate();

  return (
    <>
      <button className={classes.back_btn} onClick={() => navigate(-1)}>Voltar</button>
    </>
  );
};
