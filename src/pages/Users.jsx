import React, { use, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { Link, useLoaderData, useSearchParams } from 'react-router';
import Search from '../components/Search/Search';

const Users = () => {

    const users = useLoaderData();
    const [searchParams, setSearchParams] = useSearchParams();

    const filterUsers = (user) => {
      if(!searchParams.get("q")) {
        return true;
      }
      return user.login.toLowerCase().includes(searchParams.get("q"));
    }


  return (
    <div>
      <div className="user-title">
        <h1>Users</h1>
        <div>
          <Search />
        </div>
      </div>
      <div className="user-list">
        {users.filter(filterUsers).map((user) => (
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

export default Users;
