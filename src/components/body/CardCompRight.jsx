import styled from 'styled-components';
import { useEffect, useState } from 'react';

// card items on the right
const CardRight = styled.div({
    padding: "2rem 0rem",
    borderRadius: "0.5rem",
    borderBottom: "1px solid #ccc",
    color: '#001',
    fontWeight: '400',
    fontSize: '1rem',
  });

const CardCompRight = () => {
    const usersUrl = "https://jsonplaceholder.typicode.com/users";
    const [users, setUsers] = useState([]);
  
    // fetch users
    const fetchUsers = () => {
      return fetch(usersUrl)
        .then((res) => res.json())
        .then((username) => setUsers(username));
    };
  
  
    useEffect(() => {
      fetchUsers();
    }, []);
  
    return (
      <>
        {users.map((dt) => {
          return (
            <div key={dt.id}>
              <CardRight>
                <div>
                  <p>Name: {dt.name}</p>
                  <p>UserName: {dt.username}</p>
                  <p>Company: {dt.company.name}</p>
                  <p>Address: {dt.company.catchPhrase}</p>
                </div>
              </CardRight>
            </div>
          );
        })}
      </>
    );
  };
  export default CardCompRight;