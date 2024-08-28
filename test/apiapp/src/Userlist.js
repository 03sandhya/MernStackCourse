import React from 'react';

export default function UserList() {
  const handleChange = async (event) => {
    const page = event.target.value;
    let res = await fetch(`https://reqres.in/api/users?page=${page}`, { method: "GET" });
    let userdata = await res.json();
    console.log(userdata); 
  };

  return (
    <div>
      <h1>DROP DOWN MENU</h1>
      <select onChange={handleChange}>
        <option value="1"> 1</option>
        <option value="2"> 2</option>
        <option value="3"> 3</option>
        <option value="4"> 4</option>
      </select>
    </div>
  );
}