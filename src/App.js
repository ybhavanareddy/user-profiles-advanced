import React, { useState, useEffect } from 'react';
import { Spin, Row, Col } from 'antd';
import UserCard from './UserCard';
import './App.css';

function App() {
  const [users, setUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const[editingUser, setEditingUser] = useState(null);
  const [isModalVisible, setIsModalVisible] = useState(false);

  useEffect(() => {
    console.log('Fetching users...');
    fetch('https://jsonplaceholder.typicode.com/users')
      .then((response) => response.json())
      .then((data) => {
        console.log('Users fetched:', data);
        setUsers(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      });
  }, []);

  //Toggle like state for a user 
  const handleLike = (userId)=>{
    setUsers(
      users.map((user)=> 
        user.id == userId ? {...user, liked:!user.liked}:user
      )
    );
  };

  //Delete a user
  const handleDelete = (userId)=>{
    setUsers(users.filter((user)=> user.id !== userId));
  };

  //Open edit modal with user data 
  const handleEdit = (user) => {
    setEditingUser(user);
    setIsModalVisible(true);
  };

  //Hande form submission 
  const handleUpdateUser = (updateUser) => {
    setUsers(
      users.map((user)=>
        user.id === updateUser.id ? {...user,...updateUser}:user
      )
    );
    setIsModalVisible(false)
    setEditingUser(null);
  };

  //close modal without saving 
  const handleCancel = ()=>{
    setIsModalVisible(false);
    setEditingUser(null);
  }




  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', marginBottom: '24px' }}>User Profiles</h1>
      {isLoading ? (
        <div style={{ textAlign: 'center', marginTop: '50px' }}>
          <Spin size="large" tip="Loading users..." />
        </div>
      ) : users.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No users loaded. Check the console for errors.</p>
      ) : (
        <Row gutter={[16, 16]}>
          {users.map((user) => (
            <Col xs={24} sm={12} md={8} lg={8} key={user.id}>
              <UserCard 
                user={user}
                onLike={handleLike}
                onDelete={handleDelete}
                onEdit={handleEdit}
                onUpdateUser={handleUpdateUser}
                isModalVisible={isModalVisible}
                setIsModalVisible={setIsModalVisible}
                editingUser={editingUser}
                onCancel={handleCancel} 
              
              />
            </Col>
          ))}
        </Row>
      )}
    </div>
  );
}

export default App;