import { Global } from '@emotion/react';
import styled from '@emotion/styled';
import React, { ReactNode } from 'react';
import { Reset } from '../styles/Reset';
import { NavigationBar } from './NavigationBar';

const ContentWrap = styled.main`
  margin: 2rem;
  padding: 1rem;
  background: hsl(0, 0%, 95%);
  border-radius: 1rem;
`;

type LayoutProps = {
  children: ReactNode;
};

export default function Layout({ children }: LayoutProps): JSX.Element {
  // TODO: 검색
  return (
    <>
      <Global styles={[Reset]} />
      <NavigationBar />
      <ContentWrap>{children}</ContentWrap>
    </>
  );
}
