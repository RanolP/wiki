import { ComponentChildren } from 'preact';
import * as React from 'preact';
import { Helmet } from 'react-helmet-async';
import Layout from './Layout';

type PostLayoutProps = {
  children: ComponentChildren;
  pageContext: {
    frontmatter: Record<string, any>;
  };
};

export default function PostLayout({
  children,
  pageContext: { frontmatter },
}: PostLayoutProps): JSX.Element {
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
