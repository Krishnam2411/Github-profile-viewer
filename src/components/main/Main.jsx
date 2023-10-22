import React from 'react'

const main = ({ data }) => {
  return (
    <>
        <main>
          <div className='info'>
            <div className='name'>{ (data.name) ? (data.name) : "" }</div>
            <div className='username'>/{ data.login }</div>
            <div className='bio'>{ (data.bio) ? `Bio : ${data.bio}` : "" }</div>
            <div className='location'>{ (data.location) ? `Location : ${data.location}` : "" }</div>
            <div className="cards">
              <div className='card'>{ data.followers } followers</div>
              <div className='card'>{ data.following } following</div>
              <div className='card'>{ data.public_repos } Repository</div>
            </div>
            <a href={data.html_url} className='button' target='_blank'>View profile</a>
          </div>
          <div className="dp">
            <img className="avatar" src={ data.avatar_url } alt={ data.login } />
          </div>
        </main>
    </>
  )
}

export default main