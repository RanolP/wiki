import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet-async';

function NotFoundPage() {
  return (
    <main>
      <Helmet>
        <title>Not Found</title>
      </Helmet>
      <h1>Page not found</h1>
      <Link to="/">Go home</Link>.
    </main>
  );
}

export default NotFoundPage;
