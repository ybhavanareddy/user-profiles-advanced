import React from 'react';
import { Card, Button, Modal, Form, Input } from 'antd';
import { HeartOutlined, HeartFilled,EditOutlined,DeleteOutlined,MailOutlined,PhoneOutlined,HomeOutlined ,GlobalOutlined} from '@ant-design/icons';
function UserCard({ user, onLike, onDelete, onEdit, onUpdateUser, isModalVisible, setIsModalVisible, editingUser, onCancel }) {
  // Fallback if user data is missing
  if (!user || !user.username || !user.address || !user.company) {
    console.log('Invalid user data:', user);
    return (
      <Card>
        <div>No user data available</div>
      </Card>
    );
  }

  const avatarUrl = `https://api.dicebear.com/9.x/avataaars/svg?seed=${user.username}&mood=happy`;

  // Handle form submission
  const handleFinish = (values) => {
    onUpdateUser({
      ...user,
      name: values.name,
      email: values.email,
      phone: values.phone,
      website: values.website,
      address: {
        ...user.address,
        street: values.street,
        suite: values.suite,
        city: values.city,
        zipcode: values.zipcode,
      },
      company: {
        ...user.company,
        name: values.companyName,
      },
    });
  };

  return (
    <>
      <Card
        
        cover={
          <img
            alt={`${user.username}'s avatar`}
            src={avatarUrl}
            style={{ height: '150px', objectFit: 'contain', padding: '16px' }}
            onError={(e) => console.log(`Failed to load avatar for ${user.username}:`, e)}
          />
        }
        actions={[
          <Button
            type="text"
            icon={user.liked ? <HeartFilled style={{ color: '#eb2f96' }} /> : <HeartOutlined />}
            onClick={() => onLike(user.id)}
          />,
          <Button 
            icon = {<EditOutlined style={{ color: '#1f1d1eff'}} />}
            onClick={() => onEdit(user)}>
          
          </Button>,
          <Button
            type="text"
            icon={<DeleteOutlined style={{ color: '#ff4d4f'}} />}
            onClick={() => onDelete(user.id)}
          />,
        ]}
      >
        <h4>{user.name}</h4>
        <p><MailOutlined style={{ color: '#0f0f0fff',margin:"8px"}}/> {user.email}</p>
        <p><PhoneOutlined style={{ color: '#0f0f0fff',margin:"8px"}}/> {user.phone}</p>
        <p><HomeOutlined style={{ color: '#0f0f0fff',margin:"8px"}}/> {`${user.address.street}, ${user.address.suite}, ${user.address.city}, ${user.address.zipcode}`}</p>
        <p><GlobalOutlined style={{ color: '#0f0f0fff',margin:"8px"}}/>{user.website}</p>
        
      </Card>

      <Modal
        title="Edit User"
        open={isModalVisible && editingUser?.id === user.id}
        onCancel={onCancel}
        footer={null}
      >
        <Form
          initialValues={
            editingUser?.id === user.id
              ? {
                  name: user.name,
                  email: user.email,
                  phone: user.phone,
                  street: user.address.street,
                  suite: user.address.suite,
                  city: user.address.city,
                  zipcode: user.address.zipcode,
                  website: user.website,
                  companyName: user.company.name,
                }
              : {}
          }
          onFinish={handleFinish}
        >
          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter a name' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item
            name="email"
            label="Email"
            rules={[{ required: true, message: 'Please enter an email' }]}
          >
            <Input />
          </Form.Item>
          <Form.Item name="phone" label="Phone">
            <Input />
          </Form.Item>
          <Form.Item name="street" label="Street">
            <Input />
          </Form.Item>
          <Form.Item name="suite" label="Suite">
            <Input />
          </Form.Item>
          <Form.Item name="city" label="City">
            <Input />
          </Form.Item>
          <Form.Item name="zipcode" label="Zipcode">
            <Input />
          </Form.Item>
          <Form.Item name="website" label="Website">
            <Input />
          </Form.Item>
          
          <Form.Item>
            <Button type="primary" htmlType="submit">
              Save
            </Button>
            <Button style={{ marginLeft: '8px' }} onClick={onCancel}>
              Cancel
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </>
  );
}

export default UserCard;