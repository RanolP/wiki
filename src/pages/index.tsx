import { navigate } from 'gatsby';
import { useEffect } from 'react';

export default function IndexPage() {
  useEffect(() => {
    navigate('/대문');
  }, []);
  return null;
}
