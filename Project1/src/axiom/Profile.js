import React from 'react'

function Profile({person}) {
    return (
        <div className='display-users' key={person.id}>
        <div className='display-user-div'>
        <h2>{person.login}</h2>
        <img src={person.avatar_url} alt="" />
        <button>
            <a href={person.html_url}>Profile</a>
        </button>
        </div>
        </div>
    )
}

export default Profile
