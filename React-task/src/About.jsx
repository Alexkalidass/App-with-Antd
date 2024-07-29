import React, { useState } from 'react';
import { Layout, Menu, theme, Modal, Form, Input, Button } from 'antd';
import axios from 'axios';
import './App.css'

const { Header, Content, Sider } = Layout;

const menuItems = [
  {
    key: '1',
    label: 'Dashboard',
  },
  {
    key: '2',
    label: 'About Us',
  },
];

const About = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const [selectedKey, setSelectedKey] = useState('')



  const [isModalVisible, setIsModalVisible] = useState('')

  const [isUpdateModalVisible, setIsUpdateModalVisible] = useState('')


  const [isDeleteModalVisible, setIsDeleteModalVisible] = useState('')
  const [form] = Form.useForm()
  const [dataList, setDataList] = useState([])

  const [currentId, setCurrentId] = useState('')

  const handleMenuClick = (click) => {
    setSelectedKey(click.key);
  };

  const screenVisible = () => {
    setIsModalVisible(true)
  }

 



  // <!-----Create id and name-------->

  const handleOk = async () => {
    try {
      const values = await form.validateFields()
      const newEntry = { id: parseInt(values.id), name: values.name }

      await axios.post('https://jsonplaceholder.typicode.com/posts', newEntry)

      setDataList([...dataList, newEntry])
      form.resetFields()
      setIsModalVisible(false)
    } catch (error) {
      console.error('Error creating content:', error)
    }
  }

  const handleCancel = () => {
    form.resetFields()
    setIsModalVisible(false)
    setIsUpdateModalVisible(false)
  }



// <----Update--->


  const showUpdateModal = (id) => {
    setCurrentId(id);
    const entry = dataList.find(item => item.id === id);
    if (entry) 
    {
      form.setFieldsValue({ id: entry.id, name: entry.name })
    }
    setIsUpdateModalVisible(true)
  }

  const handleUpdate = async () => 
    {
      try 
      {
        const values = await form.validateFields()
        const updatedEntry = { id: parseInt(values.id), name: values.name }

    
        await axios.put(`https://jsonplaceholder.typicode.com/posts/${updatedEntry.id}`, updatedEntry)

        const updatedDataList = dataList.map
        (item =>
        item.id === updatedEntry.id ? updatedEntry : item)
        setDataList(updatedDataList)

        form.resetFields()
        setIsUpdateModalVisible(false)
      } 
    catch (error) 
    {
      console.error('Error updating content:', error)
    }
  }





  // Delete Modal
  const showDeleteModal = () => {
    setIsDeleteModalVisible(true)
  }

  // Delete Process

  const handleDelete = async () => {
    try {
      const values = await form.validateFields()
      const idToDelete = parseInt(values.id)
      
      const response = await axios.delete(`https://jsonplaceholder.typicode.com/posts/${idToDelete}`)

      if (response.status === 200) {
        const updatedDataList = dataList.filter(item => item.id !== idToDelete)
        setDataList(updatedDataList)
      }

      form.resetFields();
      setIsDeleteModalVisible(false);
    } 
    catch (error) 
    {
      console.error('Error deleting content:', error)
    }
  }

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F08080' }}>
        <img src="./public/images/Logo.png" style={{ height: '40px' }} alt="Logo" />
      </Header>

      <Layout >
        <Sider width={400}>
          <Menu
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            style={{ height: '100%', backgroundColor: '#9FE2BF' }}
            items={menuItems}
          />
        </Sider>

        <Layout style={{ padding: '0 24px', background: colorBgContainer, borderRadius: borderRadiusLG }} className='Stylebuttons'>
          <Content style={{ padding: '24px', minHeight: 280 }}>
            {selectedKey === '1' && (
              <div>
                <h1>Akhira Services Pvt Ltd,..</h1>

                <Button  onClick={screenVisible}>Create</Button>
                <Button  onClick={ showUpdateModal}>Update</Button>
                <Button  onClick={showDeleteModal}>Delete</Button>

                <div>
                  {dataList.map((item) => (
                    <div key={item.id}>
                      <h3>ID: {item.id}</h3>
                      <p>Name: {item.name}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {selectedKey === '2' && (
              <div>
                <h1>
                  At Akhira Services Pvt Ltd, we are dedicated to providing top-notch workforce management solutions
                  using the UKG (Ultimate Kronos Group) Workforce Management system. Join us and be part of a team that
                  is transforming the way businesses manage their workforce. And Also, We are looking for talented
                  individuals to fill various roles within our workforce management team.
                </h1>
              </div>
            )}
          </Content>
        </Layout>
      </Layout>

      <Modal
        title="Create New Item"
        visible={isModalVisible}
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: 'Please input the ID!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please input the name!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Update Item"
        visible={isUpdateModalVisible}
        onOk={handleUpdate}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: 'Please enter the ID!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

      <Modal
        title="Delete Item"
        visible={isDeleteModalVisible}
        onOk={handleDelete}
        onCancel={handleCancel}
      >
        <Form form={form}>
          <Form.Item
            name="id"
            label="ID"
            rules={[{ required: true, message: 'Please enter the ID of the item to delete!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="name"
            label="Name"
            rules={[{ required: true, message: 'Please enter the name of the item to delete!' }]}
          >
            <Input />
          </Form.Item>
        </Form>
      </Modal>

    </Layout>
  );
};

export default About;

