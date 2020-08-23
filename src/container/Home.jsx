import React, { Component } from 'react';
import { Link, Route, Switch, Redirect, HashRouter, withRouter } from 'react-router-dom';


// 子页面
import About from './About';

import Tools_Base64 from './ctftools/Base64'
import Tools_Url from './ctftools/Url'
import Tools_Unicode from './ctftools/Unicode'
import Tools_Hex from './ctftools/Hex'


// 主页面
import "../static/css/Home.css";
import { Layout, Menu } from 'antd';
import { UserOutlined,  } from '@ant-design/icons';

const { SubMenu } = Menu;
const { Header, Content, Sider } = Layout;


const LeftSider = withRouter(({ history }) => {
  return (
    <Sider >
      <div className="logo" />
      <Menu
        mode="inline"
        defaultSelectedKeys={['/about']}
        selectedKeys={[history.location.pathname]}
        theme="dark"
      >
        <Menu.Item key="/about" icon={<UserOutlined />}>
          <Link to="/about">关于我们</Link>
        </Menu.Item>
        <SubMenu key="sub1" icon={<UserOutlined />} title="CTF工具集">
          <Menu.Item key="/tools/ctf/base64"><Link to="/tools/ctf/base64" replace>Base64</Link></Menu.Item>
          <Menu.Item key="/tools/ctf/url"><Link to="/tools/ctf/url" replace>Url解码</Link></Menu.Item>
          <Menu.Item key="/tools/ctf/unicode"><Link to="/tools/ctf/unicode" replace>unicode解码</Link></Menu.Item>
          <Menu.Item key="/tools/ctf/hex"><Link to="/tools/ctf/hex" replace>十六进制转中文</Link></Menu.Item>
        </SubMenu>
        <SubMenu key="sub2" icon={<UserOutlined />} title="渗透工具集">
          <Menu.Item key="/tools/ctf/safe">杀毒软件识别</Menu.Item>
          <Menu.Item key="/tools/ctf/priup">Windows 提权辅助</Menu.Item>
        </SubMenu>
      </Menu>
    </Sider>
  );
})

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      current: '/',
      top: 0
    }
  }



  render() {
    return (
      <HashRouter>
        <div>
          <Layout>
            <HashRouter>
              <Layout style={{ minHeight: '100vh' }}>
                <LeftSider />
                <Layout>
                  <Header style={{ background: '#fff', padding: 0 }}>
                  </Header>
                  <Content style={{ margin: '0 0px' }}>
                    <div
                      style={{
                        margin: '1px 1px',
                        padding: 0,
                        background: '#fff',
                        minHeight: 850,
                      }}   >
                      <main>
                        <Switch>
                          <Route exact path="/about" component={About}></Route>
                          <Route path="/tools/ctf/base64" component={Tools_Base64}></Route>
                          <Route path="/tools/ctf/url" component={Tools_Url}></Route>
                          <Route path="/tools/ctf/unicode" component={Tools_Unicode}></Route>
                          <Route path="/tools/ctf/hex" component={Tools_Hex}></Route>
                          
                          <Redirect to="/" />
                        </Switch>
                      </main>
                    </div>
                  </Content>
                </Layout>
              </Layout>
            </HashRouter>
          </Layout>
        </div>
      </HashRouter >
    );
  }
}

export default Home;