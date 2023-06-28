import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SearchResult = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get(queryParams);

  useEffect(() => {
    console.log(query);
  }, [query]);

  return (
    <div>
      <h1>검색결과</h1>
      <h2>검색어: {query}</h2>
    </div>
  );
};

export default SearchResult;
