import React from 'react'
import Profile from './Profile'
import Spinner from './Spinner'
import PropTypes from 'prop-types'


function Users({users, loading}) {

    const list = users.map(user => 
        <Profile key={user.id} person={user} />
    )

    if (loading) {
        return (
            <Spinner/>
        ) 
    } else {
        return (
            <div>  
                {list}
            </div>
        )
    }
}

Users.propTypes = {
    users: PropTypes.array.isRequired,
    loading: PropTypes.bool.isRequired
}

export default Users