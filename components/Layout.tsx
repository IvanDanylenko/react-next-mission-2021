import React from 'react';
import Head from 'next/head';
import Container from '@material-ui/core/Container';

const Layout: React.FC = ({ children }) => {
  return (
    <>
      <Head>
        <title>King David IT - React Mission</title>
        <meta name="description" content="Example of reservation process" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Container maxWidth="md" sx={{ py: 4 }}>
        {children}
      </Container>
    </>
  );
};

export default Layout;
