import React from 'react';
import { useLoaderData } from 'react-router';

const User = () => {

    const user = useLoaderData();

    return (
        <div>
            <h1>ID - {user.id}</h1>
            <img src={user.avatar_url} alt="" />
            <p>Blog: <a href={user.blog} target='_blank' rel='noreferrer'>{user.blog}</a></p>
            <p>Login - {user.login}</p>
            <p>Location - {user.location}</p>
            <p>Public repository - {user.public_repos}</p>
        </div>
    );
}

export default User;
