import { css } from '@emotion/react';

export const Reset = css`
  html,
  body {
    margin: 0;
    padding: 0;

    background: linear-gradient(
      to bottom right,
      hsl(0, 0%, 85%),
      hsl(0, 0%, 65%)
    );

    min-height: 100vh;
  }
`;
