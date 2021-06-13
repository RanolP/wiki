import React, { ReactNode } from 'react';
import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

type PostLayoutProps = {
  children: ReactNode;
  pageContext: {
    frontmatter: {
      title: string;
    };
  };
};

export default function PostLayout({
  children,
  pageContext: { frontmatter, ...pageContext },
}: PostLayoutProps): JSX.Element {
  console.log(pageContext);
  return (
    <Layout>
      <Helmet>
        <title>{`${frontmatter.title} - RanolP`}</title>
      </Helmet>
      <div>
        <h1>{frontmatter.title}</h1>
        {children}
      </div>
    </Layout>
  );
}
