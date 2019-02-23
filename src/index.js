import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Layout, Menu, Icon, Affix, Button } from 'antd';
const { Header, Content, Sider } = Layout;
const SubMenu = Menu.SubMenu;
const MenuItemGroup = Menu.ItemGroup;


class App extends React.Component {
    state = {
        collapsed: false,
        top: 10,
        bottom: 10,
        current: 'mail',

    };

    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }

    render() {
        return (
            <div></div>
        );
    }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
