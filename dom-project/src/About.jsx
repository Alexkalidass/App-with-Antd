import React, { useState } from 'react';
import { Layout, Menu, theme } from 'antd';

// import './assets/images/Logo.png'

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
  const [selectedKey, setSelectedKey] = useState('');

  const handleMenuClick = (click) => {
    setSelectedKey(click.key);
  };

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken(); 

  return (
    <Layout>





      <Header style={{ display: 'flex', alignItems: 'center', backgroundColor: '#F08080' }}>
        <img src="./public/images/Logo.png"  style={{ height: '40px' }} />
      </Header>



      <Layout style={{ padding: '24px 0' }}>

        <Sider width={400}>
          <Menu
          
            selectedKeys={[selectedKey]}
            onClick={handleMenuClick}
            style={{ height: '100%', backgroundColor:'#9FE2BF' }}
            items={menuItems}
          />
        </Sider>

        <Layout style={{ padding: '0 24px', background: colorBgContainer, borderRadius: borderRadiusLG }}>


          <Content style={{ padding: '24px', minHeight: 280 }}>
            {
              selectedKey === '1' && 
              <div>
                <h1>Why Choose US</h1>
                <h1>Who we are</h1>
                <h1>Services we provide</h1>
                <h1>Mission</h1>  
                <h1>Mision</h1> 
                <h1>Vision</h1>        
                <h1>Benefits</h1>  
              </div>
            }

            {
              selectedKey === '2' && 
              <div>
                <h1>
                At Akhira Services Pvt Ltd, we are dedicated to providing top-notch workforce management solutions using the UKG (Ultimate Kronos Group) Workforce Management system. Join us and be part of a team that is transforming the way businesses manage their workforce. And Also, We are looking for talented individuals to fill various roles within our workforce management team.
                </h1>
              </div>
            }
            
          </Content>

        </Layout>

      </Layout>
      
    </Layout>
  );
};

export default About;
