import React, { useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

const Navbar = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  background-color: #333;
  color: white;
`;

const Brand = styled.div`
  font-size: 20px;
`;

const Loader = styled.div`
  border: 4px solid #f3f3f3;
  border-top: 4px solid #3498db;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  animation: spin 2s linear infinite;
  margin: 20px auto;
`;

const UserGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  padding: 20px;
`;

const UserCard = styled.div`
  border: 1px solid #ccc;
  padding: 10px;
`;

const UserAvatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  object-fit: cover;
  margin-bottom: 10px;
`;

const UserName = styled.div`
  font-weight: bold;
`;

const UserEmail = styled.div`
  color: #666;
`;

function App() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(false);

  const getUsers = async () => {
    setLoading(true);
    try {
      const response = await axios.get('https://reqres.in/api/users?page=1');
      setUsers(response.data.data);
    } catch (error) {
      console.error('Error fetching user data:', error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="App">
      <Navbar>
        <Brand>UserCard App</Brand>
        <button onClick={getUsers} disabled={loading}>
          Get Users
        </button>
      </Navbar>
      {loading && <Loader />}
      <UserGrid>
        {users.map(user => (
          <UserCard key={user.id}>
            <UserAvatar src={user.avatar} alt={`${user.first_name} ${user.last_name}`} />
            <UserName>{`${user.first_name} ${user.last_name}`}</UserName>
            <UserEmail>{user.email}</UserEmail>
          </UserCard>
        ))}
      </UserGrid>
    </div>
  );
}

export default App;
