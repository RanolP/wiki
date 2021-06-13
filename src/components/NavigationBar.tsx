import styled from '@emotion/styled';
import { Link } from 'gatsby';
import React, { useState, useEffect, useCallback } from 'react';

const Wrap = styled.nav`
  background: linear-gradient(
    to right,
    hsl(230, 30%, 50%) 20%,
    hsl(320, 30%, 50%)
  );
  padding: 0.5rem 1rem;
`;
const BrandLink = styled(Link)`
  text-decoration: none;
  color: white;
  font-weight: bold;
  font-size: 1.5rem;
`;

export function NavigationBar(): JSX.Element {
  const [query, setQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleInput = useCallback((e: React.FormEvent<HTMLInputElement>) => {
    setQuery(e.currentTarget.value);
  }, []);

  console.log(searchResults);

  return (
    <Wrap>
      <BrandLink to="/">RanolP</BrandLink>
      <input
        placeholder="Search..."
        autoComplete="on"
        list="searchResults"
        onInput={handleInput}
      />
      <datalist id="searchResults">
        {searchResults.map((node) => (
          <option key={null}>{null}</option>
        ))}
      </datalist>
    </Wrap>
  );
}
