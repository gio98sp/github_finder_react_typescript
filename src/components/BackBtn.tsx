import React from 'react';
import { useNavigate } from 'react-router-dom';

export const BackBtn = () => {
  const navigate = useNavigate()

  return (
    <>
      <button onClick={() => navigate(-1)}>Voltar</button>
    </>
  );
};
