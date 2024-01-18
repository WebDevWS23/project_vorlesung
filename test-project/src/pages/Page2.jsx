import React from 'react';
import { Outlet } from 'react-router-dom';

const Page2 = () => {
  return (
    <>
      <h1>Users</h1>
      <Outlet />
    </>
  );
};

export default Page2;
