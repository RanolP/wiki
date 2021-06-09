import { ComponentChildren } from 'preact';
import * as React from 'preact';
import { Link } from 'gatsby';

type LayoutProps = {
  children: ComponentChildren;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  return (
    <>
      <nav>
        <Link to="/">RanolP</Link>

        <form>
          <input />
          <button>검색</button>
        </form>
      </nav>
      {children}
    </>
  );
}
