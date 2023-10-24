import React from 'react';

const Search = ({ username, setUsername }) => {
  return (
    <>
        <input type="text" placeholder={username} value={username} onChange={e => {setUsername(e.target.value)}} autoFocus="true" />
    </>
  )
}

export default Search;