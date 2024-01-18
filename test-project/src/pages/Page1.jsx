import React from 'react';
import { useParams } from 'react-router-dom';

const Page1 = () => {
  let { id } = useParams();
  return <div>Page1</div>;
};

export default Page1;
