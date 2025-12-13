import React, { use } from 'react';
import { Link, useLoaderData } from 'react-router';

export const Search = () => {

    const users = useLoaderData();

    return (
      <div>
        <h1>Search Results</h1>
        <div className="user-list">
          {users.map((user) => (
            <div key={user.id}>
              <Link to={`/users/${user.login}`}>
                <img src={user.avatar_url} alt="" />
              </Link>
              <p>{user.login}</p>
            </div>
          ))}
        </div>
      </div>
    );
}
