import React, { use, useEffect } from 'react';
import axios from 'axios';
import { useState } from 'react';
import { useLoaderData } from 'react-router';

const Users = () => {
      /*
    fetch("https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json")
      .then((response) => response.json())
      .then((data) => console.log(data));
    */

    //   const getData = async () => {
    //     const response = await fetch(
    //       "https://bank.gov.ua/NBUStatService/v1/statdirectory/exchange?json"
    //     );
    //     const data = await response.json();
    //     console.log(data);
    //   };
    //   getData();

    // const [users, setUsers] = useState([]);

    // useEffect(() => {
    //     const getData = async () => {
    //         const response = await axios.get("https://api.github.com/users");
    //         setUsers(response.data);
    //     };

    //     getData();
    // }, []);

    const users = useLoaderData();

  return <div>      
    <h1>Users</h1>
    <div className="user-list">
       {users.map(user => <div key={user.id}><img src={user.avatar_url} alt="" /></div>)}
    </div>
  </div>;
}

export default Users;
