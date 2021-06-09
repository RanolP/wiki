import React, { ReactNode } from 'react';
import { Link } from 'gatsby';

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  // TODO: 검색
  return (
    <>
      <nav>
        <Link to="/">RanolP</Link>
      </nav>
      {children}
    </>
  );
}
