import { Suspense } from 'react';
import { Outlet } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import CustomAppBar from 'components/CustomAppBar/CustomAppBar';
import { Global } from '@emotion/react';
import { GlobalStyles } from 'components/GlobalStyle';

const SharedLayout = () => {
  return (
    <>
      <CustomAppBar />
      <Suspense fallback={null}>
        <Outlet />
      </Suspense>
      <Toaster position="top-right" reverseOrder={false} />
      <Global styles={GlobalStyles} />
    </>
  );
};

export default SharedLayout;
