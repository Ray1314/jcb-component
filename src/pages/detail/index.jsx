import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { getArticleList } from '../../server'
import { Layout, Menu } from 'antd';
import {
    AppstoreOutlined,
    PieChartOutlined,
} from '@ant-design/icons';
const { Header, Sider, Content } = Layout;
const { SubMenu } = Menu;
class Detail extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            openKeys:this.props.location.pathname.split("/")[1]
        }
    }
    componentDidMount() {
        getArticleList().then((res) => {
            // console.log(res)
        },
            (error) => {
                console.log("get response failed!");
            })
    }

    onOpenChange = (item) =>{
        this.setState({
            openKeys:item[item.length - 1]
        })
    }

    render() {
        const {openKeys}  = this.state;
        const selectKey = this.props.location.pathname;
        return (
            
            <Layout style={{ height: '100vh' }}>
                <Header>
                    <a href='/home'>返回</a>
                </Header>

                <Layout>
                    <Sider>
                        <Menu
                            selectedKeys={[selectKey]}
                            openKeys={[openKeys]}
                            mode="inline"
                            theme="dark"
                            onOpenChange={this.onOpenChange}
                            // onSelect={(item) => {  }}
                        >
                            <Menu.Item key="/detail/child1" icon={<PieChartOutlined />}>
                                <Link to='/detail/child1' replace>页面一</Link>
                            </Menu.Item>
                            <SubMenu key="detail" icon={<AppstoreOutlined />} title="菜单二">
                                <Menu.Item key="/detail/child2">
                                    <Link to='/detail/child2'>页面二</Link>
                                </Menu.Item>
                            </SubMenu>
                            <SubMenu key="detail1" icon={<AppstoreOutlined />} title="菜单二">
                                <Menu.Item key="/detail1/child3">
                                    <Link to='/detail1/child3'>页面二</Link>
                                </Menu.Item>
                            </SubMenu>
                        </Menu>
                    </Sider>
                    <Content>
                        {this.props.children}
                    </Content>
                </Layout>

            </Layout>
        )
    }
}
export default withRouter(Detail)