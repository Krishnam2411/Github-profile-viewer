import React from 'react';
import Search from '../search/search';

const Header = ({ username, setUsername }) => {
  return (
    <>
        <header>
            <h1> GitHubProfile Viewer </h1>
            <Search username={username} setUsername={setUsername} />
        </header>
    </>
  )
}

export default Header;